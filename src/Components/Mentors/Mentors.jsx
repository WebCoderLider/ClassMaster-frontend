import React, { useRef, useState } from 'react'
import './Mentor.css'
import Navbar from '../Navbar/Navbar'
function Mentors() {
    const [MentorModal, setMentorModal] = useState(false)
    const AddMentorButton = () => {
        setMentorModal(prev => !prev)
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
                            <button onClick={AddMentorButton} className="btn btn-warning"><i class="fa fa-user-plus" aria-hidden="true"></i> add mentor</button>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th className='p-2' scope="col">Ismi</th>
                                    <th className='p-2' scope="col">Familyasi</th>
                                    <th className='p-2' scope="col">Fan</th>
                                    <th className='p-2' scope="col">o'chirish</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2'>Mark</td>
                                    <td className='p-2'>Otto</td>
                                    <td className='p-2'>Otto</td>
                                    <td className='p-2'><button className='btn btn-danger'><i class="fa fa-trash" aria-hidden="true"></i> o'chirish</button></td>
                                </tr>
                            </tbody>
                        </table>

                        {
                            MentorModal ? (
                                <div className="AddMentorModal">
                                    <div className="AddMentorContext">
                                        <div className="d-flex justify-content-end"><button onClick={AddMentorButton} className='btn btn-warning'><i class="fa fa-close" aria-hidden="true"></i></button></div>
                                        <h4>Add Mentor</h4>
                                        <label for="inputPassword5" class="form-label">Ismi</label>
                                        <input type="text" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock" />
                                        <label for="inputPassword5" class="form-label">Familyasi</label>
                                        <input type="text" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock" />
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

export default Mentors