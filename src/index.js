import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { Provider } from "react-redux";
import { store } from './store';

axios.defaults.baseURL ="https://api.render.com/deploy/srv-ckaj4s4g66mc7382vi90?key=Y0Cy2WSSVq8"||"http://localhost:5000" ;//"http://localhost:5000";

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
