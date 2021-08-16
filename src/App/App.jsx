import React, { useState, useEffect } from 'react';
import { Pagination, Alert, Spin } from 'antd';

import Header from '../Header/Header';
import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import GenresContext from './GenresContext';

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
  const [guestKey, setGuestKey] = useState(localStorage.getItem('guestKey'));
  const [activeTab, setActiveTab] = useState('Search');
  const [ratedMovies, setRatedMovies] = useState([]);

  const apiBase = 'https://api.themoviedb.org/3/';
  const apiKey = '382c03696044ec7006f5212f1c181827';

  useEffect(() => {
    if (!guestKey) {
      fetch(`${apiBase}authentication/guest_session/new?api_key=${apiKey}`)
        .then((res) => res.json())
        .then((obj) => {
          localStorage.setItem('guestKey', obj.guest_session_id);
          setGuestKey(localStorage.getItem('guestKey'));
        });
    }
  }, [guestKey]);

  useEffect(() => {
    fetch(`${apiBase}genre/movie/list?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((obj) => setGenres(obj.genres));
  }, []);

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
        setError(true);
      }
    }
  }, [searchString, activePage, searchPage]);

  const rateMovie = (value, id) => {
    fetch(`${apiBase}movie/${id}/rating?api_key=${apiKey}&guest_session_id=${guestKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        value,
      }),
    });
  };

  const tabClick = (event) => {
    setActiveTab(event.target.name);
    if (event.target.name === 'Rated') {
      setLoading(true);
      fetch(`${apiBase}guest_session/${guestKey}/rated/movies?api_key=${apiKey}&language=en-US&sort_by=created_at.asc}`)
        .then((res) => res.json())
        .then((obj) => {
          setRatedMovies(obj.results);
          setLoading(false);
        });
    }
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

  const list = activePage % 2 === 0 ? [...movieListFull.slice(10)] : [...movieListFull.slice(0, 10)];

  const onSubmit = (label) => {
    setSearchString(label);
    setError(false);
    setLoading(true);
    setSearchPage(1);
    setActivePage(1);
  };

  const showError = (
    <Alert
      className="alert"
      message="Error Text"
      description="Something goes wrong! But truth is out there..."
      type="error"
    />
  );

  const listToRender = activeTab === 'Search' ? list : ratedMovies;

  const paginator = listToRender.length ? (
    <Pagination current={activePage} total={totalResults} onChange={pageClick} showSizeChanger={false} />
  ) : null;

  const pages = loading ? (
    <div className="spin">
      <Spin size="large" />
    </div>
  ) : (
    <div>
      <GenresContext.Provider value={genres}>
        <MoviesList movieList={listToRender} rateMovie={rateMovie} active={activeTab} />
      </GenresContext.Provider>
      <div className="paginator">{paginator}</div>
    </div>
  );

  const showTab =
    activeTab === 'Search' ? (
      <div>
        <Search submit={onSubmit} />
        {pages}
      </div>
    ) : (
      pages
    );

  return (
    <div className="wrapper">
      <Header tabClick={tabClick} active={activeTab} />
      {error ? showError : showTab}
    </div>
  );
}

export default App;
