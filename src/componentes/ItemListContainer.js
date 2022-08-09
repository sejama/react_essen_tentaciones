import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import items from "./datos";

function getItems(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(items), 2000);
    })
}
function ItemListContainer({nombre}){
    const [datos, setDatos] = useState([])

    useEffect(() => {
        getItems().then((respuesta) => {
            setDatos(respuesta);
        })
    }, [])
    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <h1 style={{color: 'blue'}}>{nombre}</h1>
            </div>
            <ItemList datos={datos} />
        </>
    );
}

export default ItemListContainer;