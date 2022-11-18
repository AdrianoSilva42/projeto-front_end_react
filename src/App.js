import React from "react";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle.js";
import Header from "./componentes/Header/Header.js";
import Filtro from "./componentes/Filtro/Filtro.js";


export default function App() {

  return (
    <div>
      <GlobalStyle/>
      {/* ------------------------------------------------------------ */}

       <Header/>
       <Filtro/>

    </div>
  );
}
