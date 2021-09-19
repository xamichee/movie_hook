import React, { useEffect, useState } from "react";
import { Pagination, Spin } from "antd";
import Error from "../Error/Error";
import MoviesList from "../MoviesList/MoviesList";

import MovieApi from "../api/MovieApi";

const RatedPage = () => {
  const { rateMovie, setPage } = new MovieApi();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [ratedMoviesFull, setRatedMoviesFull] = useState([]);
  const [totalRated, setTotalRated] = useState(null);
  const [ratedPage, setRatedPage] = useState(1);
  const [activeRatedPage, setActiveRatedPage] = useState(1);

  useEffect(() => {
    const { getRated } = new MovieApi();
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
        setError("Не удалось загрузить фильмы.");
      });
  }, [ratedPage]);


  const pageClick = (num) => setPage(num, setActiveRatedPage, setRatedPage, activeRatedPage);

  const list = activeRatedPage % 2 === 0 ? [...ratedMoviesFull.slice(10)] : [...ratedMoviesFull.slice(0, 10)];

  const paginator = ratedMoviesFull.length ? (
    <Pagination current={activeRatedPage} total={totalRated} onChange={pageClick} showSizeChanger={false} />
  ) : null;

  const page = (
    <>
      <MoviesList movieList={list} rateMovie={rateMovie} />
      <div className="paginator">{paginator}</div>
    </>
  );

  return (
    <div>
      {error && <Error message={error} />}
      {!error && loading && <Spin className="spin" size="large" />}
      {!error && !loading && page}
    </div>
  );
};

export default RatedPage;
