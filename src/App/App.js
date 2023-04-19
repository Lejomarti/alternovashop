import React from "react";
import "./App.css";
import { ProductContainer } from "../ProductContainer";
import { ProductList } from "../ProductList";
import { SearchBar } from "../SearchBar";
import { Carrito } from "../Carrito";
import { Logo } from "../Logo";
import { ProductBox } from "../ProductBox";
import { CarritoList } from "../CarritoList";

import json from "./productos.json";

function App() {
  return (
    <React.Fragment>
      <Logo />
      <div className="Contenido">
        <ProductContainer titulo="Productos">
          <SearchBar name="barra de busqueda" />
          <ProductList>
            {json.products.map((item, index) => {
              
              return (

                <ProductBox
                  key={index}
                  nombre={item.name}
                  precio={item.unit_price}
                  stock={item.stock}
                ></ProductBox>
              );
            })}
          </ProductList>
        </ProductContainer>

        <Carrito titulo="Carrito">
          <CarritoList />
          <CarritoList />
        </Carrito>
      </div>
      <footer>
        <p>Aqui iria el footer.. si tuviera unoo</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
