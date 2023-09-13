import React, { useEffect, useState } from 'react';
import { projectsNav } from '../data';  // import projectsNav here
import { projectsData } from '../data';  // import projectsData here
import Project from './Project';   // import Project component here

const Projects = () => { // Projects component here
  const [item, setItem] = useState({ name: "all" });  // set initial state of item here
  const [projects, setProjects] = useState([]);  // set initial state of projects here
  const [active, setActive] = useState(0);   // set initial state of active here

  useEffect(() => {
    if(item.name == 'all'){  // check if item.name is equal to 'All'
      setProjects(projectsData); 
    }
    else{
      const newProjects = projectsData.filter((project) => {  // filter projectsData here
        return project.category.toLowerCase() === item.name; 
      }); 
      
      setProjects(newProjects);  
      
    }
  }, [item]);  
  
const handleClick  = (e, index) => {   
  setItem({name: e.target.textContent.toLowerCase()});
}

  


  return (
    <div>
    <nav className='mt-12 max-w-xl mx-auto  text-center'>  
      <ul className=' flex  md:flex-row justify-evenly items-center text-white capitalize'>  
        {projectsNav.map((item, index) => (
          <li
            key={index}
            onClick={(e) => {
              handleClick(e, index)
              setActive(index);
            }}
            className={active === index ? 'active bg-gray-800 p-2 rounded-br-2xl transition-all duration-300 ease-in-out cursor-pointer' : 'transition-all duration-300 cursor-pointer m-2 p-2 gap-y-10  '}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>

    {/* // {project grid here} */}

    <section>
      <div className='grid grid-cols-1 object-cover w-full md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto mt-16'>
        {projects.map((item, index) => {
          return(
            <Project item = {item} key={item.id} />  // pass project as props here
            )
        })}
      </div>

    </section>

    </div>
  );
}

export default Projects;
