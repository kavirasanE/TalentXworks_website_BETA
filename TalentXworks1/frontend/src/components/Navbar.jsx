import React from 'react'
import { Flowbite } from 'flowbite-react'
const Navbar = () => {
    return (
        <div>

        <div className='  px-36 py-4'>
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
    )
}

export default Navbar

