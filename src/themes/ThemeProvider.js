import React, { useState, useEffect } from 'react';
import { setThemeLocal } from '../Utils';
import * as STYLE_CONSTATNTS from '../constants/styling';
import { useTheme } from '../hooks/useTheme';

import { ThemeProvider } from 'styled-components';

const MenuThemeProvider = (props) => {
  const { theme } = useTheme();
  console.log('🥑 🥑 🥑 🥑 props MenuThemeProvider', props);
  console.log('🥑 🥑 🥑 🥑 props.children MenuThemeProvider', props.children);
  const [activeTheme, setActiveTheme] = useState(theme);

  console.log('theme 🥑🥑🥑🥑🥑🥑🥑🥑🥑🥑', theme);
  useEffect(() => {
    console.log('RENDEREING THEME PROVIDER 🤓');
    setActiveTheme(theme);
  }, [activeTheme]);

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MenuThemeProvider;
