import React from 'react';

import { StyledLayout } from 'components/Layout/Styles';
import { Header, Content, Footer } from 'components/Layout';

function App() {
  return (
    <StyledLayout>
      <Header />
      <Content>hi</Content>
      <Footer>xxx</Footer>
    </StyledLayout>
  );
}

export default App;
