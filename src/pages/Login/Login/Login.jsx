import React, { useContext, useState } from 'react';
import { Container, Col, Button, Image, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import googleImage from '../../../assets/google.png';
import gitHubImage from '../../../assets/gitHub.png';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Login = () => {
    const [show, setShow] = useState(false);
    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('Login page location', location)
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

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
                // console.log(loggedUser);
                navigate(from, {replace: true});
                setError('');
                setSuccess('User has been created successfully');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace: true});
            console.log(loggedUser)
            setError('');
            setSuccess('User has been created successfully');
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGitHubSignIn = () => {
        signInWithGithub()
        .then(result => {
            const user = result.user;
            navigate(from, {replace: true});
            console.log(user)
            setError('');
            setSuccess('User has been created successfully');
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
            <Container className='login'>
                <div className="signup-box">
                <Col md={6} className="col-2">
                <h2>Please Login</h2>
                <span>Don't Have an Account? <Link to="/register">Register</Link> </span>
                <a onClick={handleGoogleSignIn} href="#" className="google-link">
                <Image src={googleImage} alt="Google" />Continue with Google
                </a>
                <a onClick={handleGitHubSignIn} href="#" className="google-link">
                <Image src={gitHubImage} alt="GitHub" />Continue with GitHub
                </a>
                <h4>or</h4>
                <Form onSubmit={handleLogin}>
                    <label>Email Address</label>
                        <Form.Control type="email" name='email' placeholder="Enter your email" className="input-field" required/>

                    <label>Set Password</label>
                        <Form.Control type={show ? "text" : "password"} name='password' placeholder="Enter Password" className="input-field" required/>

                        <p onClick={() => setShow(!show)}>
                        {
                            show ? <span><FaEye className="FaEye mb-2"></FaEye></span>: <span><FaEyeSlash className="FaEye mb-2"></FaEyeSlash></span>
                        }
                        </p>

                        <Button type="submit">Login Now</Button> <br />

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