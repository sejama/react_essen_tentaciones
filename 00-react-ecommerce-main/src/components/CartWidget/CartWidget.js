import {BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {
    const { cantidadCart, cart } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length === 0 ? 'cart-hidden' : ''}`}>
            <BsFillCartFill />
            <span>{cantidadCart()}</span>
        </Link>
    )
}

