import React from 'react';
import SingleBook from './SingleBook';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </div>
  );
};

export default BookList;