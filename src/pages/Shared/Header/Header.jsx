import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Form } from 'react-router-dom';

const Header = () => {
    return (
        <div>   
            <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                <Container>
                <Navbar.Brand href="#home-section" className='foodiee'>Foodiee _</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link href="#home-section">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#explore-head-section">Blog </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#explore-head-section">User Profile </Nav.Link>
                        </Nav.Item>
                       
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;