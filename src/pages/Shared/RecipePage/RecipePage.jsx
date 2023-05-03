import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './RecipePage.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const RecipePage = () => {
  const categories = useLoaderData();
  const { id } = useParams();
  const category = categories.find(item => item.id == id);
  const recipes = category.recipes;
  
  const [favoriteStates, setFavoriteStates] = useState(recipes.map(() => false));

  function handleFavoriteClick(index) {
    const newFavoriteStates = [...favoriteStates];
    newFavoriteStates[index] = true;
    setFavoriteStates(newFavoriteStates);
  }

  return (
    <div>
      {
        recipes.map((recipe, index) => (
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
                        <b>Ingredients: </b>{recipe.making_details}
                      </Card.Text>
                      <Card.Text>
                        <p>Rattings: <Rating
                          placeholderRating={recipe.rating}
                          readonly
                          emptySymbol={<FaRegStar></FaRegStar>}
                          placeholderSymbol={<FaStar className='text-danger'></FaStar>}
                          fullSymbol={<FaStar></FaStar>}
                        ></Rating> {recipe.rating}</p>

                        <Button 
                          variant="success" 
                          onClick={() => handleFavoriteClick(index)} 
                          disabled={favoriteStates[index]}
                        >
                          {favoriteStates[index] ? 'Favorited' : 'Add to Favorites'}
                        </Button>
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
