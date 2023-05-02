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
                        <h2 className='fw-bold'>Foodiee _</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ab quo soluta, quibusdam itaque harum similique deleniti .</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptatibus quidem iste, qui harum consequuntur, aut ipsam veniam commodi assumenda!</p>
                        <div>
                            <a href="#"><FaFacebook className='fa' size={50} /></a>
                            <a href="#"><FaTwitter className='fa' size={50} /></a>
                            <a href="#"><FaLinkedin className='fa' size={50} /></a>
                            <a href="#"><FaInstagram className='fa' size={50} /></a>
                        </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="segment-four sm-mb-30">
                        <h2>Get in Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ratione eveniet quibusdam perspiciatis nobis accusantium architecto fugit, quas neque recusandae.</p>
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