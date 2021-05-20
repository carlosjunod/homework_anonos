// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './normalize.css';
import 'milligram/dist/milligram.css';
import { MenuProvider } from './src/Contexts/menuContext';

ReactDOM.render(
  <MenuProvider>
    <App />
  </MenuProvider>,
  document.getElementById('app')
);
