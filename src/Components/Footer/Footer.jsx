import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logo from './../../images/logo.jpg'
import newsimg from './../../images/newslogo.jpg'
import kursimg from './../../images/kurslogo.jpg'
import mentorimg from './../../images/mentorlogo.jpg'
import phonelogo from './../../images/phonelogo.jpg'
function Footer() {
    const input = useRef()
    const submitform = () => {
        fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: input.current.value }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                input.current.value = ''
            })
    }
    return (
        <div>
            <div className="Footer">
                <div className="footerdivs left"></div>
                <div className="footerdivs center">
                    <img src={logo} alt="" />
                    <ul className="navbarfooter">
                        <li><img src={newsimg} alt="" /><Link to='/'>yangiliklar</Link></li>
                        <li><img src={mentorimg} alt="" /><Link to='/'>o'qituvchilar</Link></li>
                        <li><img src={kursimg} alt="" /><Link to='/courses'>kurslar</Link></li>
                    </ul>
                    <ul className="ultwo">
                        <a href="tel: +998958995500"><img src={phonelogo} alt="" />CALL: +998(95)-899-5500</a>
                    </ul>

                    <div className="form">
                        <input type="text" ref={input} placeholder='qanday muammo mavjud?' />
                        <button onClick={submitform}>submit</button>
                    </div>
                </div>
                <div className="footerdivs right"></div>
            </div>
        </div>
    )
}

export default Footer