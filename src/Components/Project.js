import React, { useState } from 'react';

const Project = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="group relative w-[300px] h-[300px]">
      <div className="transition-all
      ">
        <div
          className={`flip-card-front ${
            isFlipped ? 'hidden' : 'block'
          } w-full h-full absolute transition-transform duration-500 ease-in-out transform-gpu`}
        >
 
         
          <div
            className="w-full h-full rounded-lg p-4 flex flex-col justify-center items-center cursor-pointer"
            onClick={toggleFlip}
          >
            <img
              className="w-[700px] h-[700px] object-cover rounded-lg transition-all duration-500 ease-in-out transform-gpu hover:scale-110 "
              src={item.image}
              alt=""
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        </div>
        <div
          className={`flip-card-back ${
            isFlipped ? 'block' : 'hidden'
          } w-full h-full  rounded-lg p-4 flex flex-col justify-center items-center cursor-pointer absolute transition-transform duration-500 ease-in-out transform-gpu `}
          onClick={toggleFlip}
        >
         
          <p>{item.name}</p>
          <div className="flex justify-center items-center">
            <a href={item.link} className='text-accent mt-5 p-2 bg-Green rounded-lg'>
              {item.site}
              
            </a>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Project;
