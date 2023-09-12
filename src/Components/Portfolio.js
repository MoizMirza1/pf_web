import Project from './Projects'
import React from 'react'

const Portfolio = () => {
  return (
    <section className='section bg-primary min-h-[1400px]' id='portfolio'>
        <div className='container mx-auto px-4'>
        <h2 className=" text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl flex justify-center mb-[5px]"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 " >Portfolio</span> &nbsp; Projects. </h2>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center">  </p>
            

            <div className=''>

                <Project />
              
              

                </div>
      </div>
    </section>
  )
}

export default Portfolio