import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
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
                            <li className="nav-item"><Link className="nav-link fw-bold text-dark style-italic" aria-current="page" to="/admin">mentors</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-bold text-dark style-italic" to="/admin/courses">courses</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-bold text-dark style-italic" to="/admin/students">students</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar