import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

`;

export const Container = styled.div`
display: flex;
min-height: 100%;
width: 100%;
background-image:url('https://images3.alphacoders.com/910/910923.png');
//background-repeat: repeat;
background-size: cover;
//background-size: 100%;
`;

