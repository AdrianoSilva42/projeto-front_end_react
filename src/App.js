import React, {useState} from "react";
import { GlobalStyle, Container } from "./GlobalStyle/GlobalStyle.js";
import Header from "./componentes/Header/Header.js";
import Filtro from "./componentes/Filtro/Filtro.js";
import TelaProdutos from "./componentes/TelaProdutos/TelaProdutos.js";
import Carrinho from "./componentes/Carrinho/Carrinho.js";


export default function App() {

  const [query, setQuery] = useState('')
  const [priceMin, setPriceMin] = useState(-Infinity)
  const [priceMax, setPriceMax] = useState(Infinity)

  return (
    <>
      <GlobalStyle/>
      {/* ------------------------------------------------------------ */}
      <Header/>
      <Container>
         <Filtro query={query}
                 setQuery={setQuery}
                 priceMin={priceMin}
                 setPriceMin={setPriceMin}
                 priceMax={priceMax}
                 setPriceMax={setPriceMax} />

         <TelaProdutos query={query} 
                       priceMin={priceMin}
                       priceMax={priceMax} />
         <Carrinho/>
      </Container>

    </>
  );
}
