import React, { createContext, useState, useEffect, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import {
  createLinkEl,
  insertStyle,
  themeConfig,
  getThemeKeys
} from 'utils/theme';

const ThemeContext = createContext();
const CURRENT_THEME_ID = 'current-theme';

function ThemeProvider({ children }) {
  const [status, setStatus] = useState('loading');
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    Object.keys(themeConfig.themeMap).forEach(theme => {
      const themePrefetch = createLinkEl({
        rel: 'prefetch',
        as: 'style',
        href: themeConfig.themeMap[theme],
        id: `${theme}-theme-prefetch`
      });
      insertStyle(themePrefetch);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    switchTheme(themeConfig.default);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (status === 'loading') {
      document.body.classList.remove('theme-loaded');
      document.body.classList.add('theme-loading');
    } else {
      document.body.classList.remove('theme-loading');
      document.body.classList.add('theme-loaded');
    }
  }, [status]);

  const switchTheme = theme => {
    if (theme === currentTheme) return;

    const prevTheme = document.getElementById(CURRENT_THEME_ID);
    if (prevTheme) prevTheme.remove();

    setStatus('loading');
    const linkEl = createLinkEl({
      type: 'text/css',
      rel: 'stylesheet',
      id: CURRENT_THEME_ID,
      href: themeConfig.themeMap[theme],
      onload: () => setStatus('loaded')
    });

    localStorage.setItem('APP_THEME', theme);
    insertStyle(linkEl);
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        status,
        themes: getThemeKeys(),
        currentTheme,
        switchTheme
      }}
    >
      <StyledThemeProvider theme={{ mode: currentTheme }}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default ThemeProvider;
