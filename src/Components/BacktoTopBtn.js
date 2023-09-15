import React, { useEffect, useState } from "react";
//   import link
import { Link , animateScroll as scroll } from "react-scroll";

// import icons

import { AiFillCaretUp } from "react-icons/ai";
import { BiSolidUpArrowCircle } from 'react-icons/bi'; 

const BacktoTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY >  1200 ? setVisible(true) : setVisible(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  return visible &&  <button onClick={() => scrollToTop()} className="w-12 h-12 fixed right-8 bottom-12"><AiFillCaretUp className="w-10 h-10 
  text-white hover:text-green-600"/></button>
};

export default BacktoTopBtn;
