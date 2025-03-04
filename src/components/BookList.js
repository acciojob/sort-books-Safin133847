import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, sortBooks } from '../redux/actions';

const BookList = () => {
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((state) => state.books);
    const [sortBy, setSortBy] = useState("title");
    const [order, setOrder] = useState("asc");

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    useEffect(() => {
        dispatch(sortBooks({ sortBy, order }));
    }, [sortBy, order, dispatch]);

    return (
        <div>
            <h1>Books List</h1>

            <label htmlFor="sort-by">Sort by:</label>
            <select id="sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="publisher">Publisher</option>
            </select>

            <label htmlFor="order">Order:</label>
            <select id="order" value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>

            {loading && <p>Loading...</p>}
            {error && <p>Error loading books</p>}
            {!loading && !error && Array.isArray(books) && books.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.publisher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                !loading && !error && <p>No books available</p>
            )}
        </div>
    );
};

export default BookList;
