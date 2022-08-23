import React, { useContext } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './CartWidgets.css'
import { CartContext } from '../../context/CartContext';



export const CartWidgets = () => {

    const {cantidadCart } = useContext(CartContext) 

    return (
        <Link to='/cart' className="cart-widgets">
            <FontAwesomeIcon icon={faShoppingCart}/> 
            <span>{cantidadCart()}</span>
            
        </Link>
    )
}
