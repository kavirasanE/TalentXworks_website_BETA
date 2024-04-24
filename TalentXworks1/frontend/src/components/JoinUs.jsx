import React from 'react'
import joinus from "../assets/Home/joinus.png";
const JoinUs = () => {
    return (
        <div className='bg-customGreen'>
            <div className='flex flex-col lg:flex-row  items-end justify-between'>
            <div className=' flex flex-col  gap-5 items-start justify-start px-4 lg:px-60 py-10'>
                <p className='font-extrabold text-4xl '>Join us and Discover our most precious NFT</p>
                <p className='font-medium'>Nulla facilisi. Praesent molestie diam eu enim aliquet pellentesque.
                    Vestibulum consectetur vestibulum tristique. Sed purus neque,
                    maximus fermentum bibendum et, porta in sapien.</p>
                <button className='bg-black text-white rounded-full p-0.5 px-10'>Join Us</button>
            </div>
            <div className='flex items-end'>
                <img src={joinus} className='w-[1000px] h-48'/>
            </div>
            </div>
        </div>
    )
}

export default JoinUs