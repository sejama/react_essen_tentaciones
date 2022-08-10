import React from 'react'

export default function ItemDetail({dato}) {
  return (
    <>
        <h1>Item Datail del {dato.title}</h1>
        <h3>Descripción: {dato.description}</h3>
        
    </>
  )
}
