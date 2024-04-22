import React from 'react'
import AboutContainer from './AboutContainer'

const About = () => {

    return (
        <div className='pad'>
            <div className='grid grid-cols-2  items-center border-2 border-black gap-x-40  '>
                <p className='text-customOrange font-bold text-5xl w-80 h-40 my-8'>What people say about
                    TalentXworks</p>
                <AboutContainer />
            </div>

        </div>
    )
}

export default About