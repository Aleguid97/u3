import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';  // Assicurati di utilizzare il percorso corretto per il tuo componente SearchBar
import BookData from '../data/fantasy.json';

const MyComponent = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const filteredBooks = BookData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Row>
        {filteredBooks.map((book) => (
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
