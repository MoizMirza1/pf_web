import React from 'react';
import { skills } from '../data';
import ProgressBar from "@ramonak/react-progress-bar";
import SkillCss from '../Components/Skills.css'



const Skills = () => {
    
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 flex justify-center mb-10"><span className='text-accent'>S</span>kills</h2>
        <div className="flex flex-wrap mx-4 align-center">
           
          {skills.map((skill) => (
            
            <div className="w-full md:w-1/3 px-4 mb-8" key={skill.id}>
                <div className="flex items-center mb-2">
                    <h4 className="text-sm font-bold">{skill.name}</h4>
                </div>

                <ProgressBar completed={skill.level} bgColor={skill.color} labelColor={skill.txtColor} height="15px" transitionDuration='2s' animateOnRender = "true" maxCompleted={100} baseBgColor='#cfcaca' />
              <div className="flex">
                <div className="w-1/3 flex justify-end mt-0 p-2">
                  <img className="w-1/2 m-5" src={skill.image} alt={skill.img} />
                </div>
                <div className="flex items-center">
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
