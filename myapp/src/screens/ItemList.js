import React from 'react';
import '../App.css'
import {Items} from '../components/Item';
import ItemCounter from '../components/ItemCounter';

const items = Items;

function ItemList(){
    return(
        <div >
            <ul>
                {items.map(items => 
                    <li key={items.id}>
                        <div className='productContainer'>
                            <br/>
                            <img src={items.pictureURL} style={{height: '150px'}} alt=""/> <br/>
                            {items.title}<br/><br/>
                            <ItemCounter/>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
};



export default ItemList;