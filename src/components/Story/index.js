import React from 'react';
import {
  CaretRightOutlined,
  FileImageOutlined,
  DownloadOutlined
} from '@ant-design/icons';

import {
  StoryWrap,
  StoryCollapse,
  StoryPanelHeader,
  StoryCard
} from './Styles';

function Story() {
  return (
    <StoryWrap>
      <StoryCollapse
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        <StoryCollapse.Panel
          header={<StoryPanelHeader>08-09-2020</StoryPanelHeader>}
          key="1"
        >
          <StoryCard
            hoverable
            cover={
              <img
                src="https://image.myrockmanga.com/extendContent/Cosplay/d895b464-53bb-4545-b373-9facca5ddec9_thumb.jpg"
                alt="card"
              />
            }
            actions={[
              <FileImageOutlined key="setting" />,
              <DownloadOutlined key="edit" />
            ]}
          />
        </StoryCollapse.Panel>
      </StoryCollapse>
    </StoryWrap>
  );
}

export default Story;
