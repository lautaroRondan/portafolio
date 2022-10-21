import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Contact from '../components/Contact'
import Proyects from '../components/Proyects'
import Technology from '../components/Technology'
import Footer from '../layout/Footer'
import Home from '../components/Home'
import { HeaderNav } from '../layout/HeaderNav'

const MyRoutes = () => {
  return (
    <div className="layout">
    <BrowserRouter>
      <HeaderNav />
      
      <Home/>
      <Proyects />
      <Technology />
      
        <Routes>
          <Route path='/' element={<HeaderNav/>}/>
          <Route path='/home'/>
          <Route path="/proyects" />
          <Route path="/technology" />
          <Route path="/contact" />
        </Routes>
        <Contact />
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default MyRoutes
