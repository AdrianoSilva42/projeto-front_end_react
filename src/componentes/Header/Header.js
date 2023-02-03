import React from "react";
import {Titulo2, ContainerHeader, Img} from './style'
import img from '../../img/logo.png'



export default function Header(){
    return(
        <ContainerHeader>
            <Img src={img}/>
            {/* <Titulo2>
               
                Naves, Foguetes e Ônibus espaciais famosos da historia
            </Titulo2> */}
        </ContainerHeader>
    )
}