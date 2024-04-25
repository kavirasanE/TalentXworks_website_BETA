// Parallax.js

import React ,{useRef} from 'react';
import service1 from "../assets/Home/service1.png"
import img1 from "../assets/Home/img1.png";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import OurServices from './OurServices';
const Parallex = () => {
    const ref = useRef();
  return (
    <div>
    <OurServices/>
    <Parallax pages={1} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}
               
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
        <div className='bg-red-400 absolute right-0  w-80 h-96'>
          <h2>Welcome to my website</h2>

        </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Parallex;



