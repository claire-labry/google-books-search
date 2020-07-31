import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar() {

  const quote =[
    'if one is lucky, a solitary fantasy can totally transform one million realities. ~ Maya Angelou',
    'so many books, so little time. ~ Frank Zappa',
    'there is no friend as loyal as a book. ~ Ernest Hemingway',
    'that\'s the thing about books. They let you travel without moving your feet. ~Jhumpa Lahiri',
    'if you have a garden and a library, you have everything you need. ~ Cicero',
    'books are the mirrors of the soul. ~ Virigina Woolf',
    'but for my own part, if a book is well written, I always find it too short. ~ Jane Austen',
    'knowing someone who belongs to another species can enlarge your soul in surprising ways. ~ Sy Montgomery'
  ];

  let quotes = quote[Math.floor(Math.random() * quote.length)];

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='booksoulhug'> 
      <p className='booksoul'>{quotes}</p>
      </div>
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
