import React from "react";
import {ContainerProduto, QuantProdu, Ordem, Label} from './style'
import Produtos from "../Produtos/Produtos";

export default function TelaProdutos(){

    const produtos = [
        {
           name:'Vostok (USSR, 1961)',
           valor: 900.650,
           img:'https://cdnb.artstation.com/p/assets/images/images/003/770/751/large/alexandr-ugrumov-f2.jpg?1477329721'
         }
       ]

    return(
        
        <ContainerProduto>
                <QuantProdu>Quantidade de produtos:{}</QuantProdu>
                <Label htmlFor="ordem">Ordenação:</Label>
                <Ordem id="ordem"> 
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </Ordem>
                {/* <Produtos produto1={produtos[0]} />
                <Produtos produto1={produtos[0]} />
                <Produtos produto1={produtos[0]} />
                <Produtos produto1={produtos[0]} /> */}
        </ContainerProduto>
    )
}