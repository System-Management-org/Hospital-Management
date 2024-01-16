// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Frontdesk from './pages/FrontDesk'
import Admin from './pages/admin'
import Cashier from './pages/cashier'
import Doctor from './pages/doctor'
import Login from './pages/login'
import Nurse from './pages/nurse'
import Welcomepage from './pages/welcome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
      {/* <Route path='pharm' element={<Admin/>}/>
      <Route path='labtech' element={<Admin/>}/> */}
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
