import React from "react";
import {ContainerProduto, QuantProdu, Ordem, Label} from './style'
import Produtos from "../Produtos/Produtos";

export default function TelaProdutos(props){

 const getListFilter = () => {
    return props.produtosList
    .filter((produto)=>{
        return produto.name.toLowerCase().includes(props.query.toLowerCase())
    })
    .filter((produto) => {
        return produto.valor >= props.priceMin || props.priceMin === ''
    })
    .filter((produto) => {
        return produto.valor <= props.priceMax || props.priceMax === ''
    })
    .sort((min, max) => {
        switch(props.ordem){
            case 'crescente':
                return min.valor - max.valor
            default:
                return min.valor + max.valor
        }
    })
  };

  const listFilter = getListFilter()
        
    return(
        
        <ContainerProduto>
                <QuantProdu>Quantidade de produtos:{listFilter.length}</QuantProdu>
                <Label htmlFor="ordem">Ordenação:</Label>
                <Ordem id="ordem"
                       value={props.ordem}
                       onChange={(e) => {props.setOrdem(e.target.value)}}>

                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </Ordem>
                { listFilter
                    .map((produto) => {
                        return <Produtos key={produto.id} produto={produto} addProduto={props.addProduto} />
                    })}
        </ContainerProduto>
    )
}