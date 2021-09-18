import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'antd';
import { debounce } from 'lodash';

function Search(props) {
  const { submit } = props;

  Search.propTypes = {
    submit: PropTypes.func.isRequired
  };

  const onLabelChange = (event) => {
    const { value } = event.target;
    if (value) submit(value);
  };

  return (
    <form
      onChange={debounce((event) => onLabelChange(event), 1000)}
      onSubmit={(event) => event.preventDefault()}>
      <Input placeholder="Type to search" />
    </form>
  );
}

export default Search;
