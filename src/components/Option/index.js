import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ text, url }) => {
  return <a href={url}>{text}</a>;
};

Option.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Option;
