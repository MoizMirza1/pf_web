import React from "react";
import AboutImg from "../assets/img/AboutImg.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import MyCV from '../assets/Moiz Mirza CV.pdf'; 
// motion

import { motion } from "framer-motion";

//variant

// Define the text-stroke style object

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  const links = [
    { name: 'Requirement',  },
    { name: 'Designing',  },
    { name: 'Development',  },
    { name: 'Test & Review',  },
  ]
  const stats = [
    { name: 'Year of Experience', value: '2' },
    { name: 'Number of Projects', value: '50+' },
    { name: 'Satisfied Clients', value: '40+' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]

  return (
    <section id="about" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
          src={AboutImg}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About me</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          "I'm Making Frontend Website Using React,Javascript with the help of
            tailwind Css"
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 cursor-default">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300 ">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white ">{stat.value}</dd>
              </div>
            ))}
            <div className="flex justify-center mt-10">
          <a
            href={MyCV}
            download='MoizMirza_CV.pdf'
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span class="w-48 h-48 rotate-[-40deg] bg-accent absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Download Resume
            </span>
          </a>
          </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
