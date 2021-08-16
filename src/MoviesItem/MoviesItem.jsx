import React, { useContext, useState } from "react";
import PropTypes from 'prop-types';

import { Rate, Spin } from 'antd';
import { format } from 'date-fns';

import './MoviesItem.css';
import GenresContext from "../App/GenresContext";
import voteColor from "./voteColor";

function MoviesItem(props) {
  const { movie, rateMovie, active } = props;

  const [loading, setLoading] = useState(true);

  const {
    id,
    title,
    release_date: releaseDate,
    poster_path: posterPath,
    overview,
    rating,
    vote_average: voteAverage,
    genre_ids: genre,
  } = movie;

  const poster = posterPath ? `https://image.tmdb.org/t/p/w200${posterPath}`
    : "https://apps.alldbx.de/images/default_person.1d043.png";
  const date = releaseDate ? format(new Date(releaseDate), 'MMMM dd, yyyy') : 'NA';

  const spin = loading ? <Spin /> : null;

  MoviesItem.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
      overview: PropTypes.string,
      rating: PropTypes.number,
      vote_average: PropTypes.number,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    rateMovie: PropTypes.func.isRequired,
    active: PropTypes.string.isRequired,
  };

  const allGenres = useContext(GenresContext);

  const genresToShow = genre.map((item) => (
    <span className="genre" key={item}>
      {allGenres.find((elem) => elem.id === item).name}
    </span>
  ));

  const cardColor = voteColor(voteAverage);

  const ratingRender = (active === "Rated") ? rating : voteAverage;

  return (
    <div className="card">
      <div className="moviePoster">
        {spin}
        <img src={poster} alt="poster" onLoad={() => setLoading(false)} />
      </div>
      <div className="movieInfo">
        <div className="movieTitle">
          <span>{title}</span>
          <div className="movieRating" style={{backgroundColor: `${cardColor}`}}>
            <p>{ratingRender}</p>
          </div>
        </div>
        <div className="date">
          <span>{date}</span>
        </div>
         <div className="movieGenres">{genresToShow}</div>
        <div className="movieSinops">
          <span>{overview}</span>
        </div>
        <div className="stars">
          <Rate count={10} allowHalf defaultValue={ratingRender} onChange={(value) => rateMovie(value, id)}/>
        </div>
      </div>
    </div>
  );
}

export default MoviesItem;
