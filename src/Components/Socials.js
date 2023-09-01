import React from 'react'
import {social} from '../data.js'


const Socials = () => {
  return (
    <div className='flex space-x-6'>
      {social.map((item, index) => {
        return (
          <li key={index} className='flex justify-center items-center text-accent'>
            <a className='text-lg' href={item.href}>
              {item.icon}
            </a>
          </li>
        )
      })
      }
    </div>
  )
}

export default Socials;