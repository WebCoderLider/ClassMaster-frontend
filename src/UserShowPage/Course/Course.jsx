import React, { useEffect, useRef, useState } from 'react';
import './course.css';

function Course() {
  const [ModalKaPlus, setModalKaPlus] = useState(false);
  const [courseabout, setCourseabout] = useState(false);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const user_name = useRef();
  const phone = useRef();
  const course = useRef();

  const submitcoursebtnsend = () => {
    const userName = user_name.current.value;
    const userPhone = phone.current.value;
    const courseName = course.current.value;

    const formData = new FormData();
    formData.append('user_name', userName);
    formData.append('user_phone', userPhone);
    formData.append('course_name', courseName);

    if (userName != '' && userPhone != '') {
      fetch('http://localhost:5000/userscourse', {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.location.reload();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    else {
      alert('ma\'lumotlaringiz noto\'ri')
    }
  };

  const ModalKaPlusBtn = id => {
    setModalKaPlus(prev => !prev);
    fetch(`http://localhost:5000/courses/${id}`)
      .then(res => res.json())
      .then(data => setData1(data))
      .catch(error => console.error('Error:', error));
  };

  const courseaboutbtn = id => {
    setCourseabout(prev => !prev);
    fetch(`http://localhost:5000/courses/${id}`)
      .then(res => res.json())
      .then(data => setData1(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1 className='text-center m-3'>kurslar</h1>
      <center>
        <div className='Courses'>
          {data &&
            data.map(el => (
              <div className='Course' key={el.id}>
                <img src={el.img} alt='' />
                <h4>{el.title}</h4>
                <p>{el.about}</p>
                <button
                  className='btn btn-warning m-2'
                  onClick={() => ModalKaPlusBtn(el.id)}
                >
                  <i className='fa fa-plus' aria-hidden='true'></i>
                </button>
                <button
                  onClick={() => courseaboutbtn(el.id)}
                  className='btn btn-warning m-2'
                >
                  about
                </button>
              </div>
            ))}
        </div>
      </center>

      {ModalKaPlus && (
        <div className='ModalKaPlus'>
          <div className='form text-left'>
            <button onClick={() => setModalKaPlus(false)} className='btn btn-warning'>
              <i className='fas fa-close'></i>
            </button>
            <input type='text' ref={user_name} placeholder='Ismi..' className='form-control m-2' />
            <input type='number' ref={phone} placeholder='Telefon raqamingiz...' className='form-control m-2' />
            <input type='tel' ref={course} placeholder='Telefon raqamingiz...' disabled value={data1.title} className='form-control m-2' />
            <button className='btn btn-warning m-2' onClick={submitcoursebtnsend}>
              submit
            </button>
          </div>
        </div>
      )}

      {courseabout && (
        <div className='ModalKaPlus'>
          <div className='form'>
            <button onClick={() => setCourseabout(false)} className='btn btn-warning'>
              <i className='fas fa-close'></i>
            </button>
            <div>
              <img src={data1.img} alt='' />
              <h6>kurs nomi: {data1.title}</h6>
              <h6>kurs vaqtlari: {data1.dars_vaqtari}</h6>
              <h6>kurs narxi: {data1.narxi}</h6>
              <h6>kurs haqida: {data1.about}</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Course;
