import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      font-family: 'IBM Plex Sans', sans-serif;
      background: ${theme.mode === 'dark' ? '#18191a' : '#eef0f1'};
      color: ${theme.mode === 'dark' ? '#ffffff' : '#000000'};
      transition: opacity 0.2s;

      &.theme-loading {
        display: none;
      }
      &.theme-loaded {
        display: block;
      }
    }
  `}

  .ant-back-top {
    right: 30px;
    bottom: 30px;
  }

  .ant-back-top-icon {
    font-size: 20px;
  }

  .ant-modal-mask {
    background-color: rgba(0,0,0,.7);
  }

  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-body > div:not(.loaded) {
    height: 45rem;
  }

  ::-webkit-scrollbar {
    width: 11px;
    height: 10px;
    background: transparent;
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    height: 6px;
    border: 2px solid transparent;
    background-clip: padding-box;
    border-radius: 7px;
    background-color: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0,0,0,.2)'};
  }
`;

export default GlobalStyle;
