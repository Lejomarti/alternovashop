import React from "react";
import { ReactDOM } from "react";
import "./Carrito.css";
import { CarritoList } from "../CarritoList";

function Carrito({jsonProduct,setJsonProduct,total,setTotal, allProducts, setAllProducts, titulo, children }) {
  const onVaciarCarrito = () => {
    setAllProducts([])
    setTotal(0)
  };

  const imprimirJSON = () =>{
    setJsonProduct({...allProducts,PrecioTotal:total})
      console.log(jsonProduct)
    // const jsonData = JSON.stringify(jsonProduct);
    // const fileData = new Blob([jsonData], { type: 'application/json' });
    // const url = URL.createObjectURL(fileData);
    // const link = document.createElement('a');
    // link.href = url;
    // link.download = 'InfoEnJson.json';
    // link.click();
  }



  return (
    <div className="Carrito">
      <div className="Carrito-Titulo">
        <h1>{titulo}</h1>
      </div>

      <div className="Carrito-TitulosX">
        <p>Producto</p>
        <p>Cantidad</p>
        <p>Precio unitario</p>
        <p>Precio total</p>
      </div>

      {children}

      <div className="Carrito-Footer">
        <p>
          Total Order Price: <strong> {total}</strong>
        </p>
        <div className="Carrito-Footer-Botones">
          <button onClick={onVaciarCarrito}>Delete Order</button>
          <button onClick={imprimirJSON}>Create Order</button>
        </div>
      </div>
    </div>
  );
}

export { Carrito };
