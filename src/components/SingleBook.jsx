import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; 
import SingleBook from './SingleBook'; 
import BookData from './data.json';

const BookListWithCards = () => {
  return (
    <div>
      <Row>
        {BookData.map((book) => (
          <Col key={book.asin} sm={4}>
            <Card className='h-100 g-3' style={{ marginBottom: '20px', marginTop: '20px' }}>
              <SingleBook book={book} /> {/* Integrate the SingleBook component */}
              <Card.Body className=' mb-4'>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.text}</Card.Text>
                <h3>{book.price}€</h3>
                <Button variant="primary" className='button1'> Acquista </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BookListWithCards;
