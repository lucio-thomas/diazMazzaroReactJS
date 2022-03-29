import React, {useState} from 'react';
// import { CartContext } from '../../context/CartContext'
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';

const ItemCounter = ({stock, initial, onAdd}) =>{
    

    const [count, setCount] = useState(initial);

    const decrementar = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const incrementar = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }

    const reset = ()=>{
        setCount(initial);
    }

    return(
        <div className='estilosContador'>
            <p>Stock disponible: {stock}</p>
            <div className='contenedorControles' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <button disabled={stock===0} onClick={decrementar} className='botonControl'>-</button>
                <p>{count}</p>
                <button disabled={stock===0} onClick={incrementar} className='botonControl'>+</button>
            </div>
            <button disabled={stock === 0} onClick={()=>{onAdd(count);reset()}} className='botonAgregar'>Agregar al carrito</button>
        </div>
    )
}


export default ItemCounter;