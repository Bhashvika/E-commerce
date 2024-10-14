import React from 'react'
import './offers.css';
import exclusive_offer from '../../assets/exclusive_image.png';
const offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
             <h2>Flash Sale Alert!
             </h2>
             <p>Up to 50% off on selected items. Hurry, these deals won't last long!</p>
             <button>Explore Now➡️</button>
        </div>
        <div className="offers-right">
          <img src={exclusive_offer} alt="" width="400px"/>
        </div>
    </div>
  )
}

export default offers