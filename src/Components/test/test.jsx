import React from 'react'
import Navbar from '../Navbar/Navbar'
import './test.css'
import { Link } from 'react-router-dom'
function Test() {
    const fancliked = () => {
        const user_name = prompt('ismingizni kiriting...')
        const user_first_name = prompt('familayngizni kiriting...')
        const age = prompt('yoshingizni kiriting...')
        const phone = prompt('telefon raqamingizni kiriting...')
        let user = {
            fan: 'matematika',
            ismi: user_name,
            familyasi: user_first_name,
            yoshi: age,
            phone_number: phone
        }
        localStorage.setItem('user', JSON.stringify(user))
    }
    return (
        <div>
            <Navbar />
            <h4 className='my-3'>Testlar</h4>
            <div className="fanlar">
                <Link to='/test/title'>
                    <div className="fan" onClick={fancliked}>
                        <h4>Matematika</h4>
                    </div>
                </Link>
                <Link to='/test/title'>
                    <div className="fan" onClick={fancliked}>
                        <h4>Matematika</h4>
                    </div>
                </Link>
                <Link to='/test/title'>
                    <div className="fan" onClick={fancliked}>
                        <h4>Matematika</h4>
                    </div>
                </Link>
                <Link to='/test/title'>
                    <div className="fan" onClick={fancliked}>
                        <h4>Matematika</h4>
                    </div>
                </Link>
                <Link to='/test/title'>
                    <div className="fan" onClick={fancliked}>
                        <h4>Matematika</h4>
                    </div>
                </Link>
                <Link to='/test/title'>
                    <div className="fan" onClick={fancliked}>
                        <h4>Matematika</h4>
                    </div>
                </Link>
                <Link to='/test/title'>
                    <div className="fan" onClick={fancliked}>
                        <h4>Matematika</h4>
                    </div>
                </Link>
                <Link to='/test/title'>
                    <div className="fan" onClick={fancliked}>
                        <h4>Matematika</h4>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Test