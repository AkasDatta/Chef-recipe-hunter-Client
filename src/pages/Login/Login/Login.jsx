import React from 'react';
// import { Button, Container, Form } from 'react-bootstrap';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import bannerImage from '../../../assets/flower.jpg'
import googleImage from '../../../assets/google.png'



const Login = () => {
    return (
        // <div className='container my-5 py-5 w-50'>
        //     <h3 className='text-primary'>Please Login</h3>
        //      <Form>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control type="email" name='email' placeholder="Enter email" required/>
                  
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" name='password' placeholder="Password" required/>
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //             <Form.Check type="checkbox" label="Check me out" />
        //         </Form.Group>
                
        //         <Button variant="primary" type="submit">
        //             Submit
        //         </Button> <br />
        //         <Form.Text className="text-secondary">
        //             Don't Have an Account <Link to="/register">Register</Link>
        //         </Form.Text> <br />
        //         <Form.Text className="text-success">
                    
        //         </Form.Text> <br />
        //         <Form.Text className="text-danger">
                   
        //         </Form.Text>
        //     </Form>

            <Container className='login'>
                <div className="signup-box">
                <Col md={6} className="col-2">
                <h2>Please Login</h2>
                <span>Don't Have an Account? <Link to="/register">Register</Link> </span>
                <a href="#" className="google-link">
                <Image src={googleImage} alt="Google" />Continue with Google
                </a>
                <h4>or</h4>
                <Form>
                    <label>Email Address</label>
                        <Form.Control type="email" name='email' placeholder="Enter your email" className="input-field" required/>

                    <label>Set Password</label>
                        <Form.Control type="password" name='password' placeholder="Enter Password" className="input-field" required/>

                        <Button className='loginbutton' type="submit">Login Now</Button> <br />

                        <Form.Text className="text-success">
                            
                        </Form.Text> <br />
                        <Form.Text className="text-danger">
                        
                        </Form.Text>
                    </Form>
                
                </Col>
                </div>
            </Container>
    );
};

export default Login;