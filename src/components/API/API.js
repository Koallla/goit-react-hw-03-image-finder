import axios from 'axios';

const KEY = '14352220-777927f32e4bda0aacdcec250';

const API = (searchQuery, pageNumber) => {
  return axios.get(
    `https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&page=${pageNumber}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default API;
