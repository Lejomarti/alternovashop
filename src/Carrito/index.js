import React from "react";
import { ReactDOM } from "react";
import "./Carrito.css";
import { CarritoList } from "../CarritoList";

function Carrito({ titulo, children }) {
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
          Total Order Price: <strong> $500 </strong>
        </p>
        <div className="Carrito-Footer-Botones">
          <button>Delete Order</button>
          <button>Create Order</button>
        </div>
      </div>
    </div>
  );
}

export { Carrito };
