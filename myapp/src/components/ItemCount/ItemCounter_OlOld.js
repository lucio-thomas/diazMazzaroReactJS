import React, {useState} from 'react';
import { CartContext } from '../../context/CartContext'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemCounterOlold = ({stock, initial, onAdd}) =>{
    // const [counter,setCounter] = useState(0)

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
        <div>
            <AddIcon 
                fontSize='large'
                title='Increase'
                onClick={() => {
                    //Dont do this
                    //counter++
                    if (counter > 14){
                        return false
                    }else{
                        setCount(counter +1)
                    } 
                }}
                style={{ border: 'solid 3px white', borderRadius: '4px', marginRight:'15px'}}
            />
            <p style={{}}>Cantidad de productos: {count} </p>
            <RemoveIcon 
                fontSize='large'
                title='Decrease'
                onClick={() => {
                    //Dont do this
                    //counter--
                    if (counter < 1){
                        return false
                    }else {
                        setCounter(counter -1)
                    }
                }}
                style={{ border: 'solid 3px white', borderRadius: '4px'}}
            /> 

            
        </div>
    )
}


export default ItemCounterOlold;