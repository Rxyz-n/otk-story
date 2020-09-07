import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from 'context/ThemeContext';
import GlobalStyle from 'styles/Global';
import App from 'App';

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
