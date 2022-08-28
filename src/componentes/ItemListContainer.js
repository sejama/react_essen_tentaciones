import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { DotSpinner } from '@uiball/loaders';
import db from '../services/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

/*function getItems(){
        
    return new Promise((resolve) => {
        setTimeout(() => resolve(items), 2000);
    })
}*/
function getItems() {
    return new Promise((resolve) => {
        const itemsCollection = collection(db,"items");
        getDocs(itemsCollection).then(snapshot => {
            const docsData = snapshot.docs.map(doc => { return { ...doc.data(), id: doc.id}})
            resolve(docsData);
        })
    })
}
function getFilterItems(parametro) {
    return new Promise((resolve) => {
        const itemsCollection = collection(db,"items");
        const q = query(itemsCollection, where("category", "==", parametro))
        getDocs(q).then(snapshot => {
            const docsData = snapshot.docs.map(doc => { return { ...doc.data(), id: doc.id}})
            resolve(docsData);
        })
    })
}

function ItemListContainer({nombre}){
    const [datos, setDatos] = useState([]);
    let parametro = parseInt(useParams().idCategory);
    useEffect(() => {
        if(isNaN(parametro)){
            getItems().then((respuesta) => {
                setDatos(respuesta);
            })
        }else{
            getFilterItems(parametro).then((respuesta) => {
                setDatos(respuesta);
            })
        }
        
    }, [parametro])
    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <h1 style={{color: 'blue'}}>{nombre}</h1>
            </div>
            {
            datos.length >0 ?
                <ItemList datos={datos} />
                :
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <DotSpinner size={50} speed={0.5} color="black" />
                </div>
            }
        </>
    );
}

export default ItemListContainer;