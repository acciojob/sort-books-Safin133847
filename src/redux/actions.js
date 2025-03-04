import axios from 'axios';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const SORT_BOOKS = 'SORT_BOOKS';

const API_URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=YOUR_API_KEY';

export const fetchBooks = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });
  try {
    
    const sampleBooks = [
      { title: "A Tale of Two Cities", author: "Charles Dickens", publisher: "Penguin", primary_isbn13: "9780141439600" },
      { title: "Moby Dick", author: "Herman Melville", publisher: "Harper & Brothers", primary_isbn13: "9781503280786" },
      { title: "Pride and Prejudice", author: "Jane Austen", publisher: "Modern Library", primary_isbn13: "9780679783268" }
    ];
    sampleBooks.sort((a, b) => a.title.localeCompare(b.title));
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: sampleBooks });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
  }
};

export const sortBooks = (sortBy, order) => ({
  type: SORT_BOOKS,
  payload: { sortBy, order },
});
