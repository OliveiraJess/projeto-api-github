import styled from 'styled-components';

export const Container = styled.div`
background: rgba(0, 0, 0, 0.25);
border-left: 3px solid ${(props) => props.color || props.theme.colors.champagneDark};
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;
`;

export const Name = styled.h3`
font-size: ${(props) => props.theme.fontSizes.large};
font-weight: normal;
`;

export const Description = styled.p`
font-size: ${(props) => props.theme.fontSizes.small};
line-height: 1.25;
margin: 1rem 0;
`;

export const Footer = styled.footer`
align-items: center;
color: ${(props) => props.color || props.theme.colors.champagneDark};
display: flex;
font-size: ${(props) => props.theme.fontSizes.small};
justify-content: space-between;
`;

export const Lang = styled.span`
color: inherit;
`;

export const Link = styled.a`
color: inherit;
font-weight: bold;
text-decoration: none;
text-transform: uppercase;
`;