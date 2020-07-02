import axios from 'axios';

export default {
  // api to search books from google books
  searchBook: (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  getBooks: () => {
    return axios.get('/api/books');
  },

  saveBook: (data) => {
    return axios.post('/api/books', data);
  },

  deleteBook: (id) => {
    return axios.delete(`/api/books/${id}`);
  },

  getBook: (id) => {
    return axios.put(`/api/books/${id}`);
  },
};
