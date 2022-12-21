import React from "react";
import {CardProduto, Image, Parag, Button} from './style'

export default function Produtos(props){
    return(
        <div>
            <CardProduto>
                <Image src={props.produto.img}/>
                <Parag>{props.produto.name}</Parag>
                <Parag>R$: {props.produto.valor}</Parag>
                <Button> Adicionar </Button>
            </CardProduto>
        </div>
    );
};