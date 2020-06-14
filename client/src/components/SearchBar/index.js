import React from 'react';
import './style.css';
import Wrapper from '../Wrapper';

function SearchBar(props) {
  return (
    <div>
      <Wrapper>
        <div className='field' onSubmit={props.submit}>
          <div className='control'>
            <input
              className='input is-rounded'
              type='text'
              name='search'
              onChange={props.change}
              placeholder='search for your book'
            />
            <button type='submit' className='button'>
              Search!
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default SearchBar;
