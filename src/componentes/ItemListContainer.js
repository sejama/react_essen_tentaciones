import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import items from "./datos";

function getItems(){
        
    return new Promise((resolve) => {
        setTimeout(() => resolve(items), 2000);
    })
}

function ItemListContainer({nombre}){
    
    const [datos, setDatos] = useState([]);
    let parametro = parseInt(useParams().idCategory);
    
    useEffect(() => {
        getItems()
            .then((respuesta) => {
                if(parametro === undefined){
                    setDatos(respuesta);
                }else{
                    let itemFilters = respuesta.filter(item => item.category === parametro); 
                    setDatos(itemFilters);
                }
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