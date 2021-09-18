import React, { useState } from "react";
import PropTypes from "prop-types";

import MovieApi from "../Api/MovieApi";

export const GenresContext = React.createContext([]);

const ProvideContext = ({ children }) => {
  ProvideContext.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
  };

  const [genres, setGenres] = useState(null);
  const { getGenres } = new MovieApi();

  if (!genres) getGenres().then(genresList => setGenres(genresList));
  console.log(genres);

  return (
    <GenresContext.Provider value={genres}>
      {children}
    </GenresContext.Provider>
  )
};

export default ProvideContext;

