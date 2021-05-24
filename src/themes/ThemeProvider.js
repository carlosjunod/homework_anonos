import React, { useState, useEffect } from 'react';
import { setThemeLocal } from '../Utils';
import * as STYLE_CONSTATNTS from '../constants/styling';
import { useTheme } from '../hooks/useTheme';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

const MenuThemeProvider = (props) => {
  const { theme, themeLoaded } = useTheme();
  const [slectedStyle, setSlectedStyle] = useState(theme);

  useEffect(() => {
    setThemeLocal(STYLE_CONSTATNTS.LOCAL_THEMES, theme);
    setSlectedStyle(theme);
  }, [themeLoaded]);

  return (
    <ThemeProvider theme={slectedStyle}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};

export default MenuThemeProvider;
