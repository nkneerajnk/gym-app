import React from 'react'
import "./Plans.css"

function Plans() {
  return (
    <div className="plans-container" id="Plans">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>

        <div className="program-header">
            <span className="stroke-text">ready to start </span>
            <span>your journey </span>
            <span className="stroke-text">with us</span>
        </div>
      <div className="plans-detail">
        <div>
        <span className="span22"><h1>basic plan </h1> </span>
        <span className="span22"><h1>$500</h1> </span>
        <ul className="detail-plan">
          <li> 2 hours exercise </li>
          <li> free consulation to coaches</li>
          <li> Access to the community</li>
          <li> this is for only 1 months</li>
        </ul>
        <button type="submit" className="plan-btn">join now </button>
        </div>

        <div>
        <span className="span22"><h1>premium plan</h1></span>
        <span className="span22"><h1>$2500</h1> </span>
        <ul className="detail-plan">
        <li> 4 hours exercise </li>
          <li> free consulation to coaches</li>
          <li> Accessto minibar</li>
          <li> this is for only 6 months</li>
        </ul>
        <button type="submit" className="plan-btn">join now </button>

        </div>

        <div>
        <span className="span22"><h1>pro plan</h1></span>
        <span className="span22"><h1>$4000</h1> </span>
        <ul className="detail-plan">
        <li> 6 hours exercise </li>
          <li> free consulation to coaches</li>
          <li> Accessto minibar</li>
          <li> this is for only 1 year</li>
        <button type="submit" className="plan-btn1">join now </button>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Plans
