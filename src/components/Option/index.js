import React from 'react';

const Option = ({ text, url }) => {
  return <a href={url}>{text}</a>;
};

export default Option;
