import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

export default function Header({ tabClick, active }) {
  Header.propTypes = {
    tabClick: PropTypes.func.isRequired,
    active: PropTypes.string.isRequired,
  };

  const className = {};
  className[active] = 'chosen';

  return (
    <div className="header">
      <div>
        <button className={className.Search} type="button" onClick={tabClick} name="Search">
          Search
        </button>
      </div>
      <div>
        <button className={className.Rated} type="button" onClick={tabClick} name="Rated">
          Rated
        </button>
      </div>
    </div>
  );
}
