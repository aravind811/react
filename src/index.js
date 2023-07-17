import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './Header';
import App from './App'

import reportWebVitals from './reportWebVitals';
import Add from './portal';
import Main from './maincontent';
import ExampleComponent from './fetcj';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import LoginPage from './login';
import userReducer from './userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <Provider store={store}>
   <App />
</Provider>
   
   </BrowserRouter>
  
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
