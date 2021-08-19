import React, { useState, useEffect } from 'react';
import { Pagination, Alert, Spin } from 'antd';

import Header from '../Header/Header';
import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import GenresContext from './GenresContext';

import { getGuestKey, rateMovie, getGenres, setPage } from "./api";

import 'antd/dist/antd.css';
import './App.css';

function App() {

  const [genres, setGenres] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState('Search');

  const [searchString, setSearchString] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [activeSearchPage, setActiveSearchPage] = useState(1);
  const [movieListFull, setMovieListFull] = useState([]);
  const [totalResults, setTotalResults] = useState(null);

  const [ratedMoviesFull, setRatedMoviesFull] = useState([]);
  const [totalRated, setTotalRated] = useState(null);
  const [ratedPage, setRatedPage] = useState(1);
  const [activeRatedPage, setActiveRatedPage] = useState(1);

  const apiBase = 'https://api.themoviedb.org/3/';
  const apiKey = '382c03696044ec7006f5212f1c181827';
  const guestKey = getGuestKey();
  const isSearchTab = activeTab === "Search";

  if (!genres) getGenres().then(genresList => setGenres(genresList));

  useEffect(() => {
    if (isSearchTab) {
      if (searchString) {
        try {
          fetch(
            `${apiBase}search/movie?api_key=${apiKey}&language=en-US&query=${searchString}&page=${searchPage}&include_adult=false`
          )
            .then((res) => res.json())
            .then((body) => {
              setMovieListFull(body.results);
              setTotalResults(body.total_results);
              setLoading(false);
            });
        } catch (err) {
          setError(true);
        }
      }
    } else {
      setLoading(true);
      try {
        fetch(`${apiBase}guest_session/${guestKey}/rated/movies?api_key=${apiKey}&page=${ratedPage}&language=en-US&sort_by=created_at.asc}`)
          .then((res) => res.json())
          .then((obj) => {
            setRatedPage(obj.page);
            setTotalRated(obj.total_results);
            setRatedMoviesFull(obj.results);
            setLoading(false);
          });
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }
  }, [isSearchTab, searchString, activeSearchPage, searchPage, ratedPage, guestKey]);

  const tabClick = (event) => setActiveTab(event.target.name);

  const pageClick = (num) => isSearchTab ?
    setPage(num, setActiveSearchPage, setSearchPage, activeSearchPage) :
    setPage(num, setActiveRatedPage, setRatedPage, activeRatedPage);

  const onSubmit = (label) => {
    setSearchString(label);
    setError(false);
    setLoading(true);
    setSearchPage(1);
    setActiveSearchPage(1);
  };

  const showError = (
    <Alert
      className="alert"
      message="Error Text"
      description="Something goes wrong! But truth is out there..."
      type="error"
    />
  );

  const {filmsToRender, totalToRender, activePage} = isSearchTab ?
    { filmsToRender: movieListFull, totalToRender: totalResults, activePage: activeSearchPage } :
    { filmsToRender: ratedMoviesFull, totalToRender: totalRated, activePage: activeRatedPage};

  const list = activePage % 2 === 0 ? [...filmsToRender.slice(10)] : [...filmsToRender.slice(0, 10)];

  const paginator = filmsToRender.length ? (
    <Pagination current={activePage} total={totalToRender} onChange={pageClick} showSizeChanger={false} />
  ) : null;

  const pages = loading ? (
    <div className="spin">
      <Spin size="large" />
    </div>
  ) : (
    <div>
      <GenresContext.Provider value={genres}>
        <MoviesList movieList={list} rateMovie={rateMovie} active={activeTab} />
      </GenresContext.Provider>
      <div className="paginator">{paginator}</div>
    </div>
  );

  const showTab = isSearchTab ? (
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
