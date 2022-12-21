import React, {useState} from "react";
import ProdutoDate from "../../Date/Produtos.json";
import {ContainerProduto, QuantProdu, Ordem, Label} from './style'
import Produtos from "../Produtos/Produtos";

export default function TelaProdutos(props){

        //Lista de dados para utilizar
        const [ProdutosList, setProdutosList] = useState(ProdutoDate)
        
        const [ordem, setOrdem] = useState('crescente')

    return(
        
        <ContainerProduto>
                <QuantProdu>Quantidade de produtos:{ProdutosList.length}</QuantProdu>
                <Label htmlFor="ordem">Ordenação:</Label>
                <Ordem id="ordem"
                       value={ordem}
                       onChange={(e) => {setOrdem(e.target.value)}}>

                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </Ordem>
                {ProdutosList
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
                        switch(ordem){
                            case 'crescente':
                                return min.valor - max.valor
                            default:
                                return min.valor + max.valor
                        }
                    })
                    .map((produto) => {
                        return <Produtos key={produto.id} produto={produto}/>
                    })}
        </ContainerProduto>
    )
}