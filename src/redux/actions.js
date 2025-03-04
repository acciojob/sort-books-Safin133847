import axios from 'axios';

const API_URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=YOUR_API_KEY';

// Action Types
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const SORT_BOOKS = 'SORT_BOOKS';

// Fetch Books Action
export const fetchBooks = () => async (dispatch) => {
    dispatch({ type: FETCH_BOOKS_REQUEST });

    try {
        const response = await axios.get(API_URL);
        dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data.results.books });
    } catch (error) {
        dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
    }
};

// Sort Books Action
export const sortBooks = (sortBy, order) => ({
    type: SORT_BOOKS,
    payload: { sortBy, order },
});
