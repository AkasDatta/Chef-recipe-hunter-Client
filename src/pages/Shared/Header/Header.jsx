import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import person4 from '../../../assets/person.jpg';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>   
            <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                <Container>
                    <Navbar.Brand href="#home-section"><Link className='foodiee' as={Link} to="/">Foodiee _</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/blogs">Blog </Nav.Link>
                            </Nav.Item>
                            {user && <Nav.Item>
                                <Image className='header-img m-2' src={person4} />
                            </Nav.Item>}
                            <Nav.Item>
                                {user ? 
                                <Button variant="outline-success" className='px-4 mx-2'>Logout</Button>:
                                <Link to="/login">
                                    <Button variant="outline-success" className='px-4 mx-2'>Login</Button>
                                </Link>}
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
