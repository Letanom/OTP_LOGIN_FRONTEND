import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Headers from './components/Headers'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Otp from './pages/Otp'



const App = () => {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='*' element={<Error />} />


      </Routes>
    </>
  )
}

export default App