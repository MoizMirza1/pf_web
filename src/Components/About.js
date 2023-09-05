import React from "react";
import AboutImg from "../assets/img/AboutImg.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// motion

import { motion } from "framer-motion";

//variant

// Define the text-stroke style object

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  return (
    <section className="bg-secondary" id="about" ref={ref}>
      <div className="container max-w-[1320px] mx-auto px-4 lg:px-0 flex flex-col sm:flex-row ">
        {/* left side */}
        <div className="basis-[45%]">
          <img
            className="object-cover w-[560px] my-10 md:mx-auto lg:mx-0 rounded-3xl transform scale-100 hover:scale-105 overflow-hidden  duration-300"
            src={AboutImg}
            alt="AboutImage"
          ></img>
        </div>

        {/* right side */}
        <div className="basis-[55%]  p-5">
          <h1 className="text-center text-4xl lg:text-5xl md:text-4xl font-primary cursor-default mb-5 mt-5 text-accent ">
            About Me
          </h1>
          <h3 className="text-center mb-16 italic underline underline-offset-[3px]">
            "I'm Making Frontend Website Using React,Javascript with the help of
            tailwind Css"{" "}
          </h3>
         
          <div className="flex gap-x-6 lg:gap-x-20 justify-center hover:scale-105 hover:transition-transform duration-300 ">
            <div className=" ease-in-out border-l-2 border-Sea rounded-3xl  inline-block  p-7  hover:transform hover:scale-105 hover:transition-transform duration-300">
              <div className="text-[40px] text-accent mb-4 text-center  ">
                {inView ? <CountUp start={0} end={2} duration={3} /> : null}+
              </div>
              <div className="font-primary text-sm tracking-[2px] text-center">
                Years of <br /> Experience
              </div>
            </div>
            <div className="border-y-2 border-Sea rounded-3xl  inline-block  p-7 hover:transform hover:scale-105 hover:transition-transform duration-300">
              <div className="text-[40px] text-accent mb-4 text-center ">
                {inView ? <CountUp start={0} end={15} duration={3} /> : null}+
              </div>
              <div className=" font-thin text-base tracking-[0px] text-center p-2 text-cyan-200">
                Number of <br /> Projects
              </div>
            </div>
            <div className="border-r-2 border-Sea rounded-3xl  inline-block  p-7 hover:transform hover:scale-105 hover:transition-transform duration-300">
              <div className="text-[40px] text-accent mb-4">
                {inView ? <CountUp start={0} end={50} duration={3} /> : null} +
              </div>
              <div className="font-bold text-sm tracking-[2px] text-center   ">
                Satisfied <br />
                Cients
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
          <a
            href="#_"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span class="w-48 h-48 rotate-[-40deg] bg-accent absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Download Resume
            </span>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
