import React from 'react';
import { brands } from '../data';

const Brands = () => {
  return (
    <section className="min-h-[146px] py-6 bg-tertiary flex items-center">
      <div className="w-full container mx-auto flex md:justify-between items-center flex-col lg:flex-row transition-all duration-500 justify">
        {brands.map((brand, index) => {
          return (
            <div key={brand} className="transform hover:scale-125 hover:rotate-6 transition-transform ease-in-out justify-between ">
              <img
                className="sm:w-[100px] w-[100px] my-12 rounded-lg shadow-xl"
                src={brand.img}
                alt={`Brand ${index}`}
              />
             
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
