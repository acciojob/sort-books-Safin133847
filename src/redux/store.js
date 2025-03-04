import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import booksReducer from './reducer';

const rootReducer = combineReducers({
    books: booksReducer,
});

const store = createStore(booksReducer, applyMiddleware(thunk));

export default store;
