import React from 'react';
import './style.css';

function Dropdown(props) {
  return (
    <div className='dropdown'>
      <div className='dropdown is-active'>
        <div className='dropdown-trigger'>
          <button
            className='button'
            aria-haspopup='true'
            aria-controls='dropdown-menu'
          >
            <span className='icon is-small'>
              <i className='fas fa-angle-down' aria-hidden='true'></i>
            </span>
          </button>
        </div>
        <div className='dropdown-menu' id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            <i className='dropdown-item'>{props.children}</i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
