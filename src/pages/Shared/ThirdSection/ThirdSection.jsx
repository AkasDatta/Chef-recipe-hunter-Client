import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ThirdSection.css'
import person from '../../../assets/person-1.jpeg'
import person2 from '../../../assets/person-2.jpeg'
import person3 from '../../../assets/person-3.jpeg'

const ThirdSection = () => {
    return (
        <div>
            <section id="home-icon" className="py-5 text-center">
                <h1 className='text-center fw-bold m-5 display-4' style={{color: '#52A015'}}>What people say</h1>
                <Container>
                    <Row>
                    <Col md={4} className="my-2">
                        <p className="lead mb-0">
                        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the galley of type and scrambled it to make a type specimen book". 
                        </p>
                        <img className='personImage mt-3' src={person} alt="" />
                        <h4 className="my-2">John Dallas</h4>
                        <p>family plan</p>
                    </Col>
                    <Col md={4} className="my-2">
                        <p className="lead mb-0">
                        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the galley of type and scrambled it to make a type specimen book". 
                        </p>
                        <img className='personImage mt-3' src={person3} alt="" />
                        <h4 className="my-2">Aimee Irving</h4>
                        <p>Individual Plan</p>
                    </Col>
                    <Col md={4} className="my-2">
                        <p className="lead mb-0">
                        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the galley of type and scrambled it to make a type specimen book". 
                        </p>
                        <img className='personImage mt-3' src={person2} alt="" />
                        <h4 className="my-2">John Destin</h4>
                        <p>Individual Plan</p>
                    </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default ThirdSection;