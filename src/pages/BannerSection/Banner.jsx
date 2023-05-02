import React from 'react';
import { Container, Col, Card, Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div >
            <section id="home-section" >
                <div className="dark-overlay">
                    <div className="home-inner">
                    <Container style={{ width: '35rem' }}>
                        <Col lg={12} md={8} className='text-center'>
                            <Card bg="light" className="card-form text-center">
                            <Card.Body className='p-4'>
                                <h1 className='fw-bold' style={{color: '#52A015'}}>Fully-Prepared & <br /> Delivered Fresh To Daily</h1>
                                <p>"Authentic cuisine, unforgettable experience - visit us today at [<span className='text-danger fw-bold'>Foodiee _</span>] !" <br /> </p>
                                <Button variant="btn btn-outline-light btn-success border-success rounded-4" >Start A Plan</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                    </Container>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;