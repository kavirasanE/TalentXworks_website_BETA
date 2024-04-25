import React from 'react'
import { useState } from "react";
import f from "../assets/f.svg"
import i from "../assets/i.svg"
import l from "../assets/l.svg"
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className='hidden lg:grid'>
        <div className='px-36 py-4'>
          <div className='font-bold border rounded-3xl bg-white/50 shadow-gray-200 shadow-md flex flex-row justify-between items-center p-4'>
            <p className='text-xl pr-10 grad '>Logo</p>
            <p>services</p>
            <p>Industries</p>
            <p>Products</p>
            <p>Company</p>
            <p>Resources</p>
            <p>Contact us</p>
            <p className='flex flex-row gap-2 text-xs'>
              <span><img src={f} /></span>
              <span><img src={i} /></span>
              <span><img src={l} /></span>
            </p>
            <button className='bg-black rounded-full text-white font-light  text-xs p-1 px-4'>Catch us</button>
          </div>
        </div>
      </div>
      <div className='lg:hidden flex flex-row justify-between items-center'>
        {showSidebar ? (
          <button
            className=" flex text-2xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className=" fixed z-30 flex items-center cursor-pointer right-10  top-6"
            viewBox="0 0 100 80"
            width="20"
            height="20"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        )}

          <p className='py-5 px-5'>Logo</p>
        <div
          className={`top-0 right-0 w-[70vw] bg-black  p-10 pl-10 text-white fixed h-full z-40 flex flex-col justify-center items-center gap-10 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
            }`}
        >
          <p>services</p>
          <p>Industries</p>
          <p>Products</p>
          <p>Company</p>
          <p>Resources</p>
          <p>Contact us</p>
        </div>
      </div>
    </>
  )
}

export default Navbar


