import React, { useEffect, useState }from 'react'
import ItemDetail from './ItemDetail'
import items from "./datos";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [dato, setDatos] = useState([]);
    let parametro = parseInt(useParams().idItem);
    function getItem(){
        return new Promise((resolve, reject) => {
                let itemRequestes = items.find(item => item.id === parametro);
                      
                itemRequestes === undefined ? reject("Item not found") :  resolve(itemRequestes); 
                
       })    
   }
    
    useEffect(() => {
        getItem()
            .then((respuesta) => {setDatos(respuesta);})
            .catch((err) => alert(err))
    }, [parametro])

  return (
    <>
        <ItemDetail dato={dato}/>
    </>
  )
}

export default ItemDetailContainer