import React, { Component } from 'react'
import API from '../utils/API'
import Wrapper from '../components/Wrapper'
import Save from '../components/Save'
import './search.css'

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

        {this.state.data.length ? (
          <div>
            <h1 className='searchsave'>Saved Books</h1>
            <Save data={this.state.data} deleteBook={this.deleteBook} />
          </div>
        ) : (
          <h2 className='searchsave'>No Saved Books Yet!</h2>
        )}
      </Wrapper>
    )
  }
}

export default Saved
