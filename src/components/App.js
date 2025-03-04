import React from "react";
import { Provider } from 'react-redux';
import store from '../redux/store';
import BooksList from './BookList'; 
import './../styles/App.css';

const App = () => {
  return (
      <Provider store={store}>
          <div>
              <h1>Sort Books App</h1>
              <BooksList />
          </div>
      </Provider>
  );
};

export default App;
