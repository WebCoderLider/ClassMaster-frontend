import React, { useEffect, useRef, useState } from 'react'
import './Course.css'
import Navbar from '../Navbar/Navbar'
function Courses() {
    const [CourseModal, setCourseModal] = useState(false)
    const AddMentorButton = () => {
        setCourseModal(prev => !prev)
    }
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
                </div>
            ) : (
                <div>
                    <div className="ModalLogin bg-warning">
                        <div className="ContextLogin">
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
}

export default Courses