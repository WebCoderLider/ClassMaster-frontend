import React, { useEffect, useRef, useState } from 'react'
import './Mentor.css'
import Navbar from '../Navbar/Navbar'
function Mentors() {

    const [mentordata, setMentordata] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/mentors/')
            .then(res => res.json())
            .then(data => { setMentordata(data) })
    }, [])

    const deletementorbtn = (id) => {
        fetch(`http://localhost:5000/mentors/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
        window.location.reload()
    }

    const [MentorModal, setMentorModal] = useState(false)
    const AddMentorButton = () => {
        setMentorModal(prev => !prev);
    };

    const submitMentor = () => {
        const mentor_name = document.getElementById('mentorName').value;
        const mentor_fan = document.getElementById('mentorFan').value;
        const mentor_img = document.getElementById('mentorImg').files[0];

        const formData = new FormData();
        formData.append('mentor_name', mentor_name);
        formData.append('mentor_fan', mentor_fan);
        formData.append('mentor_img', mentor_img);

        fetch('http://localhost:5000/mentors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
            window.location.reload()
    };

    const [us, setUs] = useState(true)
    const usernameRef = useRef('')
    const passwordRef = useRef('')
    const loginclick = () => {
        usernameRef.current.value === 'WebCoder' && passwordRef.current.value === 'admin' ? setUs(true) : alert('username yoki parol xato kiritildi')
    }
    return (
        <div>
            {
                us ? (
                    <div>
                        <Navbar />
                        <div className="MentorAdd d-flex justify-content-end m-3">
                            <button onClick={AddMentorButton} className="btn btn-warning"><i className="fa fa-user-plus" aria-hidden="true"></i> add mentor</button>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='p-2' scope="col">Ismi</th>
                                    <th className='p-2' scope="col">Fan</th>
                                    <th className='p-2' scope="col">o'chirish</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    mentordata.length >= 1 ? mentordata.map(el => (
                                        <tr key={el.id}>
                                            <td className='p-2'>{el.mentor_name}</td>
                                            <td className='p-2'>{el.mentor_fan}</td>
                                            <td className='p-2'><button onClick={() => deletementorbtn(el.id)} className='btn btn-danger'><i className="fa fa-trash" aria-hidden="true"></i> o'chirish</button></td>
                                        </tr>
                                    )) : ''
                                }
                            </tbody>
                        </table>

                        {
                            MentorModal ? (
                                <div className="AddMentorModal">
                                    <div className="AddMentorContext">
                                        <div className="d-flex justify-content-end">
                                            <button onClick={AddMentorButton} className="btn btn-warning">
                                                <i className="fa fa-close" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <h4>Add Mentor</h4>
                                        <label htmlFor="mentorName" className="form-label">
                                            Ismi
                                        </label>
                                        <input
                                            type="text"
                                            id="mentorName"
                                            className="form-control"
                                            aria-labelledby="passwordHelpBlock"
                                        />
                                        <label htmlFor="mentorFan" className="form-label">
                                            fan
                                        </label>
                                        <input
                                            type="text"
                                            id="mentorFan"
                                            className="form-control"
                                            aria-labelledby="passwordHelpBlock"
                                        />
                                        <label htmlFor="mentorImg" className="form-label">
                                            img
                                        </label>
                                        <input
                                            type="file"
                                            id="mentorImg"
                                            className="form-control"
                                            aria-labelledby="passwordHelpBlock"
                                        />
                                        <button className="btn btn-warning" onClick={submitMentor}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            ) : ''
                        }
                    </div>
                ) : (
                    <div>
                        <div className="ModalLogin bg-warning">
                            <div className="ContextLogin">
                                <input
                                    type="text"
                                    defaultValue={usernameRef.current.value}
                                    className="m-3 form-control"
                                    ref={usernameRef}
                                    placeholder="enter username..."
                                />

                                <input
                                    type="text"
                                    defaultValue={passwordRef.current.value}
                                    className="m-3 form-control"
                                    ref={passwordRef}
                                    placeholder="enter password..."
                                />

                                <button onClick={loginclick} className='m-3 btn btn-primary'>Login</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Mentors