import React from 'react'
import './Header.css'
import logo from './images/weight-1399281.png'
import {Link} from 'react-scroll'

function Header() {
  return (
   <div className="header">
    <img src={logo} alt="hi"  className="logo"/>
    <ul className='header-menu'>
        <li>
        <Link 
          to='hero'
          spy={true}
          smooth={true}
          >home</Link>
          </li>
        <li>
        <Link 
          to='programs'
          spy={true}
          smooth={true}
          >programs</Link></li>
        <li>
        <Link 
          to='resons'
          spy={true}
          smooth={true}
          >why us</Link>
          </li>
        <li>
          <Link 
          to='Plans'
          spy={true}
          smooth={true}
          >plans</Link>
          </li>
        
    </ul>
   </div>
  )
}

export default Header
