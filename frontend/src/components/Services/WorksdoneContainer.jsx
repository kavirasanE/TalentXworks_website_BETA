import React from 'react'

const WorksdoneContainer = ({containerreverse}) => {
    return (
        <div>
            <div className={`pad flex ${containerreverse ? 'flex-row-reverse' : 'flex-row' } justify-end items-start pt-10 gap-60`}>
                <p className={`${containerreverse && "text-end"} text-4xl font-bold w-[400px]`}>Digital Transformation</p>
                <div className='flex flex-col gap-5'>
                    <p className=''>We deliver comprehensive product engineering services to the automotive, aerospace, defense, railway, and energy industries. From design to certification, our cross-functional engineering teams ensure on-time, on-budget delivery of products, that meet end-user requirements.</p>
                    <p className='font-bold text-2xl'>Services</p>
                    <p >
                        <li>Model-based Systems Engineering</li>
                        <li>Advanced Materials & Processes</li>
                        <li>Mechanical Product Design & Engineering</li>
                        <li>Embedded Systems & Software</li>
                        <li>FPGA & Electronics</li>
                        <li>RAMS & ILS Engineering</li>
                        <li>Product & OT Cybersecurity</li>
                        <li>Product & Process Life Cycle Management</li>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorksdoneContainer