import React, { useState } from 'react';
import './testone.css';
import data from './../../data';

function Testone() {
  const [tugrijavoblar, settugrijavoblar] = useState([]);

  const javoblar = (tanlanganJavob, istrue, id) => {
    if (tanlanganJavob === istrue) {
      settugrijavoblar([...tugrijavoblar, id]);
      console.log(true); // true deb chiqaradi, to'g'ri javob
    } else {
      console.log(false); // false deb chiqaradi, noto'g'ri javob
    }
  };

  const topshirishBosildi = () => {
    const user = localStorage.getItem('user');
    const newuser = {
      "user_subject": JSON.parse(user).fan,
      "user_name": JSON.parse(user).ismi,
      "user_first_name": JSON.parse(user).familyasi,
      "user_age": JSON.parse(user).yoshi,
      "phone_number": JSON.parse(user).phone_number,
      "user_ball": tugrijavoblar.length
    };
    fetch('http://localhost:5000/testuser', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json' // To'g'rilash kerak bo'lgan xatolik, "aplication/json" -> "application/json"
      },
      body: JSON.stringify(newuser)
    })
      .then(res => res.json())
      .then(data => console.log(data))
    console.log(newuser)
    localStorage.setItem("users", JSON.stringify(newuser))
  };

  return (
    <div>
      <div className="TestsContext">
        <h4 className="my-2">Test nomi</h4>
        <div className="Tests">
          {data.map((el) => (
            <div className="Test" key={el.id}>
              <h4>{el.savol}</h4>
              <button onClick={() => javoblar('a', el.javob, el.id)}>a) {el.a}</button>
              <button onClick={() => javoblar('b', el.javob, el.id)}>b) {el.b}</button>
              <button onClick={() => javoblar('c', el.javob, el.id)}>c) {el.c}</button>
              <button onClick={() => javoblar('d', el.javob, el.id)}>d) {el.d}</button>
              <hr />
            </div>
          ))}
          <div className="end">
            <button className="btn btn-warning" onClick={topshirishBosildi}>
              Topshirish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testone;
