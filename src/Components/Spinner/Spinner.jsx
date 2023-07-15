import React from 'react'
import './spinner.css'
import logo from './../../images/logo.jpg'
function Spinner() {
    return (
        <div>
            <div className="spinners">
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spinner