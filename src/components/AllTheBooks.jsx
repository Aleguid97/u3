import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Carica i dati dal file JSON (puoi sostituire questo con una chiamata API o altri metodi)
    fetch('fantasy.json')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Errore nel caricamento dei dati', error));
  }, []);

  return (
    <Container>
      <h1>Tutti i Libri</h1>
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.coverUrl} alt={`Copertina di ${book.title}`} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
