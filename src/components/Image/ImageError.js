import React from 'react';
import { WarningOutlined } from '@ant-design/icons';

import { ImageErrorMessage } from './Styles';

function ImageError() {
  return (
    <ImageErrorMessage>
      <WarningOutlined />
      <span>Failed to load image</span>
    </ImageErrorMessage>
  );
}

export default ImageError;
