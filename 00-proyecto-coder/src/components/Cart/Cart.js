import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {
    
    const{cart,totalCart,vaciarCart, eliminarItem }=useContext(CartContext)
    
    return (       
        <>
            {
                cart.length === 0 
                ?

                <div className="container my-4">
                    <h4>Tu carrito esta vacio</h4>
                    <Link to="/" className="btn btn-primary">Volver</Link>

                </div>
                
                :
        
                <div className="container my-4">
                    <h2>Finaliza tu compra</h2>
                    <hr/>

                        {
                            cart.map((item)=>(
                            <div key={item.id}>
                            <h4>{item.nombre}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio:${item.cantidad*item.precio}</p>
                            <p><Button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>Eliminar</Button></p>

                                </div>
                            )

                            )
                        }

                            <hr/>
                            <h2>Total: ${totalCart()}</h2>

                            <div className="my-2">
                                <button className="btn btn-secondary" onClick={vaciarCart}>Vaciar carrito</button>
                                <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link>
                            </div>
                                
                                
                </div>
            }
        </>

                    
    )
}
