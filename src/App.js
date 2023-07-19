import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/header'
import './App.css'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './Components/Courses/Courses'
import Mentors from './Components/Mentors/Mentors'
import Book from './Components/Book/Book'
import Test from './Components/test/test'
import Testone from './Components/test/testone/testone'
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/mentors' element={<Mentors />} />
        <Route path='/library' element={<Book />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test/title' element={<Testone />} />
      </Routes>
    </div>
  )
}

export default App