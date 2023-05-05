import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const renderTooltip = () => {
        return (
          <Tooltip id="username-tooltip" style={{ color: 'red' }}>
            {user.displayName}
          </Tooltip>
        );
      };

    return (
        <div id='home'>
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

                            {user && (
                                <Nav.Item>
                                    <OverlayTrigger placement="bottom" overlay={renderTooltip()}>
                                        <img className="header-img m-2" src={user.photoURL} alt="" />
                                    </OverlayTrigger>
                                </Nav.Item>
                            )}

                            <Nav.Item>
                                {user ? 
                                    <Button onClick={handleLogout} variant="outline-success" className='px-4 mx-2'>Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="outline-success" className='px-4 mx-2'>Login</Button>
                                    </Link>
                                }
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
