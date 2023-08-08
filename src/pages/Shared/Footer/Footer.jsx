import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap/esm';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='bg-dark text-light'>
                <div className="footer-top pt-5">
                    <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12} className="segment-one md-mb-30 sm-mb-30">
                        <h2 className='fw-bold'> <a className='text-danger text-decoration-none' href="#home">Foodiee _</a></h2>
                        <p>The restaurant was filled with the savory aroma of freshly prepared dishes as diners sat at cozy tables, eagerly anticipating their meals</p>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="segment-two md-mb-30 sm-mb-30">
                        <h2>Foodiees Food</h2>
                        <ul>
                            <li>
                                <a className='text-decoration-none text-success' href="#">Home</a>
                            </li>
                            <li>
                                <a className='text-decoration-none text-success' href="#"><Nav.Link as={Link} to="/blogs">Blog </Nav.Link>
                                </a>
                            </li>
                            <li>
                                <a 
                                className='text-decoration-none text-success' href="#create-main-section">Support
                                </a>
                            </li>
                            <li>
                                <a className='text-decoration-none text-success' href="#client">Client
                                </a>
                            </li>
                            <li>
                                <a className='text-decoration-none text-success' ><Nav.Link as={Link} to="/register">Contact </Nav.Link>
                                </a>
                            </li>
                        </ul>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="segment-three sm-mb-30">
                        <h2>Follow Us</h2>
                        <p> In a business context, getting in touch can be crucial for networking and building relationships with clients, partners, and colleagues. </p>
                        <div>
                            <a href="https://www.facebook.com/" target="_blank"><FaFacebook className='fa mx-1 mb-3 text-primary' size={30} /></a>
                            <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin className='mx-1 mb-3' style={{color:"#0C64C5"}} size={30} /></a>
                            <a href="https://www.instagram.com/" target="_blank"><FaInstagram className='fa mx-1 mb-3 text-danger' size={30} /></a>
                            <a href="https://twitter.com/" target="_blank"><FaTwitter className='fa mx-1 mb-3 text-primary' size={30} /></a>
                        </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="segment-four sm-mb-30">
                        <h2>Get in Touch</h2>
                        <p>  If you're looking to get in touch with someone, there are many ways to do so. You can send an email, make a phone call. Ifare many ways to do so. You can send an email, make a phone call.</p>
                        <form>
                            <input type="letter" />
                            <input type="submit" className='text-danger mb-4' value="Subscribe" />
                        </form>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </footer>
        </div>
    );
};

export default Footer;