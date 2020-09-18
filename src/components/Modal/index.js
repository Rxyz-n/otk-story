import React, { useEffect } from 'react';
import { Modal } from 'antd';
import {
  CloseOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';

import { ModalIcon } from './Styles';

import { useStoriesContext } from 'context/StoriesContext';
import Image from 'components/Image';

function StoryModal() {
  const { state, dispatch } = useStoriesContext();

  const { story, currentImage } = state;
  const { Name, Url, isFirstImage, isLastImage, idx } = currentImage;

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, [story, Url]);

  const handleCloseModal = () => {
    dispatch({ type: 'REMOVE_STORY' });
  };

  const handleChangeImage = pos => () => {
    dispatch({ type: 'CHANGE_CURRENT_IMAGE', payload: pos });
  };

  const handleKeyDown = ({ code }) => {
    if (!story.length && !Url) return;

    if (code === 'ArrowLeft' && !isFirstImage) {
      handleChangeImage(-1)();
    }

    if (code === 'ArrowRight' && !isLastImage) {
      handleChangeImage(1)();
    }
  };

  return (
    <React.Fragment>
      {!!story.length && (
        <React.Fragment>
          <ModalIcon className="close" onClick={handleCloseModal}>
            <CloseOutlined />
          </ModalIcon>
          {!isFirstImage && (
            <ModalIcon className="prev" onClick={handleChangeImage(-1)}>
              <ArrowLeftOutlined />
            </ModalIcon>
          )}
          {!isLastImage && (
            <ModalIcon className="next" onClick={handleChangeImage(1)}>
              <ArrowRightOutlined />
            </ModalIcon>
          )}
        </React.Fragment>
      )}
      <Modal
        closable={false}
        visible={!!story.length}
        onCancel={handleCloseModal}
        centered
        destroyOnClose
        footer={null}
        width={700}
      >
        {!!Url && <Image key={idx} src={Url} alt={Name} />}
      </Modal>
    </React.Fragment>
  );
}

export default StoryModal;
