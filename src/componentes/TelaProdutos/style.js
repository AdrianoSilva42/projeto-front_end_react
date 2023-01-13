import styled from "styled-components";

export const ContainerProduto = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    //grid-template-rows: 2fr 1fr ;
    //border: solid 2px black;
    width: 85vw;
    height: 100%;
    margin: auto; 
    gap: 5px;
    color: white;
`;

export const QuantProdu = styled.p`
       color: white;
`;


export const Ordem = styled.select`
    height: 4vh;
`;


export const Label = styled.label`
    justify-self: end;
`;

