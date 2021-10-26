import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Pagination, Spin } from "antd";

import MoviesList from "../MoviesList/MoviesList";
import Error from "../Error/Error";

import MovieApi from "../api/MovieApi";
import SearchInput from "../SearchInput/SearchInput";

const { setPage, searchMovies, getRated } = new MovieApi();

const MoviesPage = () => {
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchString, setSearchString] = useState('');

  const [serverPage, setServerPage] = useState(1);
  const [localPage, setLocalPage] = useState(1);
  const [movieListFull, setMovieListFull] = useState([]);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    if (isSearchPage) {
      if (searchString) {
        searchMovies(searchString, serverPage)
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
      getRated(serverPage)
        .then((obj) => {
          setServerPage(obj.page);
          setTotalResults(obj.total_results);
          setMovieListFull(obj.results);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError("Не удалось загрузить фильмы.");
        });
    }
  }, [ searchString, serverPage, isSearchPage, totalResults ]);

  const onSubmit = (label) => {
    setSearchString(label);
    setError(false);
    setLoading(true);
    setServerPage(1);
    setLocalPage(1);
  };

  const pageClick = (num) => setPage(num, setLocalPage, setServerPage, localPage);

  const paginator = movieListFull.length ? (
    <Pagination current={localPage} total={totalResults} onChange={pageClick} showSizeChanger={false} />
  ) : null;

  const list = localPage % 2 === 0 ? [...movieListFull.slice(10)] : [...movieListFull.slice(0, 10)];

  const page = (
    <>
      <MoviesList movieList={list} />
      <div className="paginator">{paginator}</div>
    </>
  );

  return (
    <div>
      {isSearchPage ? <SearchInput submit={onSubmit}/> : null}
      {error && <Error message={error} />}
      {!error && loading && <Spin className="spin" size="large" />}
      {!error && !loading && page}
    </div>
  );
};

export default MoviesPage;
