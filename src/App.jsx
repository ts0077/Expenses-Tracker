import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Myexpenses from './pages/Myexpenses'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/myexpenses' element= {<Myexpenses/>} />

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
