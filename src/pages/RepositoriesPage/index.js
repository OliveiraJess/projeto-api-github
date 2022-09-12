import React from "react";
import { Sidebar, Container, Main } from './styles';
import Profile from "./Profile";

const RepositoriesPage = () => (

    <Container>
        <Sidebar>
            <Profile />
        </Sidebar>
        <Main>
            Main
        </Main>
    </Container>
)

export default RepositoriesPage;