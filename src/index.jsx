import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './App/App';
import ProvideContext from './GenresContext/GenresContext';

import './index.css';

ReactDOM.render(
  <ProvideContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProvideContext>,
  document.getElementById('root')
);
