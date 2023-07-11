import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Mentors from './Components/Mentors/Mentors'
import {Routes, Route} from 'react-router-dom'
import Courses from './Components/Courses/Courses'
import Students from './Components/Students/Students'
import Home from './UserShowPage/HomePage/Home'
import CourseTyping from './Components/CourseTyping/CourseTyping'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Mentors />} />
        <Route path='/admin/courses' element={<Courses />} />
        <Route path='/admin/students' element={<Students />} />
        <Route path='/admin/message' element={<CourseTyping />} />
      </Routes>
    </div>
  )
}

export default App