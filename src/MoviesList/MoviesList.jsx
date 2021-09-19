import React from 'react';
import PropTypes from 'prop-types';

import MoviesItem from '../MoviesItem/MoviesItem';

import './MoviesList.css';

function MoviesList(props) {
  const { movieList, rateMovie } = props;

  MoviesList.propTypes = {
    movieList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        release_date: PropTypes.string,
        poster_path: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
        genre_ids: PropTypes.arrayOf(PropTypes.number),
      })
    ).isRequired,
    rateMovie: PropTypes.func.isRequired,
  };

  return (
    <div className="movieslist">
      {movieList.map((movie) => (
        <MoviesItem key={movie.id} movie={movie} rateMovie={rateMovie} />
      ))}
    </div>
  );
}

export default MoviesList;
