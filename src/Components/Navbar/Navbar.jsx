import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../images/logo.jpg'
import newsimg from './../../images/newslogo.jpg'
import kursimg from './../../images/kurslogo.jpg'
import mentorimg from './../../images/mentorlogo.jpg'
import phonelogo from './../../images/phonelogo.jpg'
import kutubxona from './../../images/kutubxona.svg'
import './navbar.css'
function Navbar() {
  const [bars, setBars] = useState(false)
  const barsclicked = () =>{
    setBars(prev => !prev)
  }
  return (
    <div>
      <div>
        <nav className="Desktop">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="ulone">
            <li><img src={newsimg} alt="" /><Link to='/'>yangiliklar</Link></li>
            <li><img src={mentorimg} alt="" /><Link to='/mentors'>o'qituvchilar</Link></li>
            <li><img src={kursimg} alt="" /><Link to='/courses'>kurslar</Link></li>
            <li><img src={kutubxona} alt="" /><Link to='/library'>kutubxonamiz</Link></li>
          </ul>
          <ul className="ultwo">
            <a href="tel: +998958995500"><img src={phonelogo} alt="" />CALL: +998(95)-899-5500</a>
          </ul>
        </nav>
        <hr />
      </div>
      <div className="Phone">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button className='btn btn-warning' onClick={barsclicked}><i className="fa fa-bars" aria-hidden="true"></i></button>

        {
          bars ? (
            <div className="NavbarTogle">
              <ul>
                <li><img src={newsimg} alt="" /><Link to='/'>yangiliklar</Link></li>
                <li><img src={mentorimg} alt="" /><Link to='/'>o'qituvchilar</Link></li>
                <li><img src={kursimg} alt="" /><Link to='/courses'>kurslar</Link></li>
                <li><img src={kursimg} alt="" /><Link to='/courses'>kutubxonamiz</Link></li>
                <li><a href="tel: +998958995500"><img src={phonelogo} alt="" />CALL: +998(95)-899-5500</a></li>
              </ul>
            </div>
          ):''
        }
      </div>
    </div>
  )
}

export default Navbar