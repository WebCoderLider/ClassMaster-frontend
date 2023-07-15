import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './mentors.css'
import img from './../../images/card.jpg'
import Spinner from '../Spinner/Spinner'
function Mentors() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/mentors')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <Navbar />
            <h4 className='text-center oqutivchilartext m-5'>o'qituvchilar</h4>

            <div className="MentorsContext">

                {
                    data.length >= 1 ? data.map(el => (
                        <div className="mentor" key={el.id}>
                            <img src={el.mentor_img} alt="" />
                            <div>
                                <h4>{el.mentor_name}</h4>
                                <h6>{el.mentor_fan}</h6>
                            </div>
                            <a href={`tel:${el.mentor_phone}`}><button className='btn btn-outline-warning'><i class="fa fa-phone" aria-hidden="true"></i></button></a>
                        </div>

                    )) : <div><Spinner /></div>
                }

            </div>
        </div>
    )
}

export default Mentors