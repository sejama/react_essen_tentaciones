import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import {CartWidgets} from '../CartWidgets/CartWidgets'



 

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    
                    {/* <Link to='/'>
                        <img src='./distrito.png' width='50'/>
                    </Link> */}
                                        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>

                            <li className="nav-item">
                                <a class="nav-link" href="#">Categorias</a>
                                    <div class="dropdown-content">
                                        <Link to="/productos/indumentariamasculina">Indumentaria Masculina</Link>
                                        <Link to="/productos/indumentariafemenina">Indumentaria Femenina</Link>
                                        <Link to="/productos/calzado">Calzado</Link>
                                        <Link to="/productos/futbol">Futbol</Link>
                                    </div>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Ofertas</Link>
                            </li>
                            
                            
                        </ul>

                        <li className="navbar-nav mx">
                            <CartWidgets/>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    )
}



{/* <header className='header'>
            <Link to='/' style={{color: '#FFF'}}>
                <h1>LOGO</h1>
            </Link>

            <nav className="header-nav">
                <Link to='/productos/remeras' className='header-link'>Remeras</Link>
                <Link to='/productos/zapatos' className='header-link'>Zapatos</Link>
                <Link to='/productos/gorros' className='header-link'>Gorros</Link>
            </nav>
            
        </header> */}