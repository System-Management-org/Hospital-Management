// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/dashboard'
import Frontdesk from './pages/FrontDesk'
import Admin from './pages/admin'
import Cashier from './pages/cashier'
import Doctor from './pages/doctor'
import Login from './pages/login'
import Nurse from './pages/nurse'
import Welcomepage from './pages/welcome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CheckIn from './pages/check_in'
import Registeration from './pages/Registration'
import Appointments from './pages/appointments'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcomepage/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='Doctor' element={<Doctor/>}/>
      <Route path='Nurse' element={<Nurse/>}/>
      <Route path='Frontdesk' element={<Frontdesk/>}/>
      <Route path='Admin' element={<Admin/>}/>
      <Route path='Cashier' element={<Cashier/>}/>
      <Route path='dash' element={<Dashboard/>}/>
      <Route path='checkin' element={<CheckIn/>}/>
      <Route path='register' element={<Registeration/>}/>
      <Route path='apt' element={<Appointments/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
