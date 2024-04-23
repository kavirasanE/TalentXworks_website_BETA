import React from 'react'
import vector2 from "../../assets/Vector 2.svg";
import boxborder from "../../assets/Boxborder.svg";
const ExpertInContainer = () => {
    return (
        <div className='bg-customOrange pad text-white'>
            <p className='text-4xl pt-10  font-bold'>We are experts in</p>
            <p className='pt-4 font-semibold '>At TalentXWorks™, we lead the charge in technological innovation, leveraging the expertise of our skilled teams comprising technology experts, innovators, strategists, project managers, and developers.    </p>
            <div className='py-10'>

            <div className='p-5 expertgrad  flex flex-row '>
                <div className='w-full pb-10 rounded-2xl'>
                    <p className='flex  flex-row justify-start items-start'>
                        <img src={vector2} className='w-4' />
                        <p className='relative'>
                            <img src={boxborder} className='w-52' /> <span className='text-xl font-bold absolute w-40 -bottom-7 left-2 h-14 '>Dedicated experts</span>
                        </p>
                    </p>
                </div>
                <div className='w-full pb-10 rounded-2xl'>
                    <p className='flex  flex-row justify-start items-start'>
                        <img src={vector2} className='w-4' />
                        <p className='relative'>
                            <img src={boxborder} className='w-52' /> <span className='text-xl font-bold absolute w-40 -bottom-7 left-2 h-14 '>Product
Engineering</span>
                        </p>
                    </p>
                </div>
                <div className='w-full pb-10 rounded-2xl'>
                    <p className='flex  flex-row justify-start items-start'>
                        <img src={vector2} className='w-4' />
                        <p className='relative'>
                            <img src={boxborder} className='w-52' /> <span className='text-xl font-bold absolute  -bottom-7 left-2 h-14 '>Enterprise Digital Transformation</span>
                        </p>
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ExpertInContainer