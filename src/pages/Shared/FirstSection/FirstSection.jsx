import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaJava , FaClipboardList, FaUserCheck} from 'react-icons/fa';
import './FirstSection.css'

const FirstSection = () => {
    return (
        <div>
            <section id="home-icon" className="py-5 text-center">
                <h1 className='text-center fw-bold m-5 display-4'>How it works</h1>
                <Container>
                    <Row>
                    <Col md={4} className="my-2">
                        <FaClipboardList className='fa' size={70} />
                        <h4 className="my-2">Your Order</h4>
                        <p className="lead mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ut facere blanditiis vitae, nobis assumenda?
                        </p>
                    </Col>
                    <Col md={4} className="my-2">
                        <FaJava className='fa' size={70} />
                        <h4 className="my-2">We Cook & Deliver</h4>
                        <p className="lead mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ut facere blanditiis vitae, nobis assumenda?
                        </p>
                    </Col>
                    <Col md={4} className="my-2">
                        <FaUserCheck className='fa' size={70} />
                        <h4 className="my-2">Enjoy Mealtime Again</h4>
                        <p className="lead mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ut facere blanditiis vitae, nobis assumenda?
                        </p>
                    </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default FirstSection;