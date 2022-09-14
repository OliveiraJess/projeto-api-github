import styled from 'styled-components';

export const Container = styled.div`
display: grid;
gap: 2rem;
grid-template-columns: repeat(3, minmax(0, 1fr));
margin-top: 2rem;

@media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) { 
    grid-template-columns: auto;
}
`;