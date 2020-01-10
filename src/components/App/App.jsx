import React, { Component } from 'react';
import PNotify from 'pnotify/dist/es/PNotify';
import styles from './app.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import API from '../API/API';
import 'pnotify/dist/PNotifyBrightTheme.css';

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    searchQuery: '',
    pageNumber: 1,
    isModalOpen: false,
    imgModal: {
      img: '',
      alt: '',
    },
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;

    if (
      prevState.searchQuery !== searchQuery ||
      prevState.pageNumber !== pageNumber
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    this.setState({ isLoading: true });
    const { searchQuery, pageNumber } = this.state;
    try {
      await API(searchQuery, pageNumber).then(res =>
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
        })),
      );
    } catch (error) {
      PNotify.error('Loading error!');
    }

    this.setState({ isLoading: false });
    this.scrolling();
  };

  onSubmitSearchBar = value => {
    this.setState({ searchQuery: value, pageNumber: 1, images: [] });
  };

  onLoadNextPage = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  scrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  openModal = e => {
    this.setState({
      imgModal: {
        img: e.target.parentNode.attributes[0].value,
        alt: e.target.alt,
      },
    });
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { images, isLoading, isModalOpen, imgModal } = this.state;

    return (
      <div className={styles.container}>
        {!isModalOpen && <SearchBar onSubmit={this.onSubmitSearchBar} />}
        <ImageGallery images={images} isOpenModal={this.openModal} />
        {images.length !== 0 && <Button loadNextPage={this.onLoadNextPage} />}
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal onClose={this.closeModal} srcForModal={imgModal} />
        )}
      </div>
    );
  }
}
