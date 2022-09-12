import styled from 'styled-components';

export const Container = styled.div`
padding: 1rem;
`;

export const Header = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 0;

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    align-items: center;
    flex-direction: row;
}
`;

export const Avatar = styled.img`
align-self: center;
border-radius: 50%;
margin-bottom: 1rem;
width: 70%;

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 0;
    margin-right: 1rem;
    height: 70px;
    width: 70px;
}
`;

export const Login = styled.h1`
font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Name = styled.h2`
font-size: ${(props) => props.theme.fontSizes.subtitle};
font-weight: normal;

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
}
`;