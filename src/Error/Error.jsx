import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

const Error = ({ message }) => {
  Error.propTypes = {
    message: PropTypes.string,
  };

  Error.defaultProps = {
    message: 'Error!',
  };

  return <Alert className="alert" message="Error Text" description={message} type="error" />;
};

export default Error;
