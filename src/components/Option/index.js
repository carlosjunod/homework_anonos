import React from 'react';

const Option = ({ text, url }) => {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
};

export default Option;
