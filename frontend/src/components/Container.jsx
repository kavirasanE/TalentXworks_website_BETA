import React from 'react'

const Container = ({rowreverse}) => {
    return (
        <div className='pad'>
            <div className={`flex ${rowreverse ? "flex-row-reverse" : " flex-row"} justify-between items-center gap-20 py-10`}>
                <p className='font-bold text-5xl'>OUR <br/>MISSION</p>
                <p className='flex flex-col justify-between items-start gap-5 w-[370px]'><span className='text-xl font-bold'>MISSION </span>Expanding upon our technologies and skills to deliver value to our 
                clients. This will be accomplished by prioritizing the convergence of our customers'
                 evolving requirements and the rapid 
                 pace of business and technological advancements.</p>
            </div>
        </div>
    )
}

export default Container