import React from "react";
import {ContainerFiltro, Titulo1, Input} from './style'

export default function Filtro(props){

    

    return(
        <ContainerFiltro>
            <Titulo1>Filtros</Titulo1>

            <label htmlFor='valorMin'>Valor Minimo:</label>
            <Input type='number'
                   id='valorMin' 
                   name='valorMin'
                   value={props.priceMin}
                   onChange={(e)=> {props.setPriceMin(e.target.value)}} />
        {/* ------------------------------------------------------------- */}
            <label htmlFor='valorMax'>Valor Maximo:</label>
            <Input type='number' 
                   id='valorMax' 
                   name='valorMax'
                   value={props.priceMax}
                   onChange={(e)=>{props.setPriceMax(e.target.value)}} />

        {/* ------------------------------------------------------------- */}

            <label htmlFor='searchName'>Buscar por nomes:</label>
            <Input type='text' 
                   id='procurarNome' 
                   name='searchName'
                   value={props.query}
                   onChange={(e)=> {props.setQuery(e.target.value)}} />

        </ContainerFiltro>
    )
}