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
                        Thank you for placing your order with us. We will prepare and deliver it to you as soon as possible.
                        </p>
                    </Col>
                    <Col md={4} className="my-2">
                        <FaJava className='fa' size={70} />
                        <h4 className="my-2">We Cook & Deliver</h4>
                        <p className="lead mb-0">
                        Freshly cooked meals delivered to your doorstep. Enjoy delicious and nutritious food from the comfort of your home.
                        </p>
                    </Col>
                    <Col md={4} className="my-2">
                        <FaUserCheck className='fa' size={70} />
                        <h4 className="my-2">Enjoy Mealtime Again</h4>
                        <p className="lead mb-0">
                        Our meals are designed to be delicious and convenient, allowing you to enjoy mealtime again without any stress or hassle.
                        </p>
                    </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default FirstSection;