import React from 'react';
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
    )
}

export default ItemListContainer;