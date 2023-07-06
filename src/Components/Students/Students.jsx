import React from 'react'
import Navbar from '../Navbar/Navbar'

function Students() {
    return (
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
    )
}

export default Students