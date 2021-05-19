// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './normalize.css';
import 'milligram/dist/milligram.css';
import MenuContextContainer from './src/Contexts/MenuContextContainer';

ReactDOM.render(
  <MenuContextContainer>
    <App />
  </MenuContextContainer>,
  document.getElementById('app')
);
