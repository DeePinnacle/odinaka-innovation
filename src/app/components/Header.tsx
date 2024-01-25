'use client'
import React from 'react';
import Logo from './Logo';
import Toggle from './Toggle';
import Navbar from './Navbar';
import { useState } from 'react';
const Header = () => {
  const [ toggle, setToggle ] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className='Navbar'>    
      <div className='flex flex-row justify-between items-center bg-blue-100 p-2 md:hidden'>
        <Logo />
        <Toggle handleToggle = { handleToggle } />
      </div>
      {/* toggle */}
      <div className = { `${ toggle ? 'block' : 'hidden'}` } >
        <Navbar />
      </div>
      {/* Large screen view */}
      <div className='hidden md:block'>
        <Navbar />
      </div>
    </div>
  )
}

export default Header