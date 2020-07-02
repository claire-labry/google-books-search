import React, { Component } from 'react';
import API from '../../utils/API';

class Results extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.log(err));
  }

  handleSave = (book) => {
    if (this.state.savedBooks.map((book) => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then((deletedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.filter(
              (book) => book._id !== deletedBook._id
            ),
          })
        )
        .catch((err) => console.log(err));
    } else {
      API.saveBook(book)
        .then((savedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.concat([savedBook]),
          })
        )
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div>
        {this.props.books.length ? (
          <h1>No Results</h1>
        ) : (
          <div>
            {this.props.books.map((result) => (
              <div className='card'>
                <div className='card-image'>
                  <figure className='image is-4by3'>
                    <img alt={result.title} src={result.image} />
                  </figure>
                </div>
                <div className='card-content'>
                  <h5>
                    {result.title} by {result.author}
                  </h5>
                  <p>{result.description}</p>
                  <br />
                  <a href={result.link} target='blank'>
                    View
                  </a>
                  <button
                    onClick={() => this.handleSave(result)}
                    className='button'
                  >
                    {this.state.savedBooks
                      .map((book) => book._id)
                      .includes(result._id)
                      ? 'Unsave'
                      : 'Save'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Results;
