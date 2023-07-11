import React, { useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'

function Students() {

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
                        <div className="d-flex p-3">
                            <input type="text" placeholder='Searching students' className='form-control m-1' />
                            <button className="btn btn-warning m-1">search</button>
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

export default Students