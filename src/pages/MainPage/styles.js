import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
min-height: 100vh;
padding: 0 2rem;
text-align: center;
`;

export const Logo = styled.img`
width: 130px;
`;

export const Title = styled.h1`
color: ${(props) => props.theme.colors.text};
font-size: 2.2rem;
`;

export const Form = styled.div`
align-items: center;
display: flex;
justify-content: center;
max-width: 583px;
width: 100%;
`;

export const Input = styled.input`
background: rgba(0, 0, 0, 0.8);
border: none;
font-size: 24px;
height: 64px;
line-height: 64px;
margin-right: 24px;
padding: 0 24px;
width: 100%;

&::placeholder {
  color: ${(props) => props.theme.colors.metalDark};
}
`;

export const Button = styled(Link)`
align-items: center;
background: transparent;
border: 3px solid ${(props) => props.theme.colors.text};
display: flex;
height: 64px;
justify-content: center;
transition: background 0.3s;
width: 80px;

&::hover {
  background: ${(props) => props.theme.colors.container};
}
`;