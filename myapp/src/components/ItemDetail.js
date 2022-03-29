import React,{useState, useContext} from "react";
import ItemCount from "./ItemCount/ItemCounter";
import Button from '@mui/material/Button';
import { CartContext } from "../context/CartContext";
import {Link} from 'react-router-dom';

const ItemDetail = ({
  item,
  id,
  name,
  description,
  price,
  stock,
  imgUrl,
  categoryId,
  counter
}) => {

  const carritoContext = useContext(CartContext);
    console.log('carritoContext-itemDetail', carritoContext);

    const [productosAgregados, setProductosAgregados] = useState(0);
    const [stockProducto, setStockProducto] = useState(5);

  const onAddFunction = (quantityToAdd)=>{
    setProductosAgregados(quantityToAdd)
    setStockProducto(stockProducto - quantityToAdd);
    carritoContext.addItem(item, quantityToAdd);
  }
  return (
    <div className="card">
      <div className="item">
        <div className="text">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h4>{name}</h4>
          <br/>
          <img src={imgUrl} style={{width:200, height:100}} />
          <h5 id="price1" style={{fontWeight:"normal"}}>${price}</h5>

        </div>
      </div>
      <div className="item">
        <h6>{description}</h6>
        <div className="stock">In Stock</div>
        <br/>
        <ItemCount stock={stock} initial={1} onAdd={onAddFunction} />
        {
          productosAgregados>0 &&
          <Link to="/cart" className='a-end-button'>
              <button className='end-button'>Terminar mi compra</button>
          </Link>
                
        }
        {/* <div>
          <Button variant="contained" id="cart" onClick={console.log(counter)}>ADD TO CART</Button>
        </div> */}
      </div>
    </div>
  );
};

export default ItemDetail;