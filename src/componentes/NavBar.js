import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

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
    ];
    return(
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Essen Tentaciones</Navbar.Brand>
                <Nav className="me-auto">
                    {menu.map( enlase => <Link to={enlase.url} key={enlase.id} className="nav-link">{enlase.title} </Link>)}
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/category/1">Categoria 1</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/2">Categoria 2</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/Cart"><CartWidget /></Link>
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