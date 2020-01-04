import React, { Component } from 'react';
import T from 'prop-types';
import styles from './modal.module.css';

class Modal extends Component {
  static propTypes = {
    onClose: T.func.isRequired,
    onOpen: T.func.isRequired,
  };

  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEscape);
  }

  // openModal = () => {
  //   this.setState({ isModalOpen: true });
  // };

  // closeModal = () => {
  //   this.setState({ isModalOpen: false });
  // };

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

  // openWithImg = e => {
  //   const { onOpen } = this.props;
  //   onOpen(e.target);
  // };

  render() {
    const { onOpen } = this.props;
    console.log(onOpen);
    return (
      <div
        onClick={this.handleCloseModal}
        className={styles.backdrop}
        role="presentation"
      >
        <div className={styles.modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
