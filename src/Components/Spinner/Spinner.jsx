import React from 'react'
import './spinner.css'
import logo from './../../images/logo.jpg'
function Spinner() {
    return (
        <div>
            <div className="spinners">
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spinner