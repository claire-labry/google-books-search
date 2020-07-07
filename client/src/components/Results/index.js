import React from 'react';
const Result = (props) =>{

  return(
    <div>
      {props.books.map((book)=>{
        return(
          <div key={book.id}>
            <div>
              <div id='pic'>
                <img src={book.image} alt={book.title} />
                <p>{book.title}</p>
                <p>by:{book.author}</p>
                <div>
                  <button type='button' id={book.id} onClick={event=props.saveBook(event)}> Save Your Book!</button>
                </div>
                <div>
                  <a href={book.link} target='_blank'>
                    <button type='button'>More Info</button>
                  </a>
                </div>
              </div>
              <div>{book.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Result