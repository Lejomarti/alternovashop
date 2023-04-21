import React from "react";
import "./ProductList.css";

function ProductList({ children, searchValue  }) {
  const filteredProducts = children.filter((product) =>
  product.props.nombre.toLowerCase().includes(searchValue.toLowerCase())
);

  return <div className="ProductList">{filteredProducts}</div>;
}

export { ProductList };
