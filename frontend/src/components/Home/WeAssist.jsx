import React from 'react'

const WeAssist = () => {
  return (
    <div className='pad'>
      <div className='flex flex-row justify-between items-center py-6'>
        <p className='text-customOrange font-bold text-5xl'>We Assist</p>
        <p>People who we are dedicated to work for<br />
          to make them grow.</p>
      </div>
      <div className='grid grid-cols-3 gap-10 my-5 '>
        <div className='flex flex-col  justify-center items-center text-center gap-2 '>
          <p className='bg-gray-300 rounded-lg w-72 h-40'>  </p>
          <p className='font-bold flex flex-col text-xl pt-5'>Start Ups
            <span className='text-black/40 font-light text-xs py-1'>Worked with more than 50+ tech startups agencies and companies for their customized business needs.</span>
            <span className='text-xs font-normal h-20'>We empower startups with our expertise at every stage. Whether yours is at the seed-stage or expansion stage we are with you through to the end !</span>
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-2 '>
          <p className='bg-gray-300 rounded-lg w-72 h-40 '>  </p>
          <p className='font-bold flex flex-col text-xl pt-5  '>Enterprises
            <span className='text-black/40 font-light text-xs py-1'>we assist large enterprises and SMEs by delivering enterprise grade business solutions and services.</span>
            <span className='text-xs font-normal h-20'> We transform the way large enterprises and SMEs carry out their core business operations.We streamline the activities and bridge the gap between businesses and customers.</span>
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-2'>
          <p className='bg-gray-300 rounded-lg w-72 h-40'>  </p>
          <p className='font-bold flex flex-col text-xl pt-5'>Agencies
          <span className='text-black/40 font-light text-xs py-1'>We work with Independent Software Vendors, IT companies..</span>
          <span className='text-xs font-normal h-20'>We collaborate with agencies and work with them on a project-basis or render our dedicated developers and help them deliver their end-client projects.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeAssist