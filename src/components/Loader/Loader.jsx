import React from 'react';
import LoaderComponent from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderComponent type="ThreeDots" color="grey" height={100} width={200} />
    </div>
  );
};

export default Loader;
