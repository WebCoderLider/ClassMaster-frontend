import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'

function CourseTyping() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/userscourse')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const deletemessage = (id) =>{
        fetch(`http://localhost:5000/userscourse/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
        window.location.reload()
    }
    return (
        <div>
            <Navbar />
            <div className="Messages">
                <div className="message p-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">kurs nomi</th>
                                <th scope="col">foydalanuvchi nomi</th>
                                <th scope="col">foydalanuvchi raqami</th>
                                <th scope="col">o'chirish</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.length >= 1 ? data.map(el => (
                                    <tr key={el.id}>
                                        <td>{el.course_name}</td>
                                        <td>{el.user_name}</td>
                                        <td><a href={`tel:${el.user_phone}`}>{el.user_phone}</a></td>
                                        <td><button onClick={() => deletemessage(el.id)} className='btn btn-danger'><i className="fa fa-trash" aria-hidden="true"></i> delete</button></td>
                                    </tr>
                                )) : <center><h4>Xabarlar yoq</h4></center>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CourseTyping