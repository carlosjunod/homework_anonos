import { useEffect, useState } from 'react';
import { setThemeLocal, getThemeLocal } from '../Utils/index';
import * as STYLE_CONSTATNTS from '../constants/styling';
import * as defaultTheme from '../themes/schema.json';

export const useTheme = () => {
  const avialableThemes = defaultTheme.data;
  const themes =
    getThemeLocal(STYLE_CONSTATNTS.LOCAL_THEMES) || avialableThemes[STYLE_CONSTATNTS.THEME_NAKED];
  const [theme, setTheme] = useState(themes);
  const [themeFromLocal, setThemeFromLocal] = useState(STYLE_CONSTATNTS.THEME_NAKED);

  const setThemeName = (themeName) => {
    setThemeFromLocal(themeName);
    setThemeLocal(STYLE_CONSTATNTS.LOCAL_THEMES, avialableThemes[themeName]);
    setTheme(avialableThemes[themeName]);
  };

  const pickTheme = (themeName) => {
    return avialableThemes[themeName];
  };

  useEffect(() => {
    setThemeFromLocal(getThemeLocal(STYLE_CONSTATNTS.LOCAL_THEMES)?.name);
  });

  return { theme, themeFromLocal, setThemeName, pickTheme };
};
