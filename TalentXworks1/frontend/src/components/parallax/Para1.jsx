import React from 'react'
import { Parallax } from 'react-parallax';
import Nasa from '../../img/nasa.jpg'
const Para1 = () => {
  return (
    <Parallax className='image' blur={0} bgImage={Nasa} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
      <div className='content '>
        <div className="img-txt w-[500px] h-[450px] transform  -skew-x-12">
          <div className=' mt-40 ml-10 '>
            <p className='font-bold tracking-wider text-purple-700'>INDUSTRIES</p>
            <p className='text-3xl  font-extrabold py-4 px-2'>Take advantage of our deep sector knowledge, whatever your industry</p>
            <p className='font-bold text-md py-5'>SEE OUR INDUSTRIES {"-->"}</p>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Para1