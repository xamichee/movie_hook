import React, { useState, useEffect } from 'react';
import { Pagination, Alert, Spin } from 'antd';

import Header from '../Header/Header';
import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import GenresContext from "./GenresContext";

import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [searchString, setSearchString] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [movieListFull, setMovieListFull] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState([]);


  const apiBase = 'https://api.themoviedb.org/3/';
  const apiKey = '382c03696044ec7006f5212f1c181827';

  const onError = () => {
    setError(true);
  };

  const onSubmit = (label) => {
    setSearchString(label);
    setError(false);
    setLoading(true);
    setSearchPage(1);
    setActivePage(1);
  };

  const pageClick = (num) => {
    const nextPage = Math.ceil(num / 2);

    if (Math.ceil(activePage / 2) === nextPage) {
      setActivePage(num);
      return;
    }
    setSearchPage(nextPage);
    setActivePage(num);
  };

  useEffect(() => {
    fetch(`${apiBase}genre/movie/list?api_key=${apiKey}&language=en-US`)
      .then(res => res.json())
      .then(obj => setGenres(obj.genres)
      );
  }, [])


  useEffect(() => {
    if (searchString) {
      try {
        fetch(
          `${apiBase}search/movie?api_key=${apiKey}&language=en-US&query=${searchString}&page=${searchPage}&include_adult=false`
        )
          .then((res) => res.json())
          .then((body) => {
            setMovieListFull([...body.results]);
            setTotalResults(body.total_results);
            setLoading(false);
          });
      } catch (err) {
        onError();
      }
    }
  }, [searchString, activePage, searchPage]);

  const list = activePage % 2 === 0 ? [...movieListFull.slice(10)] : [...movieListFull.slice(0, 10)];

  const showError = (
    <Alert
      className="alert"
      message="Error Text"
      description="Something goes wrong! But truth is out there..."
      type="error"
    />
  );

  const pages = loading ? (
    <div className="spin">
      <Spin size="large" />
    </div>
  ) : (
    <div>
      <GenresContext.Provider value={genres}>
        <MoviesList movieList={list} />
      </GenresContext.Provider>

      <div className="paginator">
        <Pagination current={activePage} total={totalResults} onChange={pageClick} showSizeChanger={false} />
      </div>
    </div>
  );

  return (
    <div className="wrapper">
      <Header />
      <Search submit={onSubmit} />
      {error ? showError : pages}
    </div>
  );
}

export default App;
