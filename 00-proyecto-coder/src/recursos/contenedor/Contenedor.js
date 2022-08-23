import React from 'react'
import './Contenedor.css'

export const Contenedor = ({children }) => {
    return (
        <div className="styles-contenedor">
            {children}
        </div>
    )
}
