import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
  );
