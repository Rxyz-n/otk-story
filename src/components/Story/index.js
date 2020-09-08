import React from 'react';
import moment from 'moment';
import {
  CaretRightOutlined,
  FileImageOutlined,
  DownloadOutlined
} from '@ant-design/icons';

import { StoryCollapse, StoryPanelHeader, StoryCard } from './Styles';

import { DISPLAY_DATE_FORMAT } from 'utils/dateTime';

function Story({ date, story }) {
  return (
    <StoryCollapse
      defaultActiveKey={[date]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    >
      <StoryCollapse.Panel
        header={
          <StoryPanelHeader>
            {moment(date).format(DISPLAY_DATE_FORMAT)}
          </StoryPanelHeader>
        }
        key={date}
      >
        {story.map(({ Id, ThumbUrl, Name }) => (
          <StoryCard
            key={Id}
            hoverable
            cover={<img src={ThumbUrl} alt={Name} />}
            actions={[
              <FileImageOutlined key="setting" />,
              <DownloadOutlined key="edit" />
            ]}
          />
        ))}
      </StoryCollapse.Panel>
    </StoryCollapse>
  );
}

export default Story;
