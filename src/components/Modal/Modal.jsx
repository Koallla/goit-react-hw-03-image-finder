import React, { Component } from 'react';
import T from 'prop-types';
import styles from './modal.module.css';

class Modal extends Component {
  static propTypes = {
    onClose: T.func.isRequired,
    srcForModal: T.objectOf(T.string).isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEscape);
  }

  closeOnEscape = e => {
    if (e.code !== 'Escape') {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  handleCloseModal = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { srcForModal } = this.props;

    return (
      <div
        onClick={this.handleCloseModal}
        className={styles.backdrop}
        role="presentation"
      >
        <div className={styles.modal}>
          <img src={srcForModal.img} alt={srcForModal.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
