import React, { Component } from 'react';
import axios from 'axios';
import styles from './app.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

const KEY = '14352220-777927f32e4bda0aacdcec250';

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    searchQuery: '',
    pageNumber: 1,
    isModalOpen: false,
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
    try {
      this.setState({ isLoading: true });
      const { searchQuery, pageNumber } = this.state;
      await axios
        .get(
          `https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&page=${pageNumber}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(res =>
          this.setState(prevState => ({
            images: [...prevState.images, ...res.data.hits],
          })),
        );
    } catch (err) {
      throw err;
    }
    this.setState({ isLoading: false });
    this.scrolling();
  };

  onSubmitSearchBar = value => {
    this.setState({ searchQuery: value });
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
    this.setState({ isModalOpen: true });
    this.modalWithImg(e);
  };

  modalWithImg = event => {
    const srcimg = event.target.srcset;
    console.log(srcimg);
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { images, isLoading, isModalOpen } = this.state;
    return (
      <div className={styles.container}>
        <SearchBar onSubmit={this.onSubmitSearchBar} />

        <ImageGallery images={images} isOpenModal={this.openModal} />

        {images.length !== 0 && <Button loadNextPage={this.onLoadNextPage} />}
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal onClose={this.closeModal} onOpen={this.modalWithImg} />
        )}
      </div>
    );
  }
}
