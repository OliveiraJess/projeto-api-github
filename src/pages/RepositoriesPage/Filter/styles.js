import styled from 'styled-components';

export const Container = styled.div`
display: grid;
gap: 0.2rem;
grid-template-columns: auto;
margin: 1rem auto;
padding-right: 2rem;

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 0.8rem;
    grid-template-columns: auto auto;
    padding: 0 1rem;
}
`;

export const Selector = styled.button`
align-items: center;
background: ${(props) => props.theme.colors.container};
border: none;
border-bottom-right-radius: 20px;
border-top-right-radius: 20px;
color: ${(props) => props.color || props.theme.colors.text};
display: flex;
justify-content: space-between;
min-height: 2rem;
padding: 0 1rem;
transition: background 0.3s, transform 0.3s;
width: 100%;

&:hover,
&.selected {
    background: ${(props) => props.color || props.theme.colors.light};
    color: ${(props) => props.color ? props.theme.colors.white : props.theme.colors.black};
    transform: translateX(5px) scale(1.02);
}

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
border-radius: 20px;

&:hover,
&.selected {
    transform: translateX(0) scale(1.02);
}

}
`;

export const Cleaner = styled.button`
background: transparent;
border: none;
color: ${(props) => props.theme.colors.text};
text-align: left;
padding: 1rem;

&:hover {
    color: rgba(255, 255, 255, 0.5);
}

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
    padding: 0 1rem;
}
`;