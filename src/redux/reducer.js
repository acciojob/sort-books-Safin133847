import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE, SORT_BOOKS } from './actions';

const initialState = {
    books: [],
    loading: false,
    error: null,
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_BOOKS_SUCCESS:
            return { ...state, books: action.payload || [], loading: false };
        case FETCH_BOOKS_FAILURE:
            return { ...state, books: [], loading: false, error: action.payload };
        case SORT_BOOKS:
            const { sortBy, order } = action.payload;
            const sortedBooks = [...state.books].sort((a, b) => {
                if (a[sortBy] < b[sortBy]) return order === 'asc' ? -1 : 1;
                if (a[sortBy] > b[sortBy]) return order === 'asc' ? 1 : -1;
                return 0;
            });
            return { ...state, books: sortedBooks };
        default:
            return state;
    }
};

export default booksReducer;
