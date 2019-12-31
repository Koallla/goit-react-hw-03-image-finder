import React, { Component } from 'react';
import axios from 'axios';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import PNotify from 'pnotify/dist/es/PNotify';
import styles from './app.module.css';
// import Button from '../Button/Button';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Loader from '../Loader/Loader';
// import Modal from '../Modal/Modal';
// import SearchBar from '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

const KEY = '14352220-777927f32e4bda0aacdcec250';

export default class App extends Component {
  state = {
    images: [],
    // isLoading: false,
    searchQuery: '',
    pageNumber: 1,
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

    this.scrolling();
  };

  onSubmitSearchBar = value => {
    this.setState({ searchQuery: value });
  };

  onLoadNextPage = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
    // await this.getImages();
    // setTimeout(this.scrolling, 1000);
    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
  };

  scrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images } = this.state;
    return (
      <div className={styles.container}>
        <SearchBar onSubmit={this.onSubmitSearchBar} />
        <ImageGallery images={images} />
        {images.length !== 0 && <Button loadNextPage={this.onLoadNextPage} />}
      </div>
    );
  }
}
