import { useEffect, useState } from "react";
import items from "./datos";
import Item from "./Item";

function getItems(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(items), 2000);
    })
}

export default function ItemList() {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        getItems().then((respuesta) => {
            setDatos(respuesta);
        })
    }, [])
      
    return (
        <>
            {
                datos.map((item) => {
                    return (<Item key={item.id} dato={item}/>) })
            }
        </>
    ) 
}

