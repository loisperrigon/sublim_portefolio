// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import MyRouter from './components/MyRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);

reportWebVitals();
