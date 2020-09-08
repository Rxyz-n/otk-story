import React from 'react';

import { SpinWrap, Spinner, SpinInner } from './Styles';

function Spin() {
  return (
    <SpinWrap>
      <Spinner>
        <SpinInner>
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="circle">&#9679;</div>
        </SpinInner>
      </Spinner>
    </SpinWrap>
  );
}

export default Spin;
