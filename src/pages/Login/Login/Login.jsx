import React, { useContext, useState } from 'react';
import { Container, Col, Button, Image, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import googleImage from '../../../assets/google.png'
import { AuthContext } from '../../../providers/AuthProvider';



const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

         //validate
         if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        }
        else if( password.length<6){
            setError('Please add at least 6 characters in your password')
            return;
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
                setError('');
                setSuccess('User has been created successfully');
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
            <Container className='login'>
                <div className="signup-box">
                <Col md={6} className="col-2">
                <h2>Please Login</h2>
                <span>Don't Have an Account? <Link to="/register">Register</Link> </span>
                <a href="#" className="google-link">
                <Image src={googleImage} alt="Google" />Continue with Google
                </a>
                <h4>or</h4>
                <Form onSubmit={handleLogin}>
                    <label>Email Address</label>
                        <Form.Control type="email" name='email' placeholder="Enter your email" className="input-field" required/>

                    <label>Set Password</label>
                        <Form.Control type="password" name='password' placeholder="Enter Password" className="input-field" required/>

                        <Button className='loginbutton' type="submit">Login Now</Button> <br />

                        <Form.Text className="text-success">
                            {success}
                        </Form.Text> <br />
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                    </Form>
                
                </Col>
                </div>
            </Container>
    );
};

export default Login;