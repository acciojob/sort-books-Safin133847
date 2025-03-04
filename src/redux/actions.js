export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const SORT_BOOKS = 'SORT_BOOKS';

export const fetchBooks = () => (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });

  try {
    const sampleBooks = [
      { id: 1, title: "A Tale of Two Cities", author: "Charles Dickens", publisher: "Penguin" },
      { id: 2, title: "Animal Farm", author: "George Orwell", publisher: "Harvill Secker" },
      { id: 3, title: "Brave New World", author: "Aldous Huxley", publisher: "HarperCollins" },
      { id: 4, title: "Catch-22", author: "Joseph Heller", publisher: "Simon & Schuster" },
      { id: 5, title: "Don Quixote", author: "Miguel de Cervantes", publisher: "Penguin" },
      { id: 6, title: "Fahrenheit 451", author: "Ray Bradbury", publisher: "Ballantine Books" },
      { id: 7, title: "Frankenstein", author: "Mary Shelley", publisher: "Lackington, Hughes, Harding" },
      { id: 8, title: "Great Expectations", author: "Charles Dickens", publisher: "Chapman & Hall" },
      { id: 9, title: "Jane Eyre", author: "Charlotte Brontë", publisher: "Smith, Elder & Co." },
      { id: 10, title: "Les Misérables", author: "Victor Hugo", publisher: "A. Lacroix" },
    ];

    sampleBooks.sort((a, b) => a.title.localeCompare(b.title));

    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: sampleBooks });

  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE, payload: "Failed to load books." });
  }
};

export const sortBooks = (sortBy, order) => ({
  type: SORT_BOOKS,
  payload: { sortBy, order },
});
