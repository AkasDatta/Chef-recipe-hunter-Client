import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import './Main.css';
import { Container, Col, Card, Button } from 'react-bootstrap';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div >
                <section id="home-section" >
                     <div className="dark-overlay">
                         <div className="home-inner">
                         <Container style={{ width: '35rem' }}>
                             <Col lg={12} md={8} className='text-center'>
                                 <Card bg="light" className="card-form text-center">
                                 <Card.Body className='p-4'>
                                     <h1 className='fw-bold' style={{color: '#52A015'}}>Fully-Prepared & <br /> Delivered Fresh To Daily</h1>
                                     <p>Please fill out this from to register Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Consequatur, animi! </p>
                                     <Button variant="btn btn-outline-light btn-success border-success" >Start A Plan</Button>{' '}
                                 </Card.Body>
                                 </Card>
                                 </Col>
                         </Container>
                         </div>
                     </div>
                 </section>
            </div>
       

            <Footer></Footer>
        </div>
    );
};

export default Main;