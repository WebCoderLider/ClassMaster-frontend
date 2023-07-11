import React from 'react'
import img from './../../df6ac028-b956-4d6f-9865-23d09db2181b.jpg'
import './mentors.css'
function Mentors() {
    return (
        <div>
            <h2 className='text-center m-5'>ustozlar</h2>
            <div className="Context">
                <div className="Mentors">
                    <div className="Mentor">
                        <img src={img} alt="" />
                        <h4>ClassMaster mentor</h4>
                        <div>
                            <h5>mentor name</h5>
                            <h6>mentor fani</h6>
                        </div>
                    </div>
                    <div className="Mentor">
                        <img src={img} alt="" />
                        <h4>ClassMaster mentor</h4>
                        <div>
                            <h5>mentor name</h5>
                            <h6>mentor fani</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentors