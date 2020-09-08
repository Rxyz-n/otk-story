import React from 'react';

import { StyledLayout } from 'components/Layout/Styles';
import { Header, Content, Footer } from 'components/Layout';
import RangePicker from 'components/RangePicker';
import Story from 'components/Story';

function App() {
  return (
    <StyledLayout>
      <Header />
      <Content>
        <RangePicker />
        <Story />
      </Content>
      <Footer>xxx</Footer>
    </StyledLayout>
  );
}

export default App;
