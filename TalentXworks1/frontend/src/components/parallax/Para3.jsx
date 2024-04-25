import React from 'react'
import { Parallax } from 'react-parallax';
import Satellite from "../../img/satellite.jpeg"
const Para3 = () => {
    return (
        <Parallax className='image' blur={0} bgImage={Satellite} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content '>
          <div className="img-txt w-[500px] h-[450px] transform  -skew-x-12">
            <div className=' mt-20 mx-10 '>
              <p className='font-bold tracking-wider text-purple-700'>CAREERS
</p>
              <p className='text-3xl  font-extrabold py-4 px-2'>We are home to bold and reliable minds</p>
              <p>They’re balanced forces – the yin  and yang of business innovation – able to mutually thrive through  smart teamwork In our company, “bold” and  “reliable” play on the same team.

If you want to rise to the challenge …</p>
              <p className='font-bold text-md py-5 '>Join Us {"-->"}</p>
            </div>
          </div>
        </div>
      </Parallax>
    )
}

export default Para3