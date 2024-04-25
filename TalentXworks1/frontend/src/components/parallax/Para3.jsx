import React from 'react'
import { Parallax } from 'react-parallax';
import Satellite from "../../img/satellite.jpeg"
const Para3 = () => {
    return (
        <Parallax className='image' blur={0} bgImage={Satellite} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
            <div className='content'>
                <span className="img-txt">a trip to Space</span>
            </div>
        </Parallax>
    )
}

export default Para3