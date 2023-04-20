import React from "react";
import "./CarritoList.css";

function CarritoList({nombre, precio, cantidad ,total,setTotal}) {
 React.useEffect(()=> {
  setTotal(total + precio*cantidad)
 }, [setTotal])

  return (
    <div className="Carrito-List">
      <div className="Producto">
        <p>{nombre}</p>
        <p> {cantidad}</p>
        <p>${precio}</p>
        <p>${precio*cantidad}</p>
      </div>
    </div>
  );
}

export { CarritoList };
