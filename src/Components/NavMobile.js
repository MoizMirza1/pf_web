import React, { useState } from "react";

// import navigation data
import { navigation } from "../data";
// import icons

import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

// import logo
import logo from '../assets/img/My logo.png'

// import Component
import Socials from "./Socials";

// import Framer Motion

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  //framer motion variants

  const circleVariants = {
    hidden: {
      opacity: 0,
      scale: 1,
    },
    visible: {
      opacity: 1,
      scale: 100,
      transition: {
        type: "spring",
        stifness: 160,
        damping: 30,
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,

    },

    visible: {
      opacity: 1,
      y: 10,
      transition: {
        type: "spring",
        stifness: 160,
        
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="relative">
      <div className="cursor-pointer text-gray-300" onClick={()=> setIsOpen(true)}>
        <BiMenuAltRight className="text-3xl" />
      </div>
       
      {/* motion circle */}

      <motion.div
      variants={circleVariants}
      initial='hidden'
      animate={isOpen ? 'visible' : 'hidden'}
      className="w-4 h-4 rounded-full bg-Green fixed top-0 right-0"
      >
      </motion.div>

      {/* motion ul */}

      <motion.ul
      variants={ulVariants}
      initial='hidden'
      animate={isOpen ? 'visible' : 'hidden'}
      className={`${isOpen ? "right-0" : "right-full"} fixed top-0 bottom-0 w-full flex flex-col
      justify-center items-center transition-all duration-300 overflow-hidden`}
      >
              {/* motion close */}

      <div  className="text-xl cursor-pointer absolute top-8 right-8" onClick={() => setIsOpen(false)}>
        <MdOutlineClose className="w-6 h-6 text-white"/>
      </div>

      {isOpen && (
        <div className="absolute top-8 left-8">
         <img src={ logo} alt="Logo" className="w-8 h-8" />
        </div>
      )}
      {
        
        navigation.map((navItem, index) => {
          return (
            
            <li key={index} className="text-accent uppercase text-base tracking-wider font-semibold my-6 cursor-pointer">
              <Link to ={navItem.href} smooth={true} duration={500} offset={-70}>{navItem.name}</Link>
            </li>
          );
        }
        )
      }
        
      </motion.ul>






    </nav>
  );
};

export default NavMobile;
