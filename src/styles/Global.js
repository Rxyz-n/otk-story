import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      font-family: 'IBM Plex Sans', sans-serif;
      background: ${theme.mode === 'dark' ? 'black' : '#eef0f1'};
      color: ${theme.mode === 'dark' ? 'white' : 'black'};
      transition: opacity 0.2s;

      &.theme-loading {
        display: none;
      }
      &.theme-loaded {
        display: block;
      }
    }
  `}
`;

export default GlobalStyle;
