import React from 'react'
import './App.css'
import './index.css'
import Headers from './Components/Header'
import Hero from './Components/Hero'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Headers/>
      <Hero/>
      <Home/>
      <div style={{height:"2000px"}}></div>
    </div>
  )
}

export default App