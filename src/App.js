import React from 'react'
import './App.css'
import './index.css'
import Headers from './Components/Header'
import Hero from './Components/Hero'
import Brands from './Components/Brands'
import About from './Components/About'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import Service from './Components/Service'
import Testimonials from './Components/testimonials'




const App = () => {
  return (
    <div>
      <Headers/>
      <Hero/>
      <Brands/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Service/>
      <Testimonials/>

      
    
   
      <div style={{height:"2000px"}}></div>
    </div>
  )
}

export default App