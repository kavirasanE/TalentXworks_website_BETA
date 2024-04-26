import React, { useState } from 'react'
import ServiceContainer from '../components/Services/ServiceContainer'
import Legend from '../components/Legend'
import WorksdoneContainer from '../components/Services/WorksdoneContainer'
import Footer from "../components/Footer"
import { ServiceweOffer } from '../components/Services/ServiceweOffer'
const Services = () => {
  const [containerreverse, setContainerreverse] = useState(true);
  return (
    <div>
      <ServiceContainer />
      <p className='font-extrabold text-center text-5xl py-10'>Works done</p>
      <Legend />
      <WorksdoneContainer />
      <Legend />
      <WorksdoneContainer containerreverse={containerreverse} />
      <Legend />
      <WorksdoneContainer />
      <Legend />
      <WorksdoneContainer containerreverse={containerreverse} />
      <Legend />
      <WorksdoneContainer />
      <Legend />
         <div>
          <ServiceweOffer/>
         </div>
      <Footer />
    </div>
  )
}

export default Services