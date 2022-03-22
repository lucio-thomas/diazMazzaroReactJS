import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const { categoryId } = useParams();
  console.log(categoryId);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
            [
                {
                    "id": 0,
                    "name":"Teclado Redragon K530 Draconic",
                    "description":"Teclado 60%, inalambrico bluetooth 5.0 RGB, Redragon K530 Draconic",
                    "price":"AR$ 8000",
                    "stock":"6",
                    "imgUrl":"https://m.media-amazon.com/images/I/61IhHiYBiyL._AC_SY355_.jpg",
                    "categoryId":"teclado",
    
                },
                {
                    "id": 1,
                    "name":"Hyperx Cloud Stinger Wireless 7.1",
                    "description":"Auriculares HyperX Cloud Stinger, inalambricos con antena USB y sonido 7.1",
                    "price":"AR$ 10000",
                    "stock":"9",
                    "imgUrl":"https://media.kingston.com/hyperx/product/hx-product-headset-stinger-wireless-pc-2-zm-lg.jpg",
                    "categoryId":"headset",
                },
                {
                    "id": 2,
                    "name":"Webcam Philips P406 Fhd 1080p",
                    "description":"Webcam Philips Full HD 1080p 30fps Usb, plug and play (conctar y jugar, sin necesidad de instalar nada)",
                    "price":"AR$ 5800",
                    "stock":"12",
                    "imgUrl":"https://http2.mlstatic.com/D_NQ_NP_677887-MLA45496786294_042021-O.webp",
                    "categoryId":"webcam",
                },
    
            ]
        );
      }, 3000);
    });
    if (!categoryId) {
      getProductos.then((res) => setProductos(res));
    } else {
      getProductos.then((res) => {
        setProductos(
          res.filter((productos) => productos.categoryIdId === categoryId)
        );
      });
    }
  }, [categoryId]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;