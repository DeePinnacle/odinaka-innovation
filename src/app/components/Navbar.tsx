import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='bg-zinc-900 p-3 md:bg-blue-100'> 
      <div className='md:flex flex-row justify-around align-middle'>
          <div className='p-3 w-24 hidden md:block'>
            <Link href='/' className='text-blue-500 font-bold text-3xl'>Odinaka</Link>
          </div>
          <ul className="Navbar-list md:flex md:flex-row md:items-center md:gap-4">
              <li className="list">
                  <Link href="/" className='anchor'>Home</Link>
              </li>
              <li className="list">
                <Link href="/About" className='anchor'>About</Link>
              </li>
              <li className="list">                
                <Link href="/Services" className='anchor'>Services</Link>
              </li>
              <li className="list">                
                <Link href="/Features" className='anchor'>Why Choose Us</Link>
              </li>
              {/* <li className="list">
                <Link href="/Products" className='anchor'>Products</Link>
              </li> */}
              {/* <li className="list">
                <Link href="/Contact" className='anchor'>Contact</Link>
              </li> */}
              <Link href='tel:08160478162'>
                <div className='hero-btn-2 bg-blue-500 w-full py-3 px-6 rounded-full '>
                  <p className='text-white text-center hover:text-blue-500'>Contact Us</p>
                </div>
              </Link>
          </ul>
      </div>
    </div>
  )
}

export default Navbar