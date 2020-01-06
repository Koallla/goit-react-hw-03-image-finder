import React from 'react';
import T from 'prop-types';
import ReactImageAppear from 'react-image-appear';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) => {
  return (
    images.length > 0 &&
    images.map(el => (
      <li
        src={el.largeImageURL}
        key={el.id}
        className={styles.imageGalleryItem}
      >
        <ReactImageAppear
          src={el.webformatURL}
          animation="bounceIn"
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
