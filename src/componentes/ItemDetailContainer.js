import React, { useEffect, useState }from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import db from '../services/firebase';
import { getDoc, doc, collection } from 'firebase/firestore';

function getItem(parametro){
  return new Promise((resolve,reject) => {
    const itemsCollectionRef = collection(db,"items");
    const docRef = doc(itemsCollectionRef, parametro);
    getDoc(docRef).then( snapshot => {
        resolve({...snapshot.data(), id: snapshot.id});
    }).catch(err => reject("Item not found") )
    })
    //reject("Item not found")
    /*return new Promise((resolve, reject) => {
            let itemRequestes = items.find(item => item.id === parametro);
                  
            itemRequestes === undefined ? reject("Item not found") :  resolve(itemRequestes); 
          
   })  */    
}

function ItemDetailContainer() {
    const [dato, setDatos] = useState([]);
    let parametro = useParams().idItem;
    useEffect(() => {
        getItem(parametro)
            .then((respuesta) => {setDatos(respuesta);})
            .catch((err) => alert(err))
    },[parametro])
  return (
    <>
        <ItemDetail dato={dato}/>
    </>
  )
}

export default ItemDetailContainer