import React from "react";
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
    <Container>
        <Header>
            <Avatar src='https://avatars.githubusercontent.com/u/87579128?v=4' />
            <Login>OliveiraJess</Login>
            <Name>Jéssica de Oliveira</Name>
        </Header>
        <Inner>
            <Data><MdGroup size={20} />10&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;30&nbsp;<i>seguindo</i></Data>
            <Data><MdWork size={20} />Desenvolvedora FrontEnd Jr.</Data>
            <Data><MdLocationCity size={20} />Orleans</Data>
            <Data>
                <MdLink size={20} />
                <a href='https://www.linkedin.com/in/jessica-de-oliveira/'>LinkedIn</a>
            </Data>
        </Inner>
    </Container>
);

export default Profile;