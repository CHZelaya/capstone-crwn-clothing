import React from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" > 
            []
            </div>
        
            <Button type="button"> GO TO CHECKOUT </Button>
        </div>

    )
}

export default CartDropdown

