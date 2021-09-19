import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MovieApi from '../api/MovieApi';

export const GenresContext = React.createContext([]);

const ProvideContext = ({ children }) => {
  const [genres, setGenres] = useState(null);
  const { getGenres } = new MovieApi();

  if (!genres) getGenres().then((genresList) => setGenres(genresList));

  return <GenresContext.Provider value={genres}>{children}</GenresContext.Provider>;
};

export default ProvideContext;

ProvideContext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
