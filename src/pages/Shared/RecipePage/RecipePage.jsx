import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './RecipePage.css';

const RecipePage = () => {
  const categories = useLoaderData();
  const { id } = useParams();
  const category = categories.find(item => item.id == id);
  const recipes = category.recipes;
  console.log(recipes)
  return (
    <div>
      {
        recipes.map((recipe) => (
          <div key={recipe.id}>
               <div className='recipe'>
                
                <Card className="mb-5 py-5 container">
                  <Row  className="g-5">
                    <Col md={4}>
                      <Card.Img src={recipe.picture} className="img-fluid rounded-start" alt="..." />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text>
                        {recipe.making_details}
                        </Card.Text>
                        <Card.Text>
                          {recipe.rating}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
            </div>
          </div>
         
        ))
      }
    </div>
  );
};

export default RecipePage;