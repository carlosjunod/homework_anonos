// index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import ThemeSelector from './src/components/ThemeSelector';
import './normalize.css';
import { MenuProvider } from './src/contexts/menuContext';
import MenuThemeProvider from './src/themes/ThemeProvider';
import styled from 'styled-components';
import { GlobalStyles } from './src/themes/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './src/hooks/useTheme';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font};
`;

const AppWrapper = () => {
  const { theme, setThemeName, pickTheme, themeFromLocal } = useTheme();
  const [activeTheme, setActiveTheme] = useState(theme);

  const setThemeHandler = (themeName) => {
    setActiveTheme(pickTheme(themeName));
    setThemeName(themeName);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <MenuProvider>
        <Container>
          <GlobalStyles />
          <ThemeSelector setActiveTheme={setThemeHandler} activeTheme={themeFromLocal} />
          <App />
        </Container>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default AppWrapper;

ReactDOM.render(<AppWrapper />, document.getElementById('app'));
