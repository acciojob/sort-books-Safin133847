import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, sortBooks } from '../redux/actions';

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector(state => state);

  // Default sort by "title" and order "asc"
  const [sortBy, setSortBy] = useState('title');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleSort = () => {
    dispatch(sortBooks(sortBy, order));
  };

  return (
    <div>
      {/* This header is expected by the tests */}
      <h2>Books List</h2>
      
      {/* Dropdowns container */}
      <div id="dropdowns" style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <div id="sortby">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {/* Disabled placeholder option */}
            <option value="" disabled>Sort by:</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="publisher">Publisher</option>
          </select>
        </div>
        <div id="order">
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            {/* Disabled placeholder option */}
            <option value="" disabled>Order:</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      
      <button onClick={handleSort}>Sort</button>

      {loading && <p>Loading books...</p>}
      {error && <p>Error: {error}</p>}

      {/* Table with book data */}
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {books && books.length > 0 ? (
            books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.primary_isbn13}</td>
              </tr>
            ))
          ) : (
            !loading && !error && (
              <tr>
                <td colSpan="4">No books available</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
