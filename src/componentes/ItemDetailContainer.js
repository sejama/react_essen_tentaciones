import React, { useEffect, useState }from 'react'
import ItemDetail from './ItemDetail'
import items from "./datos";


const  getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(items[3])
        }, 2000);
    })    
}
   
function ItemDetailContainer() {
    
    const [dato, setDatos] = useState([])

    useEffect(() => {
        getItem().then((respuesta) => {
            setDatos(respuesta);
        })
    }, [])

  return (
    <>
        <ItemDetail dato={dato}/>
    </>
  )
}

export default ItemDetailContainer