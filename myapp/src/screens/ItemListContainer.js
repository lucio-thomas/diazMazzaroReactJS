import React from 'react';
<<<<<<< HEAD
import ItemCounter from '../components/ItemCounter';

const ItemListContainer = ({counter}) => {
    return(
        <div >
            <ul>
                <li style={{margin: 2}}>Producto  
                <ItemCounter/> 
                </li>
                <br/>


                <li style={{margin: 2}}>Producto 1 
                <ItemCounter/> 
                </li>
                <br/>

                
                <li style={{margin: 2}}>Producto 2 
                <ItemCounter/> 
                </li>
                <br/>

                <li style={{margin: 2}}>Producto 3 
                <ItemCounter/> 
                </li>
                <br/>


                <li style={{margin: 2}}>Producto 4 
                <ItemCounter/> 
                </li>
                <br/>

            </ul>
        </div>
=======
import ItemList from './ItemList';

function ItemListContainer(){
    return(
        <ItemList/>
>>>>>>> counterOne
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