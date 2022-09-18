import React from 'react'
import {useCartContext} from './CartContext'
import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { collection, addDoc} from "firebase/firestore";
import db from "../services/firebase";
import { useForm } from "react-hook-form";

export default function Cart() {
  const { cart, removeItem, clear } = useCartContext();
  const { register, getValues } = useForm();
  let total = 0, num = 0;
  
  async function sendOrder(){
    const order = {
      buyer: getValues(), 
      items:[...cart],
      total: total,
      date: new Date(),
    }
    const orderColection = collection(db,"orders");
    const orderTrue = await addDoc(orderColection, order);

    alert("Compra confirmada: " + orderTrue.id);
  }

  return (
     <div className="main container mx-auto mt-5">
      {cart.length === 0 ?
        <div className="main container mx-auto mt-5" style={{display: 'flex', flexDirection: 'column',  justifyContent:'center', alignItems:'center'}}>
                <div>
                  <h1 style={{color: 'blue'}}>El carrito esta vacio</h1>
                </div>
                <div>
                <Link to="/"><Button variant="success">Ir a comprar</Button></Link>
                    
                </div>
        </div>
        :
        <div className="main container mx-auto mt-5">
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
          <div>
            <form>
            <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="First name" />
            <input {...register("lastName", { required: true, maxLength: 20 })} placeholder="Last name" />
            <input {...register("user", { required: true})} placeholder="User" />
            <input type="number"  {...register("phone", { required: true, maxLength: 20 })} placeholder="Phone" />
            <input type="email" {...register("email")} placeholder="correo@correo.com" />
            </form>
          </div>
          <Button variant="success" onClick={sendOrder}>Confirmar Compra</Button>
        </div>    
      }
    </div>
  )
}
