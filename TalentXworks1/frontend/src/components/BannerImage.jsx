import React from 'react'

const BannerImage = ({dat}) => {
    return (
        <div>
            <div className='relative md:px-20 mb-10 pt-5 '>
                <img src={dat.img1} className='md:h-60 md:w-60  h-20 w-20 rounded-2xl' />
                <img src={dat.img2} className=' md:h-40 md:w-40  h-20 w-20 rounded-2xl md:top-[150px] md:left-[250px] top-20 left-12 absolute ' />
            </div>
        </div>
    )
}

export default BannerImage