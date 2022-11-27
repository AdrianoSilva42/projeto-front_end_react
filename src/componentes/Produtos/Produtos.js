import React from "react";
import {CardProduto, Image} from './style'

export default function Produtos(props){
    return(
        <div>
            <CardProduto>
                <Image src={props.produto1.img}/>
                <p>{props.produto1.name}</p>
                <p>{props.produto1.valor}</p>
            </CardProduto>
        </div>
    );
};