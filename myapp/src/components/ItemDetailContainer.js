import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { arregloProductos } from "./baseDatos/baseDatos";

const estiloContainer = {
  margin: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "#243746",
  height: "auto",
  padding: "10px",
}

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState({});
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
            arregloProductos
        );
      }, 3000);
    });

    obtenerProductos.then((res) => {
      setProducto(res.find((e) => e.id == itemId));
    });
  }, []);
  return(
    <div style={estiloContainer}> 
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;