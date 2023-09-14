import React from "react";
import { social } from "../data";
import logo from "../assets/img/My logo.png";

const Footer = () => {
  return (
    <section className="bg-tertiary lg:py-12 py-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mx-auto lg:mr-12 space-y-6 lg:space-y-0">
          {/* Logo*/}
          <div className="flex justify-start items-center cursor-default">
            <img src={logo} alt="logo" className="w-20 h-20" />
          </div>

          {/* Social icons  */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { icon, href } = item;
              return (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-accent transition duration-300 ease-in-out"
                >
                  {icon}
                </a>
              );
            })}
          </div>

            {/* Navigation */}
          <div className="flex space-x-6 items-center justify-center hidden lg:block">
            <a
              href="#home"
              className="text-gray-400 hover:text-accent transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-accent transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-gray-400 hover:text-accent transition duration-300 ease-in-out"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-accent transition duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="#Reviews"
              className="text-gray-400 hover:text-accent transition duration-300 ease-in-out"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-accent transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>

          { /* Copyright */}
            

        </div>
        <hr className="my-8 border-gray-600" />
            <div className="flex justify-center items-center cursor-default mt-0 lg:mt-2 font-bold">
                <p className="text-gray-400 text-sm">
                    © Moiz Mirza.  All Rights Reserved (2023)
                </p>
            </div>
      </div>
    </section>
  );
};

export default Footer;
