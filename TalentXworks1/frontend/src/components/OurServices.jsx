import React from 'react'
import service1 from "../assets/Home/service1.png"
const OurServices = () => {
  return (
    <div className='p-5'>
    <div className='w-80'>
        <div className='hover:-translate-y-6  translate-transform duration-500 '>
            <img src={service1}/>
            <p className='hover:underline text-xl hover:text-purple-600 font-bold text-center '>Microsoft Dynamic 365 {"-->"}</p>
        <p className=' text-center py-2'>Microsoft Dynamics 365 integrates applications ranging from Customer Relationship Management (CRM) to Enterprise Resource Planning (ERP)</p>
        </div>
    </div>
    </div>
  )
}

export default OurServices