import React from 'react'
import { Parallax } from 'react-parallax';
import spaceStation from '../../img/spaceStation.jpeg'
const Para2 = () => {
  return (
    <Parallax className='image' blur={0} bgImage={spaceStation} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
      <div className='content2 '>
        <div className="img-txt2 w-[500px] h-[450px] transform  skew-x-12">
          <div className=' mt-20 ml-10 '>
            <p className='font-bold tracking-wider text-purple-700'> OUR PRODUCTS</p>
            <p className='text-3xl  font-extrabold py-4 px-2 flex flex-col gap-2 justify-end items-start'>
              <span><span className='font-light text-xs rounded-full mx-3 p-1' style={{ background: "#82CBAC" }}>01</span>Faciliteasy</span>
              <span> <span className='font-light text-xs rounded-full mx-3 p-1' style={{ background: "#FF7F96" }}>02</span>Integeration accelorator</span>
              <span> <span className='font-light text-xs rounded-full mx-3 p-1' style={{ background: "#EAD71B" }}>03</span>Pattern Management System</span>
              <span><span className='font-light text-xs rounded-full mx-3 p-1' style={{ background: "#8BEAFF" }}>04</span>Low Code No Code</span>
            </p>
            <p className='font-bold text-md py-5'>SEE OUR INDUSTRIES {"-->"}</p>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Para2