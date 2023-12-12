// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Routes from './components/Routes';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

reportWebVitals();
