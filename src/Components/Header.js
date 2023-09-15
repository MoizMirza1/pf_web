import React, { useEffect, useState } from 'react'
import logo from '../assets/img/My logo2.png'
import Nav from './Nav.js'
import NavMobile from './NavMobile.js'
import Socials from '../Components/Socials.js'


const Header = () => {

    const [bg, setBg] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50){
                setBg(true);
            } else {
                setBg(false);
            }
            
        })
    }, [])

    const logoSize = bg ? "h-12" : "h-14";

  return (
    <header className={`${bg ? "bg-dark-900 h-20" : "h-24 bg-black"} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 `}>
        <div className='container mx-auto flex items-center justify-between h-full '>

          {/* nav logo */}
        <a href="#">
          <img src={logo} alt="" className={`mr-2 ${logoSize}`}/>
        </a>

        {/* nav  */} 

        <div className='hidden lg:block'>
          <Nav/>
        </div>
        
        {/* socials */}

        <div className='hidden lg:block'>
          <Socials/>
        </div>
        
        {/* nav mobile */}
        <div className='block lg:hidden'>
            <NavMobile/>
          </div>


        </div>
    </header>

      
  )
}

export default Header