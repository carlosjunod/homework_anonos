import { useEffect, useState } from 'react';
import { setThemeLocal, getThemeLocal } from '../Utils/index';
import * as STYLE_CONSTATNTS from '../constants/styling';
import * as defaultTheme from '../themes/schema.json';

export const useTheme = () => {
  console.log('DEFAULT THEME', defaultTheme.data.light);
  const themes = getThemeLocal(STYLE_CONSTATNTS.LOCAL_THEMES) || defaultTheme.data.anonos;
  console.log('themes', themes);
  const [theme, setTheme] = useState(themes);
  const [themeFromLocal, setThemeFromLocal] = useState(false);

  const setMode = (mode) => {
    setThemeLocal(STYLE_CONSTATNTS.LOCAL_THEMES, mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getThemeLocal(STYLE_CONSTATNTS.LOCAL_THEMES);
    console.log('USE EFFECT - ThemeProvider', localTheme);
    localTheme ? setTheme(localTheme) : setTheme(themes);
    setThemeFromLocal(true);
  }, []);

  return { theme, themeFromLocal, setMode };
};
