import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store/index';
// import dotenv from 'dotenv';
import axios from 'axios';

// dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
