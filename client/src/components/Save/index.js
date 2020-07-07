import React from 'react';


const Save= (props) =>{

  return(
    <div>
      {props.data.map((saved)=>{
        return(
          <div key={saved._id}>
            <div>
              <div id='pic'>
                <img src={saved.image} alt={saved.title} />
                <p>{saved.title}</p>
                <p>by:{saved.author}</p>
                <div>
                  <button type='button' id={saved.id} onClick={() => props.deleteBook(saved._id)}> Delete</button>
                </div>
                <div>
                  <a href={saved.link} rel="noopener noreferrer" target='_blank'>
                    <button type='button'>Google Book</button>
                  </a>
                </div>
              </div>
              <div className='description'>{saved.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Save