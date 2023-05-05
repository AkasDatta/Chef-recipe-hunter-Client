import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({ categories }) => {
  return (
    <div className='container'>
      <Row xs={1} md={2} className="g-4">
        {categories.map(category => (
          <Col key={category.id}>
            <Card>
              <Card.Img className='p-4 rounded-5' variant="top" src={category.picture} />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>
                  {category.bio}
                </Card.Text>
                <h6>Specialty: {category.specialty}</h6>
                <p>Likes: {category.likes}</p>
                <p>Experience: {category.experence}</p>

                <Link to={{ pathname: `/category/${category.id}`, state: { category } }}>
                <button className='btn btn-warning'>View Recipes <FaArrowRight /></button>
                </Link>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChefCard;
