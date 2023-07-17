import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/header'
import './App.css'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './Components/Courses/Courses'
import Mentors from './Components/Mentors/Mentors'
import Spinner from './Components/Spinner/Spinner'
import Book from './Components/Book/Book'
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/mentors' element={<Mentors />} />
        <Route path='/library' element={<Book />} />
      </Routes>
    </div>
  )
}

export default App