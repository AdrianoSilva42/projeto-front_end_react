import React from "react";
import { GlobalStyle, Container } from "./GlobalStyle/GlobalStyle.js";
import Header from "./componentes/Header/Header.js";
import Filtro from "./componentes/Filtro/Filtro.js";
import TelaProdutos from "./componentes/TelaProdutos/TelaProdutos.js";
import Carrinho from "./componentes/Carrinho/Carrinho.js";


export default function App() {

  const produtos = [
   {
      name:'Vostok (USSR, 1961)',
      valor: 900.650,
      img:'https://cdnb.artstation.com/p/assets/images/images/003/770/751/large/alexandr-ugrumov-f2.jpg?1477329721'
    }
  ]

  return (
    <>
      <GlobalStyle/>
      {/* ------------------------------------------------------------ */}
      <Header/>
      <Container>
         <Filtro/>
         <TelaProdutos/>
         <Carrinho/>
      </Container>

    </>
  );
}
