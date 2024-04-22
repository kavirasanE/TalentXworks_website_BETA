import React from 'react'

const ClientApproachContainer = () => {
    return (
        <div>
        <div className='flex flex-row  justify-start items-start gap-20'>
            <div className='flex flex-col items-end justify-between gap-10'>
                <p className='p-1 font-bold w-96  h-8  '>Provides access to skills not available in-house</p>
                <p className='p-1 font-bold w-96  h-8  '>Saves Money</p>
                <p className='p-1 font-bold w-96  h-8  '>Free up resources to focus on core business</p>
                <p className='p-1 font-bold w-96  h-8  '>Adds scale to my IT resources</p>
                <p className='p-1 font-bold w-96  h-8  '>Improves flexibility in use of resources</p>
                <p className='p-1 font-bold w-96  h-8  '>Improves are ability to innovate</p>
            </div>
            <div className='flex flex-col items-start justify-between gap-10'>
            <div className='flex flex-col items-start justify-between gap-10'>
            <p className='p-1 font-medium w-80  h-8 grad '></p>
            <p className='p-1 font-medium w-64  h-8 grad '></p>
            <p className='p-1 font-medium w-64  h-8 grad '></p>
            <p className='p-1 font-medium w-60  h-8 grad '></p>
            <p className='p-1 font-medium w-40  h-8 grad '></p>
            <p className='p-1 font-medium w-24  h-8 grad '></p>
            </div>
            <div className='flex flex-row justify-between items-center w-80 text-gray-400 text-xs font-bold'>
                <p>0%</p>
                <p>10%</p>
                <p>20%</p>
                <p>30%</p>
                <p>40%</p>
                <p>50%</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ClientApproachContainer