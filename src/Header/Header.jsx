import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

export default function Header({ tabClick, active }) {
  Header.propTypes = {
    tabClick: PropTypes.func.isRequired,
    active: PropTypes.string.isRequired,
  };

  const classSearch = active === 'Search' ? 'tabButton chosen' : 'tabButton';
  const classRated = active === 'Rated' ? 'tabButton chosen' : 'tabButton';

  return (
    <div className="header">
      <div>
        <button className={classSearch} type="button" onClick={tabClick} name="Search">
          Search
        </button>
      </div>
      <div>
        <button className={classRated} type="button" onClick={tabClick} name="Rated">
          Rated
        </button>
      </div>
    </div>
  );
}
