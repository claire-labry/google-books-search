import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import FluidContainer from '../components/FluidContainer';
import Wrapper from '../components/Wrapper';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Results from '../components/Results';
import Dropdown from '../components/Dropdown';
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
          resultItem.title = response.data.items[i].volumeInfo.title;
          resultItem.author = response.data.items[i].volumeInfo.authors;
          resultItem.description =
            response.data.items[i].volumeInfo.description;
          resultItem.image =
            response.data.items[i].volumeInfo.imageLinks.thumbnail;
          resultItem.link =
            response.data.items[i].volumeInfo.canonicalVolumeLink;
          resultItem.date = response.data.items[i].volumeInfo.publishedDate;
          results.push(resultItem);
        }
      }

      this.setState({ results: results, search: true });
    });
  };

  handleInput = (event) => {
    let value = event.target.value;
    this.setState({ query: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchBooks(this.state.query);
    document.querySelector('.input').value = '';
  };

  saveBook = (data, status) => {
    let saveData = data;
    saveData.status = status;
    API.saveBook(saveData);
  };

  renderSectionTitle() {
    if (
      this.state.results !== undefined &&
      this.state.search &&
      this.state.results.length > 0
    ) {
      return (
        <SectionTitle>
          Displaying {this.state.results.length} Results
        </SectionTitle>
      );
    } else if (this.state.results.length === 0 && this.state.search) {
      return <SectionTitle>No Results Found</SectionTitle>;
    } else {
      return false;
    }
  }

  renderResults() {
    if (this.state.results !== undefined) {
      return this.state.results.map((results) => (
        <Card>
          <Dropdown>
            <div className='dropdown-menu'>
              <div
                className='dropdown-item'
                onClick={() => this.saveBook(results, 'Reading')}
              >
                Reading
              </div>
              <div
                className='dropdown-item'
                onClick={() => this.saveBook(results, 'Reading List')}
              >
                Add to Reading List
              </div>
              <div
                className='dropdown-item'
                onClick={() => this.saveBook(results, 'Completed')}
              >
                Completed
              </div>
            </div>
          </Dropdown>
          <Results bookData={results} />
        </Card>
      ));
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <FluidContainer>
          <h1 className='heading'>
            Search for your next book, right at your fingertips!
          </h1>
          <h3 className='heading'>
            just type in a book that you would like read + Google Books will
            find your book!
          </h3>
        </FluidContainer>
        <SearchBar change={this.handleInput} submit={this.handleSubmit} />
        <Wrapper>
          {this.renderSectionTitle()}
          {this.renderResults()}
        </Wrapper>
      </div>
    );
  }
}
export default Search;
