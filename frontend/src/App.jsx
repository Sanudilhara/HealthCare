import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyAppoinment from './pages/MyAppoinment'
import MyProfile from './pages/MyProfile'
import About from './pages/About'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappoinment' element={<MyAppoinment />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/about' element={<About />} />
        <Route path='/appoinment/:docId' element={<Appoinment />} />
      </Routes>
    </div>
  )
}

export default App
