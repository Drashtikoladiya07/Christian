import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from '../../website3/src/componets/home/home';
import Nav from '../../website3/src/componets/navbar/navbar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Home />
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
