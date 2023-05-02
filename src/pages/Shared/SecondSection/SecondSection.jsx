import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import './SecondSection.css';
import food from '../../../assets/makingfood.jpg';

const SecondSection = () => {
    return (
        <div>
            <section id="create-main-section">
                <div className="dark-overlay">
                    <Container>
                        <Row>
                            <Col lg={6} md={12}>
                                <h1 className="mt-5 pt-5 pb-3 fw-bold">The Story</h1>
                                <h5 className="text-light"> Lorem Ipsum is simply dummying text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h5>
                                <br />
                                <h5 className="text-light"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aliquam sed cum, sunt, quia dicta? Animi, commodi, neque incidunt non atque aliquid voluptates nostrum, inventore tenetur asperiores a necessitatibus ut.</h5>
                            </Col>
                            <Col lg={6} md={12} className="pt-5">
                                <img src={food} className="img-fluid mt-5 mb-5 rounded " alt="Create Your Passion" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
      </div>
    );
};

export default SecondSection;