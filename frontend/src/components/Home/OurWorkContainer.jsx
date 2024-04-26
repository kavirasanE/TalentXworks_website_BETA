import React from 'react'
import Legend from '../Legend'
import Frame3 from "../../assets/Frame 3.png";
const OurWorkContainer = () => {
    return (
        <div>
            <Legend />
            <div className='grid grid-cols-3 gap-10 my-10 justify-center items-center'>
                <div className='flex flex-col  justify-center items-center text-center gap-2 '>
                    <img src={Frame3} className='bg-gray-300 rounded-lg w-72 h-40' />
                    <p className='font-bold flex flex-col text-xl pt-5'>Data analytics
                        <span className='font-medium text-xs py-4 flex flex-col justify-start items-start'>
                            <li>Business Analytics</li>
                            <li>Website Analytics</li>
                            <li>Advanced Analytics</li>
                        </span>
                    </p>
                </div>
                <div className='flex flex-col  justify-center items-center text-center gap-2 '>
                    <img src={Frame3} className='bg-gray-300 rounded-lg w-72 h-40' />
                    <p className='font-bold flex flex-col text-xl pt-5'>Support & Maintenance
                        <span className='font-medium text-xs py-4 flex flex-col justify-start items-start'>
                            <li>Error Fixing & Bug Rem</li>
                            <li>Capability Enhancem</li>
                            <li>Performance Upgrade</li>
                        </span>
                    </p>
                </div>
                <div className='flex flex-col  justify-center items-center text-center gap-2 '>
                    <img src={Frame3} className='bg-gray-300 rounded-lg w-72 h-40' />
                    <p className='font-bold flex flex-col text-xl pt-5'>Enterprise Solutions
                        <span className='font-medium text-xs py-4 flex flex-col justify-start items-start'>
                            <li>Intelligent platform serv</li>
                            <li>Cloud and Infrastructure Enterprise</li>
                            <li>Resource Plan</li>
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default OurWorkContainer