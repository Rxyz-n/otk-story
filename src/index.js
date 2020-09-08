import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from 'context/ThemeContext';
import StoriesProvider from 'context/StoriesContext';
import GlobalStyle from 'styles/Global';
import App from 'App';

ReactDOM.render(
  <ThemeProvider>
    <StoriesProvider>
      <GlobalStyle />
      <App />
    </StoriesProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
