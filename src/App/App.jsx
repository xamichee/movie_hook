import React from 'react';

import {Route, Redirect} from 'react-router-dom';

import Header from '../Header/Header';
import MoviesPage from "../MoviesPage/MoviesPage";

import 'antd/dist/antd.css';
import './App.css';

export default function App() {

  return (
    <div className="wrapper">
      <Header />
      <Route path='/search' component={MoviesPage} />
      <Route path='/rated' component={MoviesPage} />
      <Redirect to='/search'/>
    </div>
  );
}
