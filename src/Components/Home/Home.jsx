import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from './../Header/header'
import News from '../News/News'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <div>
        <Navbar/>
        <Header />
        <News />
        <Footer />
    </div>
  )
}

export default Home