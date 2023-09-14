import React from "react";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { contact } from "../data";

const Contact = () => {
  return (
    <section className="bg-tertiary">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className=" text-3xl font-extrabold text-sky-600 md:text-5xl lg:text-4xl flex justify-center mb-[5px]">
            Contact ~&nbsp;
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
              Me
            </span>
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            If you have any questions or want to work together, feel free to
            contact me.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            {/* info */}

            <div className="flex rounded-lg h-full bg-gradient-to-t from-transparent to-slate-900 p-8 flex-col shadow-[0_10px_50px_rgba(80,_112,_184,_0.3)]">
              {contact.map((item, index) => {
                const { icon, title, subtitle, description } = item;
                return (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row gap-x-4"
                  >
                    <div className="flex  w-8 h-8 items-center justify-center bg-green-900 m-10 mb-2  rounded-full text-accent">
                      {icon}
                    </div>
                    <div className="m-5">
                      <h4 className="font-body text-xl mb-1">{title}</h4>
                      <p className= 'mb-1 text-gray-300'>{subtitle}</p>
                      <p className = 'font-primary'>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          
          <div className="p-4 md:w-1/2 w-full">
            <div className="flex rounded-lg h-full bg-gradient-to-t from-transparent to-slate-900 p-8 flex-col shadow-[0_10px_50px_rgba(80,_112,_184,_0.3)]">
              <div className="flex items-center mb-3">
                <h2 className="text-white text-lg title-font font-medium">
                  Contact Form
                </h2>
              </div>
              <div className="flex-grow">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit="submit"
                  className="flex flex-col"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="flex flex-col mb-4">
                    <label className="mb-2 text-white text-lg">Name</label>
                    <div className="relative ">
                      <FiUser className="sm:block hidden absolute h-5 w-5 text-gray-500 left-[500px] top-1/2 transform -translate-y-1/2" />
                      <input
                        className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-accent text-base px-4 py-2"
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Name"
                        icon="FiUser"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="mb-2 text-white text-lg">Email</label>
                    <div className="relative">
                      <FiMail className="sm:block hidden  absolute h-5 w-5 text-gray-500 left-[500px] top-1/2 transform -translate-y-1/2" />
                      <input
                        className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-accent text-base px-4 py-2"
                        type="email"
                        name="email"
                        required
                        placeholder="Enter Email Address"
                        icon="EmailIcon"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="mb-2 text-white text-lg">Message</label>
                    <div className="relative">
                      <FiMessageSquare className=" sm:block hidden absolute h-5 w-5 text-gray-500 left-[500px] top-1/2 transform -translate-y-1/2" />
                      <textarea
                        className="pt-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none h-32 focus:border-accent text-base px-4 py-2 resize-none w-full"
                        name="message"
                        required
                        placeholder="Enter Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <button
                    className="text-white bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-accent-dark rounded-lg text-lg"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
