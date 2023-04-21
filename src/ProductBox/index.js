import React from "react";
import "./ProductBox.css";
import iphone from "../assets/Iphone14.jpg";

function ProductBox({ nombre, precio, stock, allProducts, setAllProducts }) {
  const [curQuantity, setCurQuantity] = React.useState(0);
  const [producto, setProducto] = React.useState({
    nombre: { nombre },
    precio: { precio },
    stock: { stock },
    cantidad: 0,
  });

  const [contador, setContador] = React.useState(0);

  React.useEffect(() => {
    setProducto({ ...producto, cantidad: contador });
  }, [contador]);

  const onAddProduct = () => {
    setCurQuantity(curQuantity + contador);

    if (curQuantity + contador <= stock && contador != 0) {
      setAllProducts([...allProducts, producto]);
      setContador(0);
    } else {
      alert("No se puede agregar esa cantidad de productos al carrito");
      setContador(0);
    }
  };

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

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
        <button onClick={onAddProduct} className="ProductBox-Button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export { ProductBox };
