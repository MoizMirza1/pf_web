import React from "react";
import { services } from "../data";

const Service = () => {
  return (
    <section id="services" className=" bg-tertiary">
      <div className="container  py-24 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-20">
        <h2 className=" text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl flex justify-center mb-[5px]">
          Our ~&nbsp;
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
            Services
          </span>
        </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service) => (
            <div className="md:p-4 p-8 md:w-1/3 w-full " key={service.name}>
              <div className="flex rounded-lg h-full bg-gradient-to-t from-transparent to-slate-900 p-8 flex-col shadow-[0_10px_50px_rgba(80,_112,_184,_0.3)]">
                <div className="flex items-center mb-3"></div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    {service.name}
                  </h2>
                  <p className="leading-relaxed text-base">{service.desc}</p>
                  <a className="mt-3 text-accent inline-flex items-center ">
                    {service.icon}
                  
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
