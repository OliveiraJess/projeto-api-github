import React from "react";
import { Sidebar, Container, Main } from './styles';
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

const RepositoriesPage = () => (

    <Container>
        <Sidebar>
            <Profile />
            <Filter />
        </Sidebar>
        <Main>
            <Repositories />
        </Main>
    </Container>
)

export default RepositoriesPage;