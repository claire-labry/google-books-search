import React from 'react'
import './style.css'

function Form(props) {
  return (
    <div>
      <form className='form'>
        <div>
          <input
            onChange={props.handleChange}
            value={props.search}
            name='search'
            type='text'
            className='input'
            placeholder='search for a book, author...'
            id='search'
          />
          <button onClick={props.handleSearch} className='search-button'>
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
