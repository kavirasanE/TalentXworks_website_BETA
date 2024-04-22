import React from 'react'
import insta from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
const Footer = () => {
    return (
        <div className='flex justify-between items-start pad bg-gray-100 py-10'>
            <p>Logo</p>
            <div className='text-gray-400 font-semibold flex flex-col gap-2'>
                <p>about us </p>
                <p>location </p>
                <p>partners </p>
            </div>
            <div className='text-gray-400 font-semibold flex flex-col gap-2'>
                <p>join us! </p>
                <p>services </p>
                <p>contact  </p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-gray-400 font-semibold '>Follow us</p>
                <p className='flex flex-row gap-14'>
                    <img src={linkedin} className='w-4' />
                    <img src={twitter} className='w-4' />
                    <img src={insta}  className='w-4'/>

                </p>
            </div>
        </div>
    )
}

export default Footer