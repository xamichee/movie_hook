import React, { useState, useEffect } from 'react';
import { Pagination, Spin } from 'antd';

import Header from '../Header/Header';
import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import Error from '../Error/Error';

import MovieApi from '../api/MovieApi';

import 'antd/dist/antd.css';
import './App.css';

export default function App() {
  const { rateMovie, setPage } = new MovieApi();

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

  const isSearchTab = activeTab === 'Search';

  useEffect(() => {
    const { searchMovies, getRated } = new MovieApi();
    if (isSearchTab) {
      if (searchString) {
        searchMovies(searchString, searchPage)
          .then((body) => {
            setMovieListFull(body.results);
            setTotalResults(body.total_results);
            if (body.total_results === 0) setError('Ничего не найдено, увы...');
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
            setError('Не удалось загрузить фильмы.');
          });
      }
    } else {
      setLoading(true);
      getRated(ratedPage)
        .then((obj) => {
          setRatedPage(obj.page);
          setTotalRated(obj.total_results);
          setRatedMoviesFull(obj.results);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError('Не удалось загрузить фильмы.');
        });
    }
  }, [isSearchTab, searchString, searchPage, ratedPage]);

  const tabClick = (event) => {
    setActiveTab(event.target.name);
    setError(false);
  };

  const pageClick = (num) =>
    isSearchTab
      ? setPage(num, setActiveSearchPage, setSearchPage, activeSearchPage)
      : setPage(num, setActiveRatedPage, setRatedPage, activeRatedPage);

  const onSubmit = (label) => {
    setSearchString(label);
    setError(false);
    setLoading(true);
    setSearchPage(1);
    setActiveSearchPage(1);
  };

  const { filmsToRender, totalToRender, activePage } = isSearchTab
    ? { filmsToRender: movieListFull, totalToRender: totalResults, activePage: activeSearchPage }
    : { filmsToRender: ratedMoviesFull, totalToRender: totalRated, activePage: activeRatedPage };

  const list = activePage % 2 === 0 ? [...filmsToRender.slice(10)] : [...filmsToRender.slice(0, 10)];

  const paginator = filmsToRender.length ? (
    <Pagination current={activePage} total={totalToRender} onChange={pageClick} showSizeChanger={false} />
  ) : null;

  const page = (
    <div>
      <MoviesList movieList={list} rateMovie={rateMovie} active={activeTab} />
      <div className="paginator">{paginator}</div>
    </div>
  );

  return (
    <div className="wrapper">
      <Header tabClick={tabClick} active={activeTab} />
      {isSearchTab && <Search submit={onSubmit} />}
      {error && <Error message={error} />}
      {!error && loading && <Spin className="spin" size="large" />}
      {!error && !loading && page}
    </div>
  );
}
