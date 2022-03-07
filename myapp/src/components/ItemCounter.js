import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemCounter = () =>{
    const greeting = 'Hola!'
    const [counter,setCounter] = useState(0)

    return(
        <div>
            <h2>{greeting}</h2>
            <p >Este es el contador </p>

            {/*<Button
               title='Increase'
               onPress={() => {
                   //Dont do this
                   //counter++
                   setCounter(counter +1)
               }}
            >
            */}
            <AddIcon 
                fontSize='large'
                title='Increase'
                onClick={() => {
                    //Dont do this
                    //counter++
                    if (counter > 14){
                        return false
                    }else{
                        setCounter(counter +1)
                    } 
                }}
                style={{ border: 'solid 3px white', borderRadius: '4px', marginRight:'15px'}}
            />

            {/*<Button
                title='Decrease'
                onPress={() => {
                    //Dont do this
                    //counter--
                    setCounter(counter -1)
                }}
            />*/}
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

            <div >
                <p style={{}}>Cantidad de productos: {counter} </p>
            </div>

        </div>
    )
}


export default ItemCounter;


// Requerimientos reentrtega desafio:
// te olvidaste de que debias setearle un stock para que el contador no pasase de ese numero, y deberias agregarle tambien la logica para que no baje de 0 a numeros negativos. 
// Tambien una funcion onAdd que le pasaras por prop desde su padre (ItemListContainer) que lo que hará será tomar el valor de counter y mostrarlo en un console log o en una 
// alert!. 