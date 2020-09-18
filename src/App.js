import React from 'react';
import { BackTop } from 'antd';

import { StyledLayout } from 'components/Layout/Styles';
import { Header, Content, Footer } from 'components/Layout';
import DatePicker from 'components/DatePicker';
import Stories from 'components/Stories';
import Modal from 'components/Modal';

function App() {
  return (
    <StyledLayout>
      <Header />
      <Content>
        <DatePicker />
        <Stories />
      </Content>
      <BackTop />
      <Footer />
      <Modal />
    </StyledLayout>
  );
}

export default App;
