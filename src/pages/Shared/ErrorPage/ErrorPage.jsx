import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'
import error from '../../../assets/error.png'


const ErrorPage = () => {
    return (
        <div className='text-center error'>
            <img className='errorImg' src={error} alt="" />
            <h2>Oops! Something went wrong.</h2>
            <h1 className='text-danger'>404 error</h1>
            <p>We're sorry, but the page you're looking for could not be found.</p>
            <button className='rounded p-3'><Link className='no-decoration'
                to='/'
            >
                <h5 className='text-light fw-bold px-2'>Back to homepage</h5>
          </Link></button> 
        </div>
    );
};

export default ErrorPage;