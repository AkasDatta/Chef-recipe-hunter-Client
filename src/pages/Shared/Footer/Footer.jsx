import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className='bg-dark text-light'>
                <div className="footer-top pt-5">
                    <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12} className="segment-one md-mb-30 sm-mb-30">
                        <h2 className='fw-bold text-danger'>Foodiee _</h2>
                        <p>The restaurant was filled with the savory aroma of freshly prepared dishes as diners sat at cozy tables, eagerly anticipating their meals</p>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="segment-two md-mb-30 sm-mb-30">
                        <h2>Foodies Food</h2>
                        <ul>
                            <li><a className='text-decoration-none text-success' href="#">Home</a></li>
                            <li><a className='text-decoration-none text-success' href="#">Support</a></li>
                            <li><a className='text-decoration-none text-success' href="#">Client</a></li>
                            <li><a className='text-decoration-none text-success' href="#">Contact</a></li>
                            <li><a className='text-decoration-none text-success' href="#">Blog</a></li>
                        </ul>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="segment-three sm-mb-30">
                        <h2>Follow Us</h2>
                        <p> In a business context, getting in touch can be crucial for networking and building relationships with clients, partners, and colleagues. </p>
                        <div>
                            <a href="#"><FaFacebook className='fa' size={50} /></a>
                            <a href="#"><FaTwitter className='fa' size={50} /></a>
                            <a href="#"><FaLinkedin className='fa' size={50} /></a>
                            <a href="#"><FaInstagram className='fa' size={50} /></a>
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