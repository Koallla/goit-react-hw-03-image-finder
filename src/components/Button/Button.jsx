import React from 'react';
import T from 'prop-types';
import styles from './button.module.css';

const Button = ({ loadNextPage }) => (
  <button onClick={loadNextPage} className={styles.button} type="button">
    Load more
  </button>
);

Button.propTypes = {
  loadNextPage: T.func.isRequired,
};

export default Button;
