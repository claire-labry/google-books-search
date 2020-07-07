import React from 'react'
import './style.css'

const Result = (props) => {
  return (
    <div>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <div className='card'>
              <div class='card-image'>
              <figure class="image is-200by200">
                <img src={book.image} alt={book.title} />
                </figure>
              </div>
              <p>{book.title}</p>
              <p>by: {book.author}</p>
              <div className='content'>{book.description}</div>
              <div>
                <button
                  type='button'
                  className='button'
                  id={book.id}
                  onClick={(event) => props.saveBook(event)}
                >
                  Save
                </button>
                <a href={book.link} rel='noopener noreferrer' target='_blank'>
                  <button type='button' className='button'>
                    Google Book
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
