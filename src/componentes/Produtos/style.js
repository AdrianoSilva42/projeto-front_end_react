import styled from "styled-components";

export const CardProduto = styled.div`
    width:  95%;
    height: 95%;
    margin: 3%;
    border: 1px solid white;
    padding: 3%;
    
`;

export const Image = styled.img`
    width: 18vw;
    height: 22vh;
    //margin-right: auto;
    word-wrap: break-word;
`;

export const Parag = styled.p`
    font-size: 1em;
    font-weight: bolder;
    word-wrap: break-word;
    
`;

export const Button = styled.button`
    padding: 2%;
    width: 15vw;
    height: 5vh;
    margin: 5%;
    background-color: #4EA93B;
    color: white;
    border: none;
    box-sizing: unset;
    word-wrap: break-word;
    :hover{
            background-color: #3D31B5;
        }
    
`;