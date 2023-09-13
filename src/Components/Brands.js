
import React from "react";
import { brands } from "../data";

const Brands = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700  py-24 sm:py-12">
    <div className="mx-auto max-w-8xl px-6 lg:px-5">
      <h2 className="text-center text-lg font-semibold leading-8 text-gray-200 underline underline-offset-4">
        Most Trusted Brands
      </h2>
      <div className="mx-auto mt-8 grid max-w-lg grid-cols-3 items-center gap-x-10 gap-y-10 sm:max-sm sm:grid-cols-6 sm:gap-x-10 lg:mx-[200px] lg:max-w-none lg:grid-cols-5">
      {brands.map((brand, index) => {
          return (
            <div key={brand} className=" ">
              <img
                className="col-span-2 max-h-14 w-full object-contain lg:col-span-2 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out "
                src={brand.img}
                alt={`Brand ${index}`}
              />
             
            </div>
          );
        })}

      </div>
    </div>
  </div>
  );
};

export default Brands;