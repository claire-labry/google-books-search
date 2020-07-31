import React from 'react'
import './style.css'


const Result = (props) => {

  return (
    <div>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <div className='card'>
              <div className='card-image'>
                <img src={book.image} alt={book.title} />
              </div>
              <p>{book.title}</p>
              <p>by: {book.authors}</p>
              <div className='content'>{book.description}</div>
              <div>
                <button
                  type='button'
                  className='resultsbutton'
                  id={book.id}
                  onClick={event => props.saveBooks(event)}>
                  Save
                </button>
                <a href={book.link} rel='noopener noreferrer' target='_blank'>
                  <button type='button' className='resultsbutton'>
                    More info
                  </button>
                </a>
                <a rel='noopener noreferrer' target='_blank'>
                  <button type='button' className='resultsbutton'>
                    I've read this book!
                  </button>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Result
