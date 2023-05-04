import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Terms.css"

const Terms = () => {
  return (
    <Container className="my-5 py-5">
      <h1>Terms of Service</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum
        at orci dictum pretium. Donec blandit luctus dui, sit amet vestibulum
        est eleifend sed. Nulla facilisi. Morbi congue orci non urna pharetra
        ultrices.
      </p>
      <p>
        Integer euismod urna a imperdiet maximus. Donec eget mi sapien. Sed
        pharetra ante a est sollicitudin, eget posuere felis pharetra. Nullam
        euismod, magna ut aliquet suscipit, ex mauris facilisis tortor, id
        consectetur urna magna et enim.
      </p>
      <p>Go back to <Link className='termsRegister' to="/register">Register</Link></p>
    </Container>
  );
};

export default Terms;
