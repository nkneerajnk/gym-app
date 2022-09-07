import React from 'react'
import './Program.css'
import pushup from './images/pushup.mp4'
import pullup from './images/pullup.mp4'
import yoga from './images/yoga.mp4'
function program() {
  return (
  <div className="programs" id="programs">

    <div className="program-header">
        <span className="stroke-text">explore our </span>
        <span>programs </span>
        <span className="stroke-text">to shape you</span>
    </div>
    <div className="pushup">
        <video src={pushup} autoPlay muted controls loop className="pushups"></video>
        
        <video src={pullup} autoPlay muted controls loop className="pushups"></video>
        <video src={yoga} autoPlay muted controls loop className="pushups"></video>
    </div>
    <div className="button1">
    <button className="btn1">join bodybuilding</button>
        <button className="btn1">join cardio</button>
        <button className="btn1">join yoga</button>
    </div>
    </div>
    
  )
}

export default program
