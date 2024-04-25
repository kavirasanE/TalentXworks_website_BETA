import React from 'react'

const Footer = () => {
    return (
        <div className='lg:mx-20 pt-20 pb-10 px-10 shadow-gray-300 shadow-xl font-medium '> 
        <div className='flex flex-col lg:flex-row gap-5 justify-between items-start'>
            <div className='flex flex-col'>
                <p className='font-bold pb-5'>Join the Community</p>
                <p className='flex flex-row gap-4 items-center'>
                    <span>f</span>
                    <span>i</span>
                    <span>l</span>
                </p>
            </div>
            <div className='flex flex-col'>
                <p className='font-bold pb-4'>Site</p>
                <p>About us</p>
                <p>NFT</p>
                <p>Contact us</p>
            </div>
            <div className=' flex flex-col'>
                <p className='font-bold pb-4'>Utility</p>
                <p>Style guide</p>
                <p>Lincensing</p>
                <p>404</p>
            </div>
            <div className='flex flex-col lg:w-96'>
                <p className='font-bold text-xl pb-4'>Stay in the loop</p>
                <p className='font-medium text-sm pb-4'>Suspendisse sem neque, auctor a elementum ut, varius
                    vel leo. Donec diam arcu, porta et magna at</p>
                    <p > <span><input placeholder=' your email address' className='bg-gray-100 p-1 px-4 rounded-full '/></span> <button className='bg-black text-white my-2 p-1 px-5 rounded-full'>Signup</button></p>
            </div>
        </div>
        <div className='flex flex-row justify-between pt-20'>
            <p>© 2024 All rights reserved.</p>
            <p>Created by <span className='text-orange-400'> ZhaCode</span></p>
        </div>
        </div>
    )
}

export default Footer