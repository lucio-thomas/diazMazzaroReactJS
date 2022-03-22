import React from "react";
import ItemCount from "./ItemCounter";
import Button from '@mui/material/Button';

const ItemDetail = ({
  id,
  name,
  description,
  price,
  stock,
  imgUrl,
  categoryId,
  counter
}) => {
  return (
    <div className="card">
      <div className="item">
        <div className="text">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2>{name}</h2>
          <br/>
          <img src={imgUrl} style={{width:400, height:300}} />
          <h3 id="price1" style={{fontWeight:"normal"}}>${price}</h3>

        </div>
      </div>
      <div className="item">
        <p>{description}</p>
        <div className="stock">In Stock</div>
        <br/>
        <ItemCount stock={stock} />
        <div>
          <Button variant="contained" id="cart" onClick={console.log(counter)}>ADD TO CART</Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;