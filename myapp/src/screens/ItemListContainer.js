import React from 'react';
import ItemList from './ItemList';

function ItemListContainer(){
    setTimeout(()=>{
        return(<ItemList/>)
    }, 2000)
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