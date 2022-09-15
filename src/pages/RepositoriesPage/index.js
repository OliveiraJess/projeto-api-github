import React from "react";
import { Sidebar, Container, Main } from './styles';
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

const RepositoriesPage = () => {
    const user = {
        login: 'OliveiraJess',
        name: 'Jéssica de Oliveira',
        avatar_url: 'https://avatars.githubusercontent.com/u/87579128?v=4',
        followers: 30,
        following: 10,
        company: null,
        blog: '',
        location: 'Orleans - SC'
    }

    return (
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter />
            </Sidebar>
            <Main>
                <Repositories />
            </Main>
        </Container>
    )
};

export default RepositoriesPage;