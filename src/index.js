import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './Router.jsx'
import './global.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Router></Router>
    </BrowserRouter>

  </React.StrictMode>
);

