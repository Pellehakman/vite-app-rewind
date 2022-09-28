import { Routes, Route } from 'react-router-dom'
import '../src/styles/variables.scss'
import Nav from './components/Nav'
import Home from './views/Home'
import Footer from './components/Footer'
const LOCAL_STORAGE_KEY = 'Match';
import jsonData from './data/data.json'
import { useState } from 'react'

import { Task } from './models/data'




function App() {



  return (
    <div className="app">
      <Nav />
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
