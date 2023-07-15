import React from 'react'
import human from '../../images/human.jpg'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className='container d-flex align-items-center justify-content-between'>
            <div className='content'>
                <nav>
                    <span className='stroke'></span>
                    <span className='cn'>MY CLASS MASRER</span>
                </nav>
                <h1><span>Bugundan</span> boshlab barcha <span>bilimlarni</span>
                    egallashni <span>boshlang</span>!</h1>
                <p>CLASSMASTER o’quv markazida siz o’zinggizga kerakli bo’lgan barcha
                    bilimlarni eggalay olasiz. Har oyda ajoyib chegirmalar va bellashuvlar,
                    ko’ngil ochar sayohatlar faqat CLASSMASTER o’quv markazida mujassam!</p>

                <div className="btnadd ">
                    <Link  to='/mentors'><button className='btnBg'>Boshlash</button></Link>
                    <Link to={'/courses'}><button className='btnStroke'>Kurslarni ko’rish</button></Link>
                </div>
            </div>
            <div className='img'>
                <img src={human} alt="..." />
            </div>
        </div>
    )
}
