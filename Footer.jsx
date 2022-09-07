import React from 'react'
import './Footer.css'
import github from './images/github.svg'
import twitter from './images/twitter.svg'
import facebook from './images/facebook.svg'
import logo from './images/weight-1399281.png'

const footer = () => {
  return (
    <div className="footer-container">
      <hr />
    <div className="footer">

        <div className="social-link">
        <img src={github} alt="" />
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        </div>
     
      <div className="logo-f">
        <img src={logo} alt="" />
        
    </div>

      </div>
    </div>
  )
}

export default footer
