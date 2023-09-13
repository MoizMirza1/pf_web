import React from 'react'

import ReviewSlider from './ReviewSlider'


const testimonial = () => {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className=" text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl flex justify-center mb-[5px]">
            Our &nbsp;
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
              Reviews & Testimonials
            </span>
          </h2>
          <p className="lg:w-2/4 mx-auto leading-relaxed text-base">
            We have worked with many clients and here are some of the reviews
            and testimonials from our clients.
          </p>
            <ReviewSlider/>

        </div>
      </div>
    </section>

  )
}

export default testimonial;