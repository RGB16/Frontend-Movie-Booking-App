import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { Provider } from "react-redux";
import { store } from './store';

axios.defaults.baseURL ="https://book-yourshow-li4q.onrender.com"; //"http://localhost:5000";

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
