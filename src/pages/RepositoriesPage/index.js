import React from "react";
import { Sidebar, Container, Main } from './styles';
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { getLangsFrom } from "../../services/api";

const RepositoriesPage = () => {

    const user = {
        login: 'OliveiraJess',
        name: 'Jéssica de Oliveira',
        avatar_url: 'https://avatars.githubusercontent.com/u/87579128?v=4',
        followers: 30,
        following: 10,
        company: null,
        blog: 'https://www.linkedin.com/in/jessica-de-oliveira/',
        location: 'Orleans - SC'
    };

    const repositories = [
        {
            id: '1',
            name: 'Repo 1',
            description: 'descricao 1',
            html_url: 'https://www.linkedin.com/in/jessica-de-oliveira/',
            language: 'javascript',
        },
        {
            id: '2',
            name: 'Repo 2',
            description: 'descricao 2',
            html_url: 'https://www.linkedin.com/in/jessica-de-oliveira/',
            language: 'javascript',
        },
        {
            id: '3',
            name: 'Repo 3',
            description: 'descricao 3',
            html_url: 'https://www.linkedin.com/in/jessica-de-oliveira/',
            language: 'Typescript',
        },
        {
            id: '4',
            name: 'Repo 4',
            description: 'descricao 4',
            html_url: 'https://www.linkedin.com/in/jessica-de-oliveira/',
            language: '',
        },
        {
            id: '5',
            name: 'Repo 5',
            description: 'descricao 5',
            html_url: 'https://www.linkedin.com/in/jessica-de-oliveira/',
            language: 'java',
        },
        {
            id: '6',
            name: 'Repo 6',
            description: 'descricao 6',
            html_url: 'https://www.linkedin.com/in/jessica-de-oliveira/',
            language: 'java',
        },
    ];

    const languages = getLangsFrom(repositories);

    return (
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter languages={languages} />
            </Sidebar>
            <Main>
                <Repositories repositories={repositories} />
            </Main>
        </Container>
    )
};

export default RepositoriesPage;