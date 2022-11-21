import React from "react";
import { GlobalStyle, Container } from "./GlobalStyle/GlobalStyle.js";
import Header from "./componentes/Header/Header.js";
import Filtro from "./componentes/Filtro/Filtro.js";
import Produtos from "./componentes/Produtos/Produtos.js";
import Carrinho from "./componentes/Carrinho/Carrinho.js";


export default function App() {

  return (
    <>
      <GlobalStyle/>
      {/* ------------------------------------------------------------ */}
      <Header/>
      <Container>
         <Filtro/>
         <Produtos/>
         <Carrinho/>
      </Container>

    </>
  );
}
