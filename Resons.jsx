import React from 'react'
import './Resons.css'
import barbell from './images/barbell.jpg'
import gymhoz from './images/gym-horz.jpg'
import gymlady from './images/gym-lady.jpg'
import malegym from './images/male-gym.jpg'
import tick from './images/tick.svg'

const resons = () => {
  return (
    <div className="Resons" id="resons">
      <div className="left-r">
            <img src={gymhoz} alt="" />
            <img src={barbell} alt="" />
            <img src={gymlady} alt="" />
            <img src={malegym} alt="" />
      </div>
      <div className="right-r">
        <span>some Resons</span>
        <div className="why">
            <span className="stroke-text">why </span>
            <span> Choose us ?</span>
        </div>
        <div className="details-r">
            <div>
                <img src={tick} alt=""></img>
                    <span>OVER 140+ EXPERTS COACHS</span>
            </div>
            <div>
                <img src={tick} alt=""></img>
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
                <img src={tick} alt=""></img>
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
                <img src={tick} alt=""></img>
                    <span>RELIABLE PARTNER</span>
            </div>
        </div>
     </div>
    </div>
  )
}

export default resons
