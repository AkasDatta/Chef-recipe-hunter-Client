import React, { useContext, useState } from 'react';
import './Register.css'
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImage from '../../../assets/flower.jpg'
import googleImage from '../../../assets/google.png'
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        //validate
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        }
        else if( password.length<6){
            setError('Please add at least 6 characters in your password')
            return;
        }

        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setError('');
                setSuccess('User has been created successfully');
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
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
                        <Form onSubmit={handleRegister}>
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
                                <input onClick={handleAccepted} type="checkbox" defaultChecked />
                                <span>I Agree to the <Link to="/terms">terms and conditions</Link></span>
                                </div>
                            </Row>

                            <Button className='loginbutton' disabled={!accepted} type="submit">Register Now</Button>

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
        </div>
    );
};

export default Register;