import React, { Component } from 'react'
import API from '../utils/API'

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
}

export default Saved