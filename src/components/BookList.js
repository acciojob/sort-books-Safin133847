import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, sortBooks } from '../redux/actions';

const BooksList = () => {
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector(state => state);

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
            <h2>Books List</h2>
            <div>
                <label>Sort By: </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="publisher">Publisher</option>
                </select>
                <select value={order} onChange={(e) => setOrder(e.target.value)}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                <button onClick={handleSort}>Sort</button>
            </div>

            {loading && <p>Loading books...</p>}
            {error && <p>Error: {error}</p>}

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
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.publisher}</td>
                            <td>{book.primary_isbn13}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BooksList;
