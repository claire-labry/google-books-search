import React from 'react';

function Form(props) {
  return (
    <div>
      <form>
        <div>
          <label htmlFor='search'>
            <h2>Search 'n Save Your Books</h2>
          </label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name='search'
            type='text'
            className='form-control'
            placeholder='Search a Book'
            id='search'
          />
          <button
            onClick={props.handleFormSubmit}
            className='btn btn-dark mt-3 mb-5'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
