import { useState, useEffect } from 'react'
import {ItemList} from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../firebase/config'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { catId } = useParams()

    console.log(catId)

    useEffect( () => {
        setLoading(true)

        //1.- armar referencia 
        const productosRef = collection(db, 'productos')
        const q = catId?  query(productosRef, where("categoria","==",catId)) :productosRef

        //2.- pedir esa ref
        
        getDocs(q)
            .then((resp)=>{
                setProductos (resp.docs.map((doc) => {
                    return{
                        id:doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            }) 

    }, [catId])

    return (
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
    
}
