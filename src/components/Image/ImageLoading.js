import React from 'react';

import { ImageSkeleton } from './Styles';

function ImageLoading() {
  return (
    <ImageSkeleton
      avatar={{ shape: 'square' }}
      active
      loading
      paragraph={false}
      title={false}
    />
  );
}

export default ImageLoading;
