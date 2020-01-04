import React from 'react';
import T from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ images, isOpenModal }) => {
  return (
    <ul className={styles.imageGallery}>
      <ImageGalleryItem images={images} openModal={isOpenModal} />
    </ul>
  );
};

ImageGallery.defaultProps = {
  images: [],
};

ImageGallery.propTypes = {
  images: T.arrayOf(T.shape({})),
  isOpenModal: T.func.isRequired,
};

export default ImageGallery;
