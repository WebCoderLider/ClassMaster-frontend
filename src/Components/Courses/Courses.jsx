<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import './Course.css';
import Navbar from '../Navbar/Navbar';

=======
import React, { useEffect, useRef, useState } from 'react'
import './Course.css'
import Navbar from '../Navbar/Navbar'
>>>>>>> 390505f205f7d24802d3333398f078cad3fd06c4
function Courses() {
    const [CourseModal, setCourseModal] = useState(false);
    const [us, setUs] = useState(true);
    const usernameRef = useRef('');
    const passwordRef = useRef('');

    const AddMentorButton = () => {
        setCourseModal(prev => !prev);
    };

    const loginclick = () => {
        usernameRef.current.value === 'WebCoder' && passwordRef.current.value === 'admin'
            ? setUs(true)
            : alert('Username or password is incorrect');
    };

    const inputPassword0 = useRef();
    const inputPassword1 = useRef();
    const inputPassword2 = useRef();
    const inputPassword3 = useRef();
    const inputPassword4 = useRef();
    const inputPassword5 = useRef();

    const addCourseBtn = () => {
        const file = inputPassword0.current.files[0];
        const password1 = inputPassword1.current.value;
        const password2 = inputPassword2.current.value;
        const password3 = inputPassword3.current.value;
        const password4 = inputPassword4.current.value;
        const password5 = inputPassword5.current.value;

        const formData = new FormData();
        formData.append('img', file);
        formData.append('title', password1);
        formData.append('narxi', password2);
        formData.append('ustoz', password3);
        formData.append('dars_vaqtari', password4);
        formData.append('about', password5);

        fetch('http://localhost:5000/courses', {
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

    const [course, setCourse] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json(0))
            .then(data => setCourse(data))
    }, [])

    const courseDelete = (id) =>{
        fetch(`http://localhost:5000/courses/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
    }
<<<<<<< HEAD
    return (
        <div>
            {us ? (
                <div>
                    <Navbar />
                    <div className="MentorAdd d-flex justify-content-end m-3">
                        <button onClick={AddMentorButton} className="btn btn-warning">
                            <i className="fa fa-user-plus" aria-hidden="true"></i> add course
                        </button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="p-2" scope="col">
                                    kurs nomi
                                </th>
                                <th className="p-2" scope="col">
                                    narxi
                                </th>
                                <th className="p-2" scope="col">
                                    o'chirish
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                course.length >=1 ? course.map(el => (
                                    <tr key={el.id}>
                                        <td className="p-2">{el.title}</td>
                                        <td className="p-2">{el.narxi}</td>
                                        <td className="p-2">
                                            <button className="btn btn-danger" onClick={() => courseDelete(el.id)}>
                                                <i className="fa fa-trash" aria-hidden="true"></i> o'chirish
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <center><h1>Course not found</h1></center>
                                )
                            }
                        </tbody>
                    </table>

                    {CourseModal ? (
                        <div className="AddCourseModal">
                            <div className="AddCourseContext">
                                <div className="d-flex justify-content-end">
                                    <button onClick={AddMentorButton} className="btn btn-warning">
                                        <i className="fa fa-close" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <h4>Add Course</h4>
                                <label htmlFor="inputPassword0" className="form-label">
                                    course img
                                </label>
                                <input
                                    type="file"
                                    ref={inputPassword0}
                                    id="inputPassword0"
                                    className="form-control"
                                    aria-labelledby="passwordHelpBlock"
                                />
                                <label htmlFor="inputPassword1" className="form-label">
                                    fan
                                </label>
                                <input
                                    type="text"
                                    ref={inputPassword1}
                                    id="inputPassword1"
                                    className="form-control"
                                    aria-labelledby="passwordHelpBlock"
                                />
                                <label htmlFor="inputPassword2" className="form-label">
                                    narxi
                                </label>
                                <input
                                    type="text"
                                    ref={inputPassword2}
                                    id="inputPassword2"
                                    className="form-control"
                                    aria-labelledby="passwordHelpBlock"
                                />
                                <label htmlFor="inputPassword3" className="form-label">
                                    usto
                                </label>
                                <input
                                    type="text"
                                    ref={inputPassword3}
                                    id="inputPassword3"
                                    className="form-control"
                                    aria-labelledby="passwordHelpBlock"
                                />
                                <label htmlFor="inputPassword4" className="form-label">
                                    dars vaqtlari
                                </label>
                                <input
                                    type="text"
                                    ref={inputPassword4}
                                    id="inputPassword4"
                                    className="form-control"
                                    aria-labelledby="passwordHelpBlock"
                                />
                                <label htmlFor="inputPassword5" className="form-label">
                                    course haqida
                                </label>
                                <input
                                    type="text"
                                    ref={inputPassword5}
                                    id="inputPassword5"
                                    className="form-control"
                                    aria-labelledby="passwordHelpBlock"
                                />
                                <button className="btn btn-warning" onClick={addCourseBtn}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
=======
    const [us, setUs] = useState(false)
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
                        <button onClick={AddMentorButton} className="btn btn-warning"><i class="fa fa-user-plus" aria-hidden="true"></i> add course</button>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='p-2' scope="col">kurs nomi</th>
                                <th className='p-2' scope="col">narxi</th>
                                <th className='p-2' scope="col">o'chirish</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-2'>Mark</td>
                                <td className='p-2'>Otto</td>
                                <td className='p-2'><button className='btn btn-danger'><i class="fa fa-trash" aria-hidden="true"></i> o'chirish</button></td>
                            </tr>
                        </tbody>
                    </table>

                    {
                        CourseModal ? (
                            <div className="AddCourseModal">
                                <div className="AddCourseContext">
                                    <div className="d-flex justify-content-end"><button onClick={AddMentorButton} className='btn btn-warning'><i class="fa fa-close" aria-hidden="true"></i></button></div>
                                    <h4>Add Course</h4>
                                    <label for="inputPassword1" class="form-label">fan</label>
                                    <input type="text" id="inputPassword1" class="form-control" aria-labelledby="passwordHelpBlock" />
                                    <label for="inputPassword2" class="form-label">narxi</label>
                                    <input type="text" id="inputPassword2" class="form-control" aria-labelledby="passwordHelpBlock" />
                                    <label for="inputPassword3" class="form-label">ustoz</label>
                                    <input type="text" id="inputPassword3" class="form-control" aria-labelledby="passwordHelpBlock" />
                                    <label for="inputPassword2" class="form-label">dars vaqtlari</label>
                                    <input type="text" id="inputPassword2" class="form-control" aria-labelledby="passwordHelpBlock" />
                                    <button className='btn btn-warning'>Submit</button>
                                </div>
                            </div>
                        ) : ''
                    }
>>>>>>> 390505f205f7d24802d3333398f078cad3fd06c4
                </div>
            ) : (
                <div>
                    <div className="ModalLogin bg-warning">
                        <div className="ContextLogin">
<<<<<<< HEAD
                            <input
                                type="text"
                                value={usernameRef.current.value}
                                className="m-3 form-control"
                                ref={usernameRef}
                                placeholder="Enter username..."
                            />
                            <input
                                type="text"
                                value={passwordRef.current.value}
                                className="m-3 form-control"
                                ref={passwordRef}
                                placeholder="Enter password..."
                            />
                            <button onClick={loginclick} className="m-3 btn btn-primary">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
=======
                            <input type="text" value={usernameRef.current.value} className='m-3 form-control' ref={usernameRef} placeholder='enter username...' />
                            <input type="text" value={passwordRef.current.value} className='m-3 form-control' ref={passwordRef} placeholder='enter password...' />
                            <button onClick={loginclick} className='m-3 btn btn-primary'>Login</button>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
)
>>>>>>> 390505f205f7d24802d3333398f078cad3fd06c4
}

export default Courses;
