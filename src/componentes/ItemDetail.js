import React from 'react'
import Image from 'react-bootstrap/Image'
import ItemCount from './ItemCount'

export default function ItemDetail({dato}) {
  return (
    <>
        <h1>Item Datail del {dato.title}</h1>
        <h3>Descripción: {dato.description}</h3>
        <Image src={dato.pictureUrl} alt="Image" />
        <p>$ {dato.price}</p>
        <p>Cantidad Minima: {dato.min}</p>
        <p>Stock Disponible: {dato.stock}</p>
        <ItemCount item={dato}/>
    </>
  )
}
