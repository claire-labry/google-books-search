import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import API from '../utils/API';

class Saved extends Component {
  state = {
    results: [],
  };

  // display saved books
  componentWillMount() {
    this.getBooks();
  }

  getBooks = () => {
    API.getBooks().then((response) => {
      this.setState({ results: response.data });
    });
  };

  // delete books
  deleteBook = (id) => {
    API.deleteBook(id).then(this.getBooks());
  };

  // change status of books
  changeStatus = (id, status) => {
    API.updateBook(id, { status: status }).then(this.getBooks());
  };

  // checks if books are saved, if not, notification will pop up
  checkSaved() {
    if (this.state.saved.length === 0 || this.state.results === undefined) {
      return (
        <Wrapper>
          <h2>'No books are saved. Please select a book to save!</h2>
        </Wrapper>
      );
    }
  }
}

export default Saved;
