import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import BookData from "../data/fantasy.json";

const MyComponent = () => {
  // Remove this local definition
  // const BookData = [
  //   { id: 1, title: 'Card 1', text: 'Contenuto della card 1' },
  //   { id: 2, title: 'Card 2', text: 'Contenuto della card 2' },
  //   { id: 3, title: 'Card 3', text: 'Contenuto della card 3' },
  //   { id: 4, title: 'Card 3', text: 'Contenuto della card 4' },
  //   { id: 5, title: 'Card 3', text: 'Contenuto della card 5' },
  //   { id: 6, title: 'Card 3', text: 'Contenuto della card 6' },
  // ];

  return (
    <div>
      <Row>
        {BookData.map((card) => (
          <Col key={card.id} sm={4}>
            <Card style={{ marginBottom: '20px', marginTop: '20px' }}>
            <img src={card.img} class="card-img-top" alt="..."/>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <h3>{card.price}€</h3>
                <Button variant="primary"> Acquista </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyComponent;
