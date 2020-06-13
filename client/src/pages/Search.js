import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import API from '../utils/API';

class Search extends Component {
  state = {
    query: '',
    results: [],
    search: false,
  };

  // search from google books API
  searchBooks = (query) => {
    API.findBooks(query).then((response) => {
      const results = [];

      if (response.data.totalBooks !== 0) {
        for (let i = 0; i < response.data.items.length; i++) {
          let resultItem = {};
        }
      }
    });
  };
}
