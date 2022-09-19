import axios from 'axios';
import { langColors } from './config'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;

export const getUser = async (login) => api.get(`/users/${login}`);

export const getRepos = async (login) => api.get(`/users/${login}/repos`);

export const getLangsFrom = (repositories) => {

  let stats = repositories
    .map((repository) => repository.language)
    .reduce((data, language) => ({
      ...data,
      [language]: (data[language] || 0) + 1,
    }), []);

  delete stats.null;

  stats = Object.keys(stats).map((language) => ({
    name: language,
    count: stats[language],
    color: langColors[language.toLowerCase()],
  }))
    .sort((a, b) => b.count - a.count);

  return stats;
}
