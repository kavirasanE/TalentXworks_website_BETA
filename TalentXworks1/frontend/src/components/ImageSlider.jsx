import React from 'react'
import img1 from "../assets/Home/img1.png"
import img2 from "../assets/Home/img2.png"

const ImageSlider = () => {
    return (
        <div className='p-6'>

        <div className='px-32 flex flex-row justify-between items-center'>
            <div className='flex flex-col gap-10 w-[400px]'>
                <p className='font-extrabold text-5xl'> The <br /> TalentXworks</p>
                <p>Driving Success, Empowering Small and Medium Enterprises with Cutting-Edge IT Solutions to Navigate Today's Digital Landscape</p>
                <p className='font-bold'>“Empowering SMEs with Innovative IT Solutions”</p>
            </div>
            <div className='relative px-20 '>
            <img src={img1}  className='h-60 w-60 rounded-2xl'/>
                <img src={img2} className=' h-40 w-40 rounded-2xl top-[150px] left-[250px] absolute ' />
            </div>
        </div>
        </div>
    )
}

export default ImageSlider