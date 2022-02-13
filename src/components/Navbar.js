import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import img from '../assets/logo.svg';


const NavbarComponent = () => {

    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView(); }
        }
      }
      
    return ( 
        <>
            <Navbar bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand onClick={()=>scrollToAnchor('about')}>
                        <img
                        alt=""
                        src={`.${img}`}
                        width="68"
                        height="68"
                        className="d-inline-block align-top"
                    />{' '}
                        &nbsp; 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>scrollToAnchor('projects')}>Proyectos</Nav.Link>
                        <Nav.Link onClick={()=>scrollToAnchor('skills')}>Habilidades</Nav.Link>
                        <Nav.Link onClick={()=>scrollToAnchor('contact')}>Contacto</Nav.Link>
                    
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     );
}
 
export default NavbarComponent;