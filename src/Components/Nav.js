import React from 'react'

import {navigation } from '../data.js'

// React Router

import { Link } from 'react-scroll'

const Nav = () => {

  return (
    <nav>
        <ul className='flex space-x-8 capitalize text-[15px]'>
            {navigation.map((navItem, index) => {
                    return (
                        <li key={index} className='text-white hover:text-accent cursor-pointer
                        '>
                            <Link to={navItem.href} activeClass='active' spy={true} smooth={true} duration={500} className='transition-all duration 300'>
                                {navItem.name}
                            </Link>
                        </li>
                    )
                })
                            
            }

        </ul>
    </nav>
  )
}

export default Nav