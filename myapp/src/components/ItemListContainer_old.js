import React from 'react';
import ItemList from './ItemList';

function ItemListContainer(){
    return(
        <ItemList/>
    )
}

export default ItemListContainer;

// const showProducts = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let productos = <ItemList/>;
//             resolve(productos)
//         }, 2000)
//     })
// }


// const ItemListContainer = async () => {
// await showProducts().then((productos)=>{
//     return productos
// })
// }