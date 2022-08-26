import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


export const ContadorUnidades = ({max,min=0,onAdd}) => {
    
    const [cantidad, setCantidad] = useState(min);


    const aumentar = (numero) => {
        //si el contador es menor que el max && (simplificar IF)
        cantidad < max && setCantidad(cantidad+numero);
    }
    
    const disminuir = (numero) => {
        cantidad > min && setCantidad(cantidad-numero);
        
    }
 
    return (
        <>

        <h3>Unidades:{cantidad}</h3>
        
        <Button 
            className="btn btn-secondary"
            onClick={()=> disminuir(1)}
        >-</Button>
        &nbsp;
        <Button 
            className="btn btn-secondary"
            onClick={()=> aumentar(1)}
        >+</Button>
        
        <br/>
            <Button 
                className=" btn btn-secondary my-3"
                onClick={() =>onAdd(cantidad)}
            
            >Agregar al carrito

            </Button>

        </>
    )
}

