import React from 'react';
import './style.css'

const Save= (props) =>{

  return(
    <div>
      {props.data.map((saved)=>{
        return(
          <div key={saved._id}>
            <div>
            <div className='card'>
            <div className='card-image'>
                <img src={saved.image} alt={saved.title} />
                </div>
                <p>{saved.title}</p>
                <p>by: {saved.authors}</p>
                <div className='description'>{saved.description}</div>
                <div>
                  <button type='button' className='buttons' id={saved.id} onClick={() => props.deleteBook(saved._id)}> Delete</button>
                </div>
                <div>
                  <a href={saved.link} rel="noopener noreferrer" target='_blank'>
                    <button type='button' className='buttons'>Google Book</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Save