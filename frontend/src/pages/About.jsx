import React, { useState } from 'react'
import ServiceContainer from '../components/Services/ServiceContainer'
import Container from '../components/Container';
import Legend from '../components/Legend';
// import WorksdoneContainer from '../components/Services/WorksdoneContainer'
// import Legend from '../components/Legend'

import Frame26 from "../assets/Frame 26.png"
import ComparsionChart from '../components/About/ComparsionChart';
import ClientApproachContainer from '../components/About/ClientApproachContainer';
import ReachUs from '../components/About/ReachUs';
import Footer from '../components/Footer';


const About = () => {
    const [rowreverse, setRowreverse] = useState(true)
    return (
        <div>
            <ServiceContainer />
            <p className='font-extrabold text-center text-5xl py-10'>Works done</p>
            <Legend />
            <Container />
            <Legend />
            <Container rowreverse={rowreverse} />
            <Legend />
            <Container />
            <div>
                <img src={Frame26} />
            </div>
            <div className='pad'>
                <p className='text-4xl py-10 font-bold'>Comparison Chart</p>
                <p className='font-medium'>We helps you to upgrade your software development capabilities with experienced & top-notch software experts which helps your product to go to market faster.</p>

                <div className='pt-10'>
                    <ComparsionChart />
                </div>
            </div>
            <Legend/>
            <div className='pad'>
                <p className='text-4xl py-8 font-bold'>We Don’t Say It!!</p>
                <p className='font-medium '>Top reasons why companies outsource Information Technology (IT) services worldwide</p>
                <div className='pt-10'>
        <ClientApproachContainer/>
                </div>
               
            </div>
            <div className='bg-customOrange pad'>
            <p className='text-4xl py-8 font-bold'>Reach us</p>
                    <ReachUs/>
                </div>
                <Footer/>
        </div>

    )
}

export default About