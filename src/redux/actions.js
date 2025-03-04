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
      { title: "Animal Farm", author: "George Orwell", publisher: "Harvill Secker", primary_isbn13: "9780451526342" },
      { title: "Brave New World", author: "Aldous Huxley", publisher: "HarperCollins", primary_isbn13: "9780060850524" },
      { title: "Catch-22", author: "Joseph Heller", publisher: "Simon & Schuster", primary_isbn13: "9781451626650" },
      { title: "Don Quixote", author: "Miguel de Cervantes", publisher: "Penguin", primary_isbn13: "9780142437230" },
      { title: "Fahrenheit 451", author: "Ray Bradbury", publisher: "Ballantine Books", primary_isbn13: "9781451673319" },
      { title: "Frankenstein", author: "Mary Shelley", publisher: "Lackington, Hughes, Harding, Mavor & Jones", primary_isbn13: "9780486282114" },
      { title: "Great Expectations", author: "Charles Dickens", publisher: "Chapman & Hall", primary_isbn13: "9780141439563" },
      { title: "Jane Eyre", author: "Charlotte Brontë", publisher: "Smith, Elder & Co.", primary_isbn13: "9780141441146" },
      { title: "Les Misérables", author: "Victor Hugo", publisher: "A. Lacroix, Verboeckhoven & Cie", primary_isbn13: "9780451419439" },
      { title: "Moby Dick", author: "Herman Melville", publisher: "Harper & Brothers", primary_isbn13: "9781503280786" },
      { title: "Pride and Prejudice", author: "Jane Austen", publisher: "Modern Library", primary_isbn13: "9780679783268" },
      { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", publisher: "The Russian Messenger", primary_isbn13: "9780374528379" },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", publisher: "Little, Brown and Company", primary_isbn13: "9780316769488" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publisher: "Charles Scribner's Sons", primary_isbn13: "9780743273565" },
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
