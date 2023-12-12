// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Listes from './components/Listes';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Listes />
  </React.StrictMode>
);

reportWebVitals();
