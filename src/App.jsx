import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import { useParams } from 'react-router-dom'

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route 
    path='/'
    element={<Index />}
    />
      <Route 
    path='/About/:id/:name'
    element={<About />}
    />
      <Route 
    path='/Contact'
    element={<Contact />}
    />
  </Routes>
  </BrowserRouter>
  </>)
}

export default App
