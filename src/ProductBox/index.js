import React from "react";
import "./ProductBox.css";
import iphone from "../assets/Iphone14.jpg";

function ProductBox({ nombre, precio, stock, allProducts, setAllProducts }) {
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

  /*1-filtrar los productos del mismo producto que voy a agregar
  2-calcular la cantidad total de este producto que tengo seleccionados
  3- definir si le sumo o no respecto al stock
  4- definir setcontador como 0 y en caso de no sumar, lanzar la alarma
  */
  const onAddProduct = (event) => {
    // console.log(allProducts);
    // const limitStock = producto.stock;
    // const filtredProducts = allProducts.filter(
    //   (prod) => producto.name === prod.name
    // );
    // console.log(filtredProducts);

    const totalCantidad = allProducts.reduce(
      (acumulado, producto) => acumulado + producto.cantidad,
      0
    );
    if (totalCantidad + contador <= stock) {
      setAllProducts([...allProducts, producto]);
      // setAllProducts()
      setContador(0);
    } else {
      alert("No se puede agregar esa cantidad de productos al carrito");
      setContador(0);
    }
  };
  const sumar = () => {
    if (contador < stock) {
      console.log(allProducts)
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
