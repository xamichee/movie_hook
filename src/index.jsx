import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

import './index.css';
import ProvideContext from './GenresContext/GenresContext';

ReactDOM.render(
  <ProvideContext>
    <App />
  </ProvideContext>,
  document.getElementById('root')
);
