import React from 'react'
import { Parallax } from 'react-parallax';
import spaceStation from '../../img/spaceStation.jpeg'
const Para2 = () => {
    return (
        <Parallax className='image' blur={0} bgImage={spaceStation} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
            <div className='content'>
                <span className="img-txt ">a trip to Space</span>
            </div>
        </Parallax>
    )
}

export default Para2