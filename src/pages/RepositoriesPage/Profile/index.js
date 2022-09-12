import React from "react";
import { Container, Header, Avatar, Login, Name } from './styles'

const Profile = () => (
    <Container>
        <Header>
            <Avatar src='https://avatars.githubusercontent.com/u/87579128?v=4' />
            <Login>OliveiraJess</Login>
            <Name>Jéssica de Oliveira</Name>
        </Header>
    </Container>
);

export default Profile;