import React, {useEffect, useState} from "react";
import ProdutoDate from "./Date/Produtos.json";
import { GlobalStyle, Container} from "./GlobalStyle/GlobalStyle.js";
import Header from "./componentes/Header/Header.js";
import Filtro from "./componentes/Filtro/Filtro.js";
import TelaProdutos from "./componentes/TelaProdutos/TelaProdutos.js";
import Carrinho from "./componentes/Carrinho/Carrinho.js";


export default function App() {

//Lista de dados para utilizar
const [produtosList, setProdutosList] = useState(ProdutoDate)

//Estados para aplicar nos filtros
  const [query, setQuery] = useState('')
  const [priceMin, setPriceMin] = useState(-Infinity)
  const [priceMax, setPriceMax] = useState(Infinity)
  const [ordem, setOrdem] = useState('crescente')

//Estado para aplicar no carrinho de compras
  const [produtosCar, setProdutosCar] = useState([])
  

  const addProduto = (id) => {
    let copyProdutosCar = [...produtosCar ]
    let estarNoCar = false
  
    copyProdutosCar.map((produto) => {
      if (produto && id === produto.id){
        estarNoCar = true
        produto.qtd = produto.qtd + 1
      }
    })

    if(!estarNoCar){
      copyProdutosCar.push(
        produtosList.find((produto) =>{
          return produto.id === id ? produto : false
        }) 
      )
    }
    setProdutosCar(copyProdutosCar)

    localStorage.setItem('carrinho de produtos', JSON.stringify(copyProdutosCar))
  };
  
  const removeProduto = (productId) => {
    let copyProdutosCar = [...produtosCar]

    for (let i=0; i < copyProdutosCar.length; i++){
      if (productId === copyProdutosCar[i].id){
        if (copyProdutosCar[i].qtd > 1){
          copyProdutosCar[i].qtd -= 1;
        } else {
          copyProdutosCar.splice(i, 1)
        }
      }
    }
    setProdutosCar(copyProdutosCar)

    localStorage.setItem('carrinho de produtos', JSON.stringify(copyProdutosCar))
  };

 useEffect(() => {
    setProdutosCar(JSON.parse(localStorage.getItem('carrinho de produtos')))

 }, [])

  return (
    <div>
      <GlobalStyle/>
      {/* ------------------------------------------------------------ */}
      <Header/>
      <Container>
         <Filtro query={query} setQuery={setQuery}

                 priceMin={priceMin} setPriceMin={setPriceMin}

                 priceMax={priceMax} setPriceMax={setPriceMax} />

         <TelaProdutos query={query} 
                       priceMin={priceMin}
                       priceMax={priceMax}
                       ordem={ordem}
                       setOrdem={setOrdem} 
                       produtosList={produtosList}
                       addProduto={addProduto}
                        />
         
         <Carrinho produtosCar={produtosCar}
                   removeProduto={removeProduto} />
      </Container>

    </div>
  );
}
