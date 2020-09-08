import React from 'react';

import { StyledLayout } from 'components/Layout/Styles';
import { Header, Content, Footer } from 'components/Layout';
import DatePicker from 'components/DatePicker';
import Stories from 'components/Stories';

function App() {
  return (
    <StyledLayout>
      <Header />
      <Content>
        <DatePicker />
        <Stories />
      </Content>
      <Footer>xxx</Footer>
    </StyledLayout>
  );
}

export default App;
