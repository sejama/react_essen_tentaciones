import React from 'react'
import {useCartContext} from './CartContext'
import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function Cart() {
  const { cart, removeItem, clear } = useCartContext();
 
  let total = 0, num = 0;
  
  return (
    <>
      {cart.length === 0 ?
       
        <div style={{display: 'flex', flexDirection: 'column',  justifyContent:'center', alignItems:'center'}}>
                <div>
                  <h1 style={{color: 'blue'}}>El carrito esta vacio</h1>
                </div>
                <div>
                <Link to="/"><Button variant="success">Ir a comprar</Button></Link>
                    
                </div>
        </div>
       
        :
        <>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <h1 style={{color: 'blue'}}>El carrito tiene {cart.length} Elemento</h1>
        </div>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
                {
                  cart.map((item) => {
                    total = total + (item.quantity * item.price)
                    return(
                    <tr key = {num}>
                      <td>{num = num +1}</td>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${parseFloat(item.quantity * item.price).toFixed(2)}</td>
                      <td>
                        <Button variant="danger" onClick={() => { removeItem(item) }}>Eliminar</Button>
                        <Link to={`/detalle/${item.id}`} >
                          <Button variant="secondary" >Agregar Cantidad</Button>
                        </Link>
                      </td>
                    </tr>
                    )
                  })
                }
            </tbody>
          </Table>
          <h5>Total: $ {parseFloat(total).toFixed(2)}</h5>
          <Button variant="danger" onClick={() => { clear() }}>Vaciar Carrito</Button>
        </>    
      }
    </>
  )
}

export default Cart