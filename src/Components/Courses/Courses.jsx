import React, { useEffect, useRef, useState } from 'react'
import Navbar from './../Navbar/Navbar'
import './course.css'
import Spinner from '../Spinner/Spinner'
function Courses() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const [qmodal, setQmodal] = useState(false)
    const [onemodal, setOnemodal] = useState({})
    const qoshilishbtn = (id) => {
        setQmodal(prev => !prev)
        fetch(`http://localhost:5000/courses/${id}`)
            .then(res => res.json())
            .then(data => setOnemodal(data))
    }

    const username = useRef()
    const number = useRef()
    const fan = useRef()
    const formsubmitcourse = () => {
        fetch('http://localhost:5000/userscourse', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_name: username.current.value,
                user_phone: number.current.value,
                course_name: fan.current.value
            })
        })
            .then(res => res.json())
            .then(data => alert(data.message))
        window.location.reload()
    }

    const [courseabout, setCourseabout] = useState(false)

    const courseaboutbtncliked = (id) => {
        setCourseabout(prev => !prev)
        fetch(`http://localhost:5000/courses/${id}`)
            .then(res => res.json())
            .then(data => setOnemodal(data))
}

return (
    <div>
        <Navbar />
        <h3 className='text-left fw-bold my-3 text-dark'><i class="fa fa-edit mx-2" aria-hidden="true"></i> KURSLARIMIZ</h3>

        <div className="row">

            {
                data.length >= 1 ? data.map(el => (
                    <div className="col-sm-4 mt-3" key={el.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{el.title}</h5>
                                <p className="card-text">{el.about}</p>
                                <button className="mx-2 btn btn-warning" onClick={() => qoshilishbtn(el.id)}><i class="fa fa-plus" aria-hidden="true"></i></button>
                                <button className="mx-2 btn btn-warning" onClick={() => courseaboutbtncliked(el.id)}>about</button>
                            </div>
                        </div>
                    </div>
                )) : <div><Spinner /></div>
            }

            {
                qmodal ? (
                    <div className="QoshilishModal">
                        <div className="Form">
                            <h4 onClick={qoshilishbtn}><i class="fa fa-close" aria-hidden="true"></i></h4>
                            <h6 className='text-left fw-bold'><i class="fa-regular fa-pen-to-square mx-3"></i>kursga qoshilish</h6>
                            <input type="text" ref={username} placeholder='Ismingizni yozing...' className="my-3 form-control" />
                            <input type="number" ref={number} placeholder='Telefon raqamingizni yozing' className="my-3 form-control" />
                            <input type="text" ref={fan} disabled value={onemodal.title} className="my-3 form-control" style={{ cursor: 'no-drop' }} />
                            <button className='btn btn-warning' onClick={formsubmitcourse}>qoshilish</button>
                        </div>
                    </div>
                ) : ''
            }

            {
                courseabout ? (
                    <div className="CourseAboutModal">
                        <div className="Form">
                            <h3 onClick={courseaboutbtncliked}><i class="fa fa-close" aria-hidden="true"></i></h3>
                            <h4 className='fw-bold'>{onemodal.title}</h4>
                            <h6>dars davomiyligi: {onemodal.dars_vaqtari}</h6>
                            <h6>ustoz: {onemodal.ustoz}</h6>
                            <h6>narxi: {onemodal.narxi}</h6>
                            <p>ma'lumot: {onemodal.about}</p>
                        </div>
                    </div>
                ) : ""
            }

        </div>
    </div>
)
}

export default Courses