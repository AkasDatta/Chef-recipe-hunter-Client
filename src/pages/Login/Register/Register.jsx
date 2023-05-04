import React from 'react';
import './Register.css'
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImage from '../../../assets/flower.jpg'
import googleImage from '../../../assets/google.png'

const Register = () => {
    return (
        <div>
            <Container className='login'>
                <div className="signup-box">
                    <Col md={6} className="col-1">
                        <Image src={bannerImage} alt="image" />
                    </Col>
                    <Col md={6} className="col-2">
                        <h2>Please Register</h2>
                        <span>Already Have an Account? <Link to="/login">Login</Link> </span>
                        <a href="#" className="google-link">
                        <Image src={googleImage} alt="Google" />Continue with Google
                        </a>
                        <h4>or</h4>
                        <Form>
                        <label>Name</label>
                            <Form.Control type="text" name='name' placeholder="Enter your name" className="input-field" required/>

                        <label>Photo URL</label>
                            <Form.Control type="text" name='photo' placeholder="Photo URL" className="input-field" required/>

                        <label>Email Address</label>
                            <Form.Control type="email" name='email' placeholder="Enter your email" className="input-field" required/>

                        <label>Set Password</label>
                            <Form.Control type="password" name='password' placeholder="Enter Password" className="input-field" required/>

                        <Row>
                            <div className='d-flex' name='accept'>
                            <input type="checkbox" defaultChecked />
                            <span>I Agree to the <a href="#">terms and conditions</a></span>
                            </div>
                        </Row>

                        <Button className='loginbutton' type="submit">Register Now</Button>

                        <Form.Text className="text-success">
                            
                        </Form.Text> <br />
                        <Form.Text className="text-danger">
                            
                        </Form.Text>
                        </Form>            
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Register;