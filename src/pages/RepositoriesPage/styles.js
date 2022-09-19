import styled from 'styled-components';

export const Loading = styled.div`
align-items: center;
display: flex;
justify-content: center;
min-height: 100vh;
`;

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
overflow-y: hidden;
`;

export const Main = styled.section`
background: ${(props) => props.theme.colors.container};
overflow-y: hidden;
padding: 40px;
width: 100%;

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
}

@media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
}
`;