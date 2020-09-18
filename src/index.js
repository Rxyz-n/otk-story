import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import ThemeProvider from 'context/ThemeContext';
import StoriesProvider from 'context/StoriesContext';
import GlobalStyle from 'styles/Global';
import App from 'App';

ReactGA.initialize('UA-178421575-1');
ReactGA.pageview('/');

ReactDOM.render(
  <ThemeProvider>
    <StoriesProvider>
      <GlobalStyle />
      <App />
    </StoriesProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
