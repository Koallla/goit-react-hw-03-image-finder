import React from 'react';
import T from 'prop-types';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) => {
  return (
    images.length > 0 &&
    images.map(el => (
      <li key={el.id} className={styles.imageGalleryItem}>
        <img
          src={el.webformatURL}
          alt={el.tags}
          className={styles.imageGalleryItemImage}
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
