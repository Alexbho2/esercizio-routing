import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import Quiz from './pages/Quiz'
import PaginaCerca from './pages/searchPages'
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
    path='/About/:id/'
    element={<About />}
    />
    
      <Route 
    path='/Contact'
    element={<Contact />}
    />

    <Route 
    path='/Quiz'
    element={<Quiz />}
    />
    <Route 
    path='/searchPages'
    element={<PaginaCerca />}
    />
  
  </Routes>
  </BrowserRouter>
  </>)
}

export default App
