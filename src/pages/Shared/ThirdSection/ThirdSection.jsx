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
                        John went to the store to buy some groceries. He saw his friend Sarah there, and they chatted for a while before parting ways. Later that day, Sarah called John to invite him to a party on the weekend.
                        </p>
                        <img className='personImage mt-3' src={person} alt="" />
                        <h4 className="my-2">John Dallas</h4>
                        <p>family plan</p>
                    </Col>
                    <Col md={4} className="my-2">
                        <p className="lead mb-0">
                        Mary woke up early and went for a jog in the park. She felt refreshed and energized after the exercise. When she got back home, her husband surprised her with breakfast in bed as a reward for her healthy habit.
                        </p>
                        <img className='personImage mt-3' src={person3} alt="" />
                        <h4 className="my-2">Aimee Irving</h4>
                        <p>Individual Plan</p>
                    </Col>
                    <Col md={4} className="my-2">
                        <p className="lead mb-0">
                        Tom was nervous before his job interview. He had prepared well, but he still felt anxious. During the interview, he focused on his strengths and answered the questions confidently. A few days later, he received a call offering him the job.
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