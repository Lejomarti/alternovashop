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
  const [allProducts, setAllProducts] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [jsonProduct, setJsonProduct] = React.useState("");



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
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  key={index}
                  nombre={item.name}
                  precio={item.unit_price}
                  stock={item.stock}
                ></ProductBox>
              );
            })}
          </ProductList>
        </ProductContainer>

        <Carrito
          titulo="Carrito"
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          jsonProduct={jsonProduct}
          setJsonProduct={setJsonProduct}
        >
          {allProducts.map((item, index) => {
            return (
              <CarritoList
                key={index}
                nombre={item.nombre.nombre}
                precio={item.precio.precio}
                cantidad={item.cantidad}
                total={total}
                setTotal={setTotal}
              />
            );
          })}
        </Carrito>
      </div>
      <footer>
        <p>Aqui iria el footer.. si tuviera unoo</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
