import React from 'react'
import img1 from "../assets/Home/img1.png"
const Services = () => {
    return (
        <div>
            <div className="parallax"></div>
            <div style={{ height: "1000px", backgroundColor: "red", fontSize: "36px" }}>
                Scroll Up and Down this page to see the parallax scrolling effect.
                This div is just here to enable scrolling.
                Tip: Try to remove the background-attachment property to remove the scrolling effect.
            </div>
            <div className="parallax"></div>
        </div>
    )
}

export default Services


{/* <div className='relative'>
<div className=''>
    <img src={img1} className='absolute w-screen  -z-50'/>
    <div className='bg-white/80 fixed w-80 right-10 top-[500px]  flex flex-col '>
    <p>INDUSTRIES</p>
    <p>Take advantage of our deep sector knowledge, whatever your industry</p>
   <p>SEE OUR INDUSTRIES</p> 
    </div>
</div>
</div> */}