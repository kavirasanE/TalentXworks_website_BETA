import React from 'react'
import { Parallax } from 'react-parallax';
import Satellite from "../../img/satellite.jpeg"
const Para3 = () => {
  return (
    <Parallax className='image' blur={0} bgImage={Satellite} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
      <div className='content '>
        <div className="img-txt lg:w-[500px] w-52  lg:h-[450px] transform -skew-x-12">
          <div className=' lg:mt-20 lg:ml-10 ml-2 p-2'>
            <p className='font-bold tracking-wider text-purple-700'>CAREERS</p>
            <p className='lg:text-3xl text-xl font-extrabold py-4 px-2'>We are home to bold and reliable minds</p>
            <p className='hidden lg:flex'>They’re balanced forces – the yin  and yang of business innovation – able to mutually thrive through  smart teamwork In our company, “bold” and  “reliable” play on the same team.

              If you want to rise to the challenge …</p>
            <p></p>
            <p className='font-bold lg:text-md text-sm py-5'>Join Us {"-->"}</p>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Para3
