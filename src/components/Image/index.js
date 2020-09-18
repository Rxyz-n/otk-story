import React, { useState, useEffect, useRef } from 'react';

import { ImageWrap } from './Styles';

import ImageLoading from './ImageLoading';
import ImageError from './ImageError';

function Image({ src, alt, onImageClick, ...props }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = onImageLoad;
    img.onerror = onImageError;
    // eslint-disable-next-line
  }, [src]);

  const onImageLoad = () => {
    if (imageRef && imageRef.current) {
      imageRef.current.src = src;
      setError(false);
      setLoading(false);
    }
  };

  const onImageError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <ImageWrap className={!loading && !error ? 'loaded' : ''}>
      {loading && <ImageLoading />}
      {error && <ImageError />}
      {!error && (
        <img
          {...props}
          alt={alt}
          ref={imageRef}
          onClick={!loading ? onImageClick : undefined}
          style={{
            cursor: onImageClick && !loading && !error ? 'pointer' : 'auto'
          }}
        />
      )}
    </ImageWrap>
  );
}

export default Image;
