import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      <br/>
      <br/>
      {productos.map((producto) => (
        <Item {...producto} />
      ))}
    </div>
  );
};

export default ItemList;
