import React from 'react';

import {Route} from 'react-router-dom';

import Header from '../Header/Header';
import SearchPage from "../SearchPage/SearchPage";
import RatedPage from "../RatedPage/RatedPage";

import 'antd/dist/antd.css';
import './App.css';

export default function App() {

  return (
    <div className="wrapper">
      <Header />
      <Route path='/search' component={SearchPage} />
      <Route path='/rated' component={RatedPage} />
    </div>
  );
}
