import styled from 'styled-components';

export const Container = styled.main`
display: flex;
min-height: 100vh;

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
}
`;

export const Sidebar = styled.aside`
background: ${(props) => props.theme.colors.background};
min-width: 20rem;
max-heigth: 100vh;
overflow-y: hidden;

`;

export const Main = styled.section`
background: ${(props) => props.theme.colors.container};
width: 100%;
heigth: 100vh;
overflow-y: hidden;
padding: 40px;

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    heigth: 100%;
}

@media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
}



`;