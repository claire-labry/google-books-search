import React, { Component } from 'react'
import API from '../utils/API'
import Wrapper from '../components/Wrapper'
import Save from '../components/Save'

class Saved extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err))
  }

  deleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => this.loadBooks())
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        <h1>Your Saved Books</h1>

        {this.state.data.length ? (
          <div>
            <h2>Saved Books</h2>
            <Save data={this.state.data} deleteBook={this.deleteBook} />
          </div>
        ) : (
          <h2>No Saved Books Yet!</h2>
        )}
      </Wrapper>
    )
  }
}

export default Saved
