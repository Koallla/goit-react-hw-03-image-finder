import React, { Component } from 'react';
import axios from 'axios';
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

// const KEY = '14352220-777927f32e4bda0aacdcec250';

export default class App extends Component {
  state = {
    images: [],
    // isLoading: false,
    searchQuery: '',
    // pageNumber: 1,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.getImages();
    }
  }

  getImages = async () => {
    // const { searchQuery } = this.state;
    await axios
      .get(
        `https://pixabay.com/api/?key=14352220-777927f32e4bda0aacdcec250&q=yellow+flowers&image_type=photo&pretty=true`,
      )
      .then(res => this.setState({ images: res.data.hits }));
  };

  onSubmitSearchBar = value => {
    this.setState({ searchQuery: value });
  };

  render() {
    const { images } = this.state;
    return (
      <div className={styles.container}>
        <SearchBar onSubmit={this.onSubmitSearchBar} />
        <ImageGallery images={images} />
      </div>
    );
  }
}
