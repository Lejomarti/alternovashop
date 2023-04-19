import React from "react";
import "./ProductBox.css";
import iphone from "../assets/Iphone14.jpg";

function ProductBox({ nombre, precio,stock }) {
  const [contador, setContador] = React.useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      setContador(contador);
    }
  };

  console.log(contador, nombre, precio,stock);

  return (
    <div className="ProductBox ProductBox-Container">
      <p className="Product-name">{nombre}</p>
      <img className="ProductBox-Imagen" src={iphone} />
      <p className="stock">Stock:{stock}</p>
      <p className="Product-precio">${precio}</p>
      <div className="ProductBox-Footer ">
        <div className="ProductBox-Footer-Counter">
          <button onClick={restar}>-</button>
          <p>{contador}</p>
          <button onClick={sumar}>+</button>
        </div>
        <button className="ProductBox-Button">Add to cart</button>
      </div>
    </div>
  );
}

export { ProductBox };
