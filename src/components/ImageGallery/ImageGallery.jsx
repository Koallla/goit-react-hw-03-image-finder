import React from 'react';
import T from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} />
    </ul>
  );
};

ImageGallery.defaultProps = {
  images: [],
};

ImageGallery.propTypes = {
  images: T.arrayOf(T.shape({})),
};

export default ImageGallery;
