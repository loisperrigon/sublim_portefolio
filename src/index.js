// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import MyRouter from './components/MyRouter';

createRoot(document.getElementById('root')).render(
  <MyRouter />
);

reportWebVitals();
