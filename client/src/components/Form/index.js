import React from 'react'
import './style.css'

function Form(props) {
  return (
    <div>
      <form>
        <div>
          <input
            onChange={props.handleChange}
            value={props.search}
            name='search'
            type='text'
            className='input'
            placeholder='search for your book...'
            id='search'
          />
          <button onClick={props.handleSearch} className='button'>
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
