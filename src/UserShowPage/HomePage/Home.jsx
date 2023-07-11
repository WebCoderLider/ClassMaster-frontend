import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import Course from '../Course/Course'
import Mentors from '../Mentors/Mentors'
function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="#">classmaster</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link fw-bold text-dark style-italic" aria-current="page" href="#">mentors</a></li>
                            <li className="nav-item"><a className="nav-link fw-bold text-dark style-italic" aria-current="page" href="#">courses</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="Header">
                <header>
                    <div>
                        <h4 className='text-center text-light fw-bold'>ClassMaster</h4>
                        <p>ClassMaster o'quv markazining rasmi web saytiga xush kelibsiz o'zingizga kerakli ma'lumotlarni pastdan topishingiz mumkin</p>
                        <button className='btn btn-warning'>Geting Stated</button>
                        <br />
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                </header>
            </div>
            <Course />
            <Mentors />
        </div>
    )
}

export default Home