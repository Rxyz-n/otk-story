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
    width: 150px;

    img {
      width: 100%;
      margin-bottom: 4px;
    }
  }
`;

export const StyledContent = styled(Layout.Content)`
  max-width: 1920px;
  width:100%;
  padding: 0 50px;
  margin: 50px auto 0 auto;
  flex-grow: 1;
`;

export const StyledFooter = styled(Layout.Footer)`
  padding: 1rem 50px;
  font-size: 1rem;
  letter-spacing: 0.5px;

  a:hover {
    text-decoration: underline;
  }
`;
