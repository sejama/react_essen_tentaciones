import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

function NavBar(){
    const menu = [
        {
            id: 1,
            url:"/", 
            title:"Inicio"
        },
        {
            id: 2,
            url:"/", 
            title:"Productos"
        },
        {
            id:3,
            url:"/", 
            title:"Categorias"
        }

    ];
    return(
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Essen Tentaciones</Navbar.Brand>
                <Nav className="me-auto">
                    {menu.map( enlase => <Link to={enlase.url} key={enlase.id} className="nav-link">{enlase.title} </Link>)}
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <CartWidget />
                    <Navbar.Text>
                        <Link to="#login">Iniciar Sesión</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
}

export default NavBar;