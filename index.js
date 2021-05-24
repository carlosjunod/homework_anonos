// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './normalize.css';
import { MenuProvider } from './src/contexts/menuContext';
import ThemeProvder from './src/themes/ThemeProvider';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: ${({ theme }) => theme.font};
`;

ReactDOM.render(
  <MenuProvider>
    <ThemeProvder>
      <Container>
        <App />
      </Container>
    </ThemeProvder>
  </MenuProvider>,
  document.getElementById('app')
);
