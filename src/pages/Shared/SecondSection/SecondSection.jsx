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
                                <h5 className="text-light"> The restaurant is a family-owned business that has been serving the community for over 20 years. It all started with a passion for cooking and sharing delicious meals with others. Over the years, the restaurant has become known for its warm atmosphere and exceptional cuisine. </h5>
                                <h5 className="text-light"> The menu features a variety of dishes that are made from fresh, locally-sourced ingredients. From classic comfort food to creative, modern dishes, there is something for everyone to enjoy. The chefs take pride in crafting each dish with care and attention to detail, ensuring that every bite is a memorable experience.</h5>
                                <br />
                                <h5 className="text-light"> Whether you're stopping in for a quick lunch or celebrating a special occasion, the restaurant is the perfect destination. The friendly staff is always ready to welcome you and make you feel at home. Come visit us and experience the delicious food and warm hospitality for yourself.</h5>
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