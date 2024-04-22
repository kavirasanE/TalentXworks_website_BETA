import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-customOrange' >
    <div className='flex justify-end items-center p-10 gap-20 px-40'>
        <Link to="/" className='focus:text-white hover:text-white'>Home</Link>
        <Link to="/service" className='focus:text-white hover:text-white'>services</Link>
        <Link  to='/partners' className='focus:text-white hover:text-white'>partners</Link>
        <Link className='focus:text-white hover:text-white'>about</Link>
    </div>
    <div className='border-t border-black  mx-24 '></div>
    </div>
  )
}

export default Navbar