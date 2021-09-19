import React, { useEffect, useState } from "react";
import { Pagination, Spin } from "antd";

import SearchInput from "../SearchInput/SearchInput";

import MoviesList from "../MoviesList/MoviesList";
import Error from "../Error/Error";

import MovieApi from "../api/MovieApi";

const SearchPage = () => {
  const { setPage, rateMovie } = new MovieApi();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchString, setSearchString] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [activeSearchPage, setActiveSearchPage] = useState(1);
  const [movieListFull, setMovieListFull] = useState([]);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    const { searchMovies } = new MovieApi();
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
  }, [ searchString, searchPage ]);

  const onSubmit = (label) => {
    setSearchString(label);
    setError(false);
    setLoading(true);
    setSearchPage(1);
    setActiveSearchPage(1);
  };

  const pageClick = (num) => setPage(num, setActiveSearchPage, setSearchPage, activeSearchPage);

  const list = activeSearchPage % 2 === 0 ? [...movieListFull.slice(10)] : [...movieListFull.slice(0, 10)];

  const paginator = movieListFull.length ? (
    <Pagination current={activeSearchPage} total={totalResults} onChange={pageClick} showSizeChanger={false} />
  ) : null;

  const page = (
    <>
      <MoviesList movieList={list} rateMovie={rateMovie} />
      <div className="paginator">{paginator}</div>
    </>
  );

  return (
    <div>
      <SearchInput submit={onSubmit}/>
      {error && <Error message={error} />}
      {!error && loading && <Spin className="spin" size="large" />}
      {!error && !loading && page}
    </div>
  );
};

export default SearchPage;
