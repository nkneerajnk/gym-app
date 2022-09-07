import React from "react";
import "./Hero.css";
import Header from "./Header.jsx";
import heart from './images/heart1.webp'
import heroimage from './images/fitness.jpg'
import CountUp from 'react-countup';

import {motion} from 'framer-motion'

const transition ={type:'spring',duration:3}
const mobile = window.innerWidth<=768?true:false;

const hero = () => {
  return (
    <div className="hero" id="hero ">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/*the best ad*/}
        <div className="the-best-ad">
          <motion.div
          initial={{left: mobile? "178px": '238px'}}
          whileInView={{left:'9px'}}
          transition={{...transition,type:'tween'}}

          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/*Hero heading*/}
        <div className="hero-text">
          <div>
          <span className="stroke-text">shape </span>
          <span>your</span>
          </div>
          <div><span>ideal body</span></div>
        </div>
        <div className="head">
          <span>in here we will help you to shape and bulid your ideal body</span>
          </div>

          {/*figures*/}

          <div className="figures">
            <div>
              <span>
                <CountUp start={30} end={140} prefix='+'/>
              </span>
              <span>experts coaches</span>
            </div>
            <div>
            <span>
            <CountUp start={30} end={978} prefix='+'/></span>
            <span>member joined</span>
            </div>
            <div>
            <span> 
            <CountUp start={3} end={50} prefix='+'/>
            </span>
            <span>fitness programs</span>
            </div>
          </div>

          {/*Hero buttons*/}

          <div className="hero-buttons">
            <button className="btn" >Get Started</button>
            <button className="btn">Learn More</button>
          </div>
      </div>
      <div className="right-h">
        <button className="btn">
          join now</button>

        <div className="heart-rate">
          <img src={heart} alt=""  className="heart1"/>
          <span>heart rate </span>
          <span>116 bpm</span>
        </div>

        {/*hero images */}
            <img src={heroimage} alt=""  className="hero-image"/>

      </div>
    </div>
  );
};

export default hero;
