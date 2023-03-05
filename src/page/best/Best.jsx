import React from 'react'
import './Best.css'
import data from './data.js';
function Best() {
  return (
    <div className='container'>
    <div className='container_best'>
      <div className="container_left">
        <h1>Why we are the best from others ?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum </p>
        <button>Start Now</button>
      </div>
      <div className="cards_best">
        {data.map((card, index) => (
          <div className="card_best" key={index}>
            <img src={card.imgSrc} alt='tutors' />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
export default Best