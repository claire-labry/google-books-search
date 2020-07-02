import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/'>Google Books</Link>
        <div className='navbar-end'>
          <span className='navbar-item'>
            <Link
              to='/search'
              className={
                window.location.pathname === '/search'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Search
            </Link>
          </span>
          <span className='navbar-item'>
            <Link
              to='/saved'
              className={
                window.location.pathname === '/saved'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Saved
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
