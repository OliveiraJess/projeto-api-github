import React, { useState, useEffect } from "react";
import { Sidebar, Container, Main, Loading } from './styles';
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { getLangsFrom, getUser } from "../../services/api";

const RepositoriesPage = () => {

    const [user, setUser] = useState();
    const [currentLanguage, setCurrentLanguage] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const [userResponse] = await Promise.all([
                getUser(`OliveiraJess`)
            ]);

            setUser(userResponse.data)
            setLoading(false)
        }
        loadData();
    }, []);


    // const user = {
    //     login: 'OliveiraJess',
    //     name: 'Jéssica de Oliveira',
    //     avatar_url: 'https://avatars.githubusercontent.com/u/87579128?v=4',
    //     followers: 30,
    //     following: 10,
    //     company: null,
    //     blog: 'https://www.linkedin.com/in/jessica-de-oliveira/',
    //     location: 'Orleans - SC'
    // };

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
            language: null,
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

    const onFilterClick = (language) => {
        setCurrentLanguage(language);
    };

    if (loading) {
        return <Loading>Carregando...</Loading>;
    }

    return (
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick} />
            </Sidebar>
            <Main>
                <Repositories repositories={repositories} currentLanguage={currentLanguage} />
            </Main>
        </Container>
    )
};

export default RepositoriesPage;