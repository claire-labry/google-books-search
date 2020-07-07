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
            onChange={props.handleChange}
            value={props.search}
            name='search'
            type='text'
            className='search'
            placeholder='Search a Book'
            id='search'
          />
          <button
            onClick={props.handleSubmit}
            className='button'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
