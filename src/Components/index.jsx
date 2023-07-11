<<<<<<< HEAD
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Mentors from './Components/Mentors/Mentors'
import {Routes, Route} from 'react-router-dom'
import Courses from './Components/Courses/Courses'
import Students from './Components/Students/Students'
function Index() {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<Mentors />} />
        <Route path='/admin/courses' element={<Courses />} />
        <Route path='/admin/students' element={<Students />} />
      </Routes>
    </div>
  )
}

=======
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Mentors from './Components/Mentors/Mentors'
import {Routes, Route} from 'react-router-dom'
import Courses from './Components/Courses/Courses'
import Students from './Components/Students/Students'
function Index() {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<Mentors />} />
        <Route path='/admin/courses' element={<Courses />} />
        <Route path='/admin/students' element={<Students />} />
      </Routes>
    </div>
  )
}

>>>>>>> 390505f205f7d24802d3333398f078cad3fd06c4
export default Index