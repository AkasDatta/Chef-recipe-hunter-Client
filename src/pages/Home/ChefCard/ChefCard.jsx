import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import RecipePage from '../RecipePage/RecipePage';

const ChefCard = ({ categories }) => {
    // console.log(categories)
    
    return (
        <div className='container'>
            <Row xs={1} md={2} className="g-4">
                {categories.map(category => (
                    <Col key={category.id}>
                        <Card>
                            <Card.Img variant="top" src={category.picture} />
                            <Card.Body>
                                <Card.Title>{category.name}</Card.Title>
                                <Card.Text>
                                    {category.bio}
                                </Card.Text>
                                <h6>Specialty: {category.specialty}</h6>
                                <p>Likes: {category.likes}</p>
                                <p>Experience: {category.experence}</p>

                                <Link to={`category/${category.id}`}><RecipePage category={category}><button className='btn btn-warning'>View Recipes <FaArrowRight></FaArrowRight> </button></RecipePage></Link>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ChefCard;
