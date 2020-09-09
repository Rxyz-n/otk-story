import React from 'react';
import moment from 'moment';
import {
  CaretRightOutlined,
  FileImageOutlined,
  DownloadOutlined
} from '@ant-design/icons';

import {
  StoryCollapse,
  StoryPanelHeader,
  StoryCard,
  EmptyMessage
} from './Styles';

import { DISPLAY_DATE_FORMAT } from 'utils/dateTime';
import { useStoriesContext } from 'context/StoriesContext';
import Image from 'components/Image';

function Story({ date, story }) {
  const { dispatch } = useStoriesContext();

  const handleOpenImageDetail = id => () => {
    window.open(`https://otakusan.net/Cosplay/PictureDetail/${id}`, '_blank');
  };

  const handleDownloadImage = url => () => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.click();
  };

  const handleImageClick = id => () => {
    dispatch({
      type: 'ADD_STORY',
      payload: { id, date }
    });
  };

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
        {!!story.length ? (
          story.map(({ Id, ThumbUrl, Name, Url }) => (
            <StoryCard
              key={Id}
              hoverable
              cover={
                <Image
                  src={ThumbUrl}
                  alt={Name}
                  onImageClick={handleImageClick(Id)}
                />
              }
              actions={[
                <FileImageOutlined
                  key="file"
                  onClick={handleOpenImageDetail(Id)}
                />,
                <DownloadOutlined
                  key="download"
                  onClick={handleDownloadImage(Url)}
                />
              ]}
            />
          ))
        ) : (
          <EmptyMessage>No images found</EmptyMessage>
        )}
      </StoryCollapse.Panel>
    </StoryCollapse>
  );
}

export default Story;
