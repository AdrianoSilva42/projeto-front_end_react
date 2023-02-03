import React from "react";
import {ContainerCarrinho, Total} from './style'

export default function Carrinho(props){

    let carrinho = props.produtosCar
    let total = 0

    carrinho.map((produto) => {
        total += produto.qtd*produto.valor
    });

    return(
        <ContainerCarrinho>
           <h2>Carrinho de compras</h2> 
           {carrinho.map((produto) => (
                 <div>
                    <div>
                    <p>{produto.name}</p>
                    <p>{produto.valor}</p>
                    <p>{produto.qtd}</p>
                    <button onClick={() => props.removeProduto(produto.id)}>Excluir</button>
                    </div>
                </div>        
           ))}
            <Total>Total: R${total}</Total>
        </ContainerCarrinho>
    )
}