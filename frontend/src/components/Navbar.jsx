import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-customOrange' >
    <div className='flex justify-end items-center p-10 gap-20 px-40'>
        <Link to="/">Home</Link>
        <Link to="/service">services</Link>
        <p>partners</p>
        <p>about</p>
    </div>
    <div className='border-t border-black  mx-24 '></div>
    </div>
  )
}

export default Navbar