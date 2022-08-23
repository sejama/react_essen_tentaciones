import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import {Link} from 'react-router-dom';


export const Cart = () => {
    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);

    return (
    <div className="container my-4">
        <h2>Carrito de compras</h2>
        <hr/>
        {
            cart.map((item) => (
                <div key={item.id} className="row">
                    <h5>{item.nombre}</h5>
                    <p>Cantidad: {item.count}</p>
                    <p>Precio unitario: ${item.precio}</p>
                    <p>Precio total: ${item.precio * item.count}</p>
                    <p><button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
                        <BsFillTrashFill />
                    </button></p>
                </div>
                
            ))
        }
        <hr/>
        <h2>Total ${totalCart()}</h2>
        <div>
            <button className="btn btn-danger" onClick={vaciarCart}>Vaciar el carrito</button>
            &nbsp;
            <Link to="/Checkout" className="btn btn-success">Ir a sección pago</Link>
        </div>
    </div>
    )
};
