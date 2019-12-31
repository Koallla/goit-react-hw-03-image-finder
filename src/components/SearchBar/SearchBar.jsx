import React, { Component } from 'react';
import T from 'prop-types';
import styles from './searchBar.module.css';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.props.onSubmit(inputValue);
    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm}>
          <button
            onClick={this.handleSubmit}
            type="submit"
            className={styles.searchFormButton}
          >
            <span className={styles.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.searchFormInput}
            onChange={this.handleChange}
            type="text"
            value={inputValue}
            autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
