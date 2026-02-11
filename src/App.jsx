import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Formulario from './components/Formulario'
import Parque from './components/Parque'

function App() {
  // run with npm run dev

  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/formulario">Formulario</Link>
        <Link to="/parque">Parque</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/parque" element={<Parque />} />
      </Routes>
    </>
  )
}

export default App
