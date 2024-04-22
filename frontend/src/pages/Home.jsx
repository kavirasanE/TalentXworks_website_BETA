import React, { useState, useEffect } from 'react';
import ServiceContainer from '../components/ServiceContainer'
import Legend from '../components/Legend'
import MoveText from '../components/Home/MoveText';
import Container from '../components/Home/Container';
import WeAssist from '../components/Home/WeAssist';
import About from '../components/Home/About/About';

const Home = () => {
    const [rowreverse,setRowreverse] =useState(true)
    return (
        <div>
            <ServiceContainer />
            <div className='bg-black flex justify-between items-center text-white px-20 py-10'>
                <p className='font-semibold text-center text-4xl  uppercase  w-[450px]  '>Deliver better to
                    becoming Hero</p>
                <button className='bg-white text-black rounded-full  p-1 px-4'>Know about Us</button>
            </div>
            <div className='pad flex flex-row justify-between items-start pt-20 gap-10'>
                <p className='font-bold text-xl'>Our IT services and consliting will
                    take your business to the next level</p>
                <p className='flex flex-col justify-center items-start gap-10 '>Provide IT services to hundreds of SME
                    customers across a diverse range of sectors. <button className='bg-black text-white p-1 px-4 rounded-full'>Learn More</button></p>
            </div>
            <Legend />

            <div className='pad flex flex-row justify-end items-start pt-10 gap-60'>
                <p className='text-customOrange text-5xl font-bold w-[400px]'>Hi.<br /> We are the TalentXworks group.</p>
                <div className='flex flex-col gap-5'>
                    <p className='font-bold'>WHAT WE DO</p>
                    <p className='font-bold'>We will help you overcome your technology challenges</p>
                    <p >
                        <li>Our top-tier IT solutions are designed to enhance efficiency and drive transformation.</li>
                        <li>Optimize your data to make more informed decisions.</li>
                        <li>Our intelligent solutions drive revenue growth by streamlining business processes and workflows. </li>
                        <li>Safeguard your business using our cutting-edge business continuity solutions. </li>
                    </p>
                    <button className='bg-black text-white rounded-full p-1 w-36'>Tell me more!</button>
                </div>
            </div>
            <Legend />
            <div className='bg-customOrange p-20 mt-5 '>
                <MoveText />
            </div>
            <Legend/>
            <div>
                <Container/>
            </div>
            <div>
                <Container rowreverse={rowreverse}/>
            </div>
            <div>
                <Container/>
            </div>
            <div>
                <Container rowreverse={rowreverse}/>
            </div>
            
             <div className='bg-gray-100'>
             <Legend/>
            <WeAssist/>
             <Legend /> 
             </div>
             <div>
                 <About/>
             </div>
        </div>

    )
}

export default Home