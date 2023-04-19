import React from "react";
import "./ProductContainer.css";

function ProductContainer({titulo, children }) {
  return (
    <div className="ProductContainer">
      <h1 className="titulo">{titulo}</h1>
      {children}
    </div>
  );
}

export { ProductContainer };
