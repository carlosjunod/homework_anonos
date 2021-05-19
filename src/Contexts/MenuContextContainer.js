import React from 'react';
import { MenuProvider } from './menuContext';
import data from '../MockData';

const MenuContextContainer = ({ children }) => {
  const menuMockData = {
    options: data,
    term: '',
    display: [],
  };

  return <MenuProvider value={menuMockData}>{children}</MenuProvider>;
};

export default MenuContextContainer;
