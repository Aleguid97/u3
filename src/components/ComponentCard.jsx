import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import BookData from "../data/fantasy.json";

const MyComponent = () => {
  // Declare a state variable to manage the selected book
  const [selectedBook, setSelectedBook] = useState(null);

  // Function to handle the book selection
  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      <Row>
        {BookData.map((book) => (
          <Col key={book.id} sm={4}>
            <Card
              className={`h-100 g-3 ${selectedBook && selectedBook.id === book.id ? 'selected' : ''}`}
              style={{ marginBottom: '20px', marginTop: '20px' }}
              onClick={() => handleBookSelect(book)}
            >
              <img src={book.img} className="card-img-top" alt="..." />
              <Card.Body className=' mb-4'>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.text}</Card.Text>
                <h3>{book.price}€</h3>
                <Button variant="primary" className='button1'>
                  Acquista
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyComponent;
