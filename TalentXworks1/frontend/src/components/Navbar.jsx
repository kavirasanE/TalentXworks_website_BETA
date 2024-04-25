import React from 'react'
import { useState } from "react";
const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
        <div className='hidden lg:grid'>
        <div className='px-36 py-4'>
            <div className='font-bold border rounded-3xl bg-white/50 shadow-gray-200 shadow-md flex flex-row justify-between items-center p-4'>
            <p className='text-xl pr-10 text-grad'>Logo</p>
                <p>services</p>
                <p>Industries</p>
                <p>Products</p>
                <p>Company</p>
                <p>Resources</p>
                <p>Contact us</p>
                <p className='flex flex-row gap-2 text-xs'>
                    <span>f</span>
                    <span>i</span>
                    <span>m</span>
                </p>
                <button className='bg-black rounded-full text-white font-light  text-xs p-1 px-4'>Catch us</button>
            </div>
        </div>
        </div>
        <div className='lg:hidden'>
      {showSidebar ? (
        <button
          className=" flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className=" fixed z-30 flex items-center cursor-pointer right-10  top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[35vw] bg-black  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h3>
      </div>
    </div>
        </>
    )
}

export default Navbar


