import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .logo {
    width: 170px;

    img {
      width: 100%;
      margin-bottom: 4px;
    }
  }

  ul {
    display: flex;
    justify-content: flex-end;
    border-bottom: none;
    background: transparent;
  }

  .menu-icon {
    margin-top: 8px !important;

    span {
      font-size: 1.5rem;
    }
  }

  .ant-menu-item-active,
  .ant-menu-item-selected,
  .ant-menu-submenu,
  .ant-menu-item {
    border-bottom: none !important;
    background: transparent;
  }
`;

export const StyledContent = styled(Layout.Content)`
  padding: 0 50px;
  margin-top: 50px;
  flex-grow: 1;
`;

export const StyledFooter = styled(Layout.Footer)``;
