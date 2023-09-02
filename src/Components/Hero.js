import React from 'react'
import Myimg from "../assets/img/HeroImg.jpg";



const Hero = () => {

    

  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden  '>
    
    <div className='container mx-auto h-full text-white'>
      
      <div className='flex items-center h-full pt-8'>

         {/* left side */}

        <div className='flex flex-1 flex-col items-center lg:items-start'>
            <p className='text-accent lg:text-xl mb-[22px] text-2xl '>Hey, I'm Moiz 👋</p>
            <h1 className='text-4xl md:text-5xl leading-[44px] font-bold mb-[22px] md:leading-tight lg:leading-[1.2]'>I'm a MERN Stack Developer </h1>
            <p className='text-[15px] mb-[22px] text-gray-300'>I Build & Design Web Interfaces I have a passion for web development and love to create for web and mobile devices.</p>
            

            {/* Button */}

            <a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

<span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

<span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

<span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

<span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
<span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
<span class="relative uppercase">Work With Me</span>
</a>
            

                 {/* button */}


        </div>

        <div className='hidden lg:flex flex-1 justify-end items-end h-full  '>
          <img className='w-[550px] bg-accent-500 shadow-xl shadow-green-500/100  rounded-lg ring-2 ring-offset-1  contrast-150 saturate-150 ' src={Myimg} alt="" />
        </div>
      </div>

      

    </div>
      
   
        
         
    </section>
  )
}

export default Hero