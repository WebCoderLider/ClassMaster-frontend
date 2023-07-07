import React, { useEffect, useState } from 'react'
import './course.css'
function Course() {

  const [ModalKaPlus, setModalKaPlus] = useState(false)
  const ModalKaPlusBtn = () => {
    setModalKaPlus(prev => !prev)
  }
  const [courseabout, setCourseabout] = useState(false)
  const courseaboutbtn = () => {
    setCourseabout(prev => !prev)
  }
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  return (
    <div>
      <h1 className='text-center m-3'>kurslar</h1>
      <div className="Courses">
        {
          data ? data.map(el => (
            <div className="Course">
              <img src={`https://picsum.photos/30${el.id<9?el.id:1||2||3||4}`} alt="" />
              <h4>{el.name}</h4>
              <p>{el.company.catchPhrase}</p>
              <button className='btn btn-primary m-2' onClick={ModalKaPlusBtn}><i class="fa fa-plus" aria-hidden="true"></i></button>
              <button onClick={courseaboutbtn} className="btn btn-primary m-2">about</button>
            </div>
          )) : ''
        }
      </div>

      {
        ModalKaPlus ? (
          <div className="ModalKaPlus">
            <div className="form">
              <button onClick={ModalKaPlusBtn} className="btn btn-warning"><i className='fas fa-close'></i></button>
              <input type="text" placeholder='Ismi..' className='form-control m-2' />
              <input type="tel" placeholder='Telefon raqamingiz...' className='form-control m-2' />
              <select class="form-select m-2" aria-label="Default select example">
                <option selected>select course..</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button className='btn btn-primary m-2'>submit</button>
            </div>
          </div>
        ) : ''
      }

      {
        courseabout ? (
          <div className="ModalKaPlus">
            <div className="form">
              <button onClick={courseaboutbtn} className="btn btn-warning"><i className='fas fa-close'></i></button>
              <div>
                <h4>Course name</h4>
                <h6>Course about Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tenetur, ipsum culpa, distinctio architecto odio possimus commodi rerum adipisci odit, deserunt sit repudiandae rem modi nostrum porro quis error similique.</h6>
              </div>
              <button className='btn btn-primary m-2'>submit</button>
            </div>
          </div>
        ) : ""
      }
    </div>
  )
}

export default Course