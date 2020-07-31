import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar() {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <p className='booksoul'>“if one is lucky, a solitary fantasy can totally transform one million realities.” ~ Maya Angelou</p>
      <div className='links'>
        <h6><Link
          to='/search'
          className={
            window.location.pathname === '/search'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          Search for a Book
        </Link></h6>

        <h6><Link
          to='/saved'
          className={
            window.location.pathname === '/saved'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          Your Saved Books
        </Link></h6>
      </div>
    </nav>
  )
}

export default Navbar
