import React from 'react'
import { Parallax } from 'react-parallax';
import Nasa from '../../img/products9.jpg'
const Para1 = () => {
  return (
    <Parallax className='image' blur={4} bgImage={Nasa} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
      <div className='content'>
        <div className="img-txt lg:w-[500px] w-52  lg:h-[450px] transform -skew-x-12">
          <div className=' lg:mt-20 lg:ml-10 ml-2 p-2'>
            <p className='font-bold tracking-wider text-purple-700'>INDUSTRIES</p>
            <p className='lg:text-3xl text-xl font-extrabold py-4 px-2'>Take advantage of our deep sector knowledge, whatever your industry</p>
            <p className='font-bold lg:text-md text-sm py-5'>SEE OUR INDUSTRIES {"-->"}</p>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Para1