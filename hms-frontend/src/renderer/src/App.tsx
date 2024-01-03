// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Admin from './pages/admin'
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
      <Route path='doctor' element={<Doctor/>}/>
      <Route path='nurse' element={<Nurse/>}/>
      <Route path='admin' element={<Admin/>}/>
      <Route path='cashier' element={<Admin/>}/>
      {/* <Route path='pharm' element={<Admin/>}/>
      <Route path='labtech' element={<Admin/>}/> */}
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
