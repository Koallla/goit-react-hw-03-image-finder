import React from 'react';
import T from 'prop-types';

const ImageGalleryItem = ({ images }) => {
  return (
    images.length > 0 &&
    images.map(el => (
      <li key={el.id} className="ImageGalleryItem">
        <img
          src={el.webformatURL}
          alt={el.tags}
          className="ImageGalleryItem-image"
        />
      </li>
    ))
  );
};

ImageGalleryItem.defaultProps = {
  images: [],
};

ImageGalleryItem.propTypes = {
  images: T.arrayOf(T.shape({})),
};

export default ImageGalleryItem;
