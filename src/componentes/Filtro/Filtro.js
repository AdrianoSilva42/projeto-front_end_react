import React from "react";
import {ContainerFiltro, Titulo1, Input} from './style'

export default function Filtro(){
    return(
        <ContainerFiltro>
            <Titulo1>Filtros</Titulo1>

            <label htmlFor='valorMin'>Valor Minimo:</label>
            <Input type='number' id='valorMin' name='valorMin' />
        {/* ------------------------------------------------------------- */}
            <label htmlFor='valorMax'>Valor Maximo:</label>
            <Input type='number' id='valorMax' name='valorMax' />

        {/* ------------------------------------------------------------- */}

            <label htmlFor='searchName'>Buscar por nomes:</label>
            <Input type='text' id='procurarNome' name='searchName' />

        </ContainerFiltro>
    )
}