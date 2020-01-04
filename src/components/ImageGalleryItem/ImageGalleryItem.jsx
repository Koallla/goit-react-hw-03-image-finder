import React from 'react';
import T from 'prop-types';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ images, openModal }) => {
  return (
    images.length > 0 &&
    images.map(el => (
      <li key={el.id} className={styles.imageGalleryItem}>
        <img
          src={el.webformatURL}
          srcSet={el.largeImageURL}
          alt={el.tags}
          onClick={openModal}
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
  openModal: T.func.isRequired,
};

export default ImageGalleryItem;
