import React from 'react';
import { Link, withRouter } from "react-router-dom";

import PropTypes from 'prop-types';

import './Header.css';

function Header({ location }) {
  Header.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string}).isRequired
  };

  const className = {};
  className[location.pathname.slice(1)] = 'chosen';

  return (
    <div className="header">
      <div className={className.search}>
        <Link to='/search'>
          Search
        </Link>
      </div>
      <div className={className.rated}>
        <Link to='/rated'>
          Rated
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Header);