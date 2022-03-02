import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    const handleCartClick = () =>{
        console.log('Clickeaste el carrito');
    }

    return(
        <div>
            <ShoppingCartIcon fontSize="large" onClick={handleCartClick} />
        </div>
    )
}

export default CartWidget;