import React, { useContext, useState } from 'react';
import './Register.css'
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import bannerImage from '../../../assets/flower.jpg'
import googleImage from '../../../assets/google.png'
import gitHubImage from '../../../assets/gitHub.png';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const {createUser, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const from = location.state?.from?.pathname || '/';

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
            updateUserData(createdUser, name, photo); // pass createdUser object instead of createUser function
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
          displayName: name,
          photoURL: `${photo}?t=${Date.now()}`
        })
        .then(() => {
          // handle success
        })
        .catch(error => {
          setError(error.message);
        })
      }
      

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser)
            setError('');
            setSuccess('User has been created successfully');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGitHubSignIn = () => {
        signInWithGithub()
        .then(result => {
            const user = result.user;
            // console.log(user)
            setError('');
            setSuccess('User has been created successfully');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error)
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
                        <a onClick={handleGoogleSignIn} href="#" className="google-link">
                        <Image src={googleImage} alt="Google" />Continue with Google
                        </a>
                        <a onClick={handleGitHubSignIn} href="#" className="google-link">
                        <Image src={gitHubImage} alt="GitHub" />Continue with GitHub
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
                                    <Form.Control type={show ? "text" : "password"} name='password' placeholder="Enter Password" className="input-field" required/>

                                    <p onClick={() => setShow(!show)}>
                                    {
                                        show ? <span><FaEye className="FaEye mb-2"></FaEye></span>: <span><FaEyeSlash className="FaEye mb-2"></FaEyeSlash></span>
                                    }
                                    </p>

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