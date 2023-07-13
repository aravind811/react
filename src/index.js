import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './Header';
import App from './App'
import Person   from './Demo';
import reportWebVitals from './reportWebVitals';
import overall from './Demo';
import Comment from './demo2';
import Add from './portal';
import Main from './maincontent';
import ExampleComponent from './fetcj';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
    <App />
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
