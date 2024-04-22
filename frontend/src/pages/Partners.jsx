import React from 'react'
import ServiceContainer from '../components/Services/ServiceContainer'
import PartnerContainer from '../components/Partners/PartnerContainer'
import TechExpertiseContainer from '../components/Partners/TechExpertiseContainer'

const Partners = () => {
    return (
        <div >
            <ServiceContainer />
            <div className='pad'>
                <p className='font-bold text-2xl py-10'>Core Partners & Alliances</p>
                <div className='grid grid-cols-3 gap-10 '>
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                </div>
            </div>
            <div className='bg-gray-200 pad'>
                <p className='font-bold text-2xl py-10'>Strategic Partners, Alliances, &
                    Technologies</p>
                <div className='grid grid-cols-3 gap-10 '>
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                    <PartnerContainer />
                </div>

                <p className='font-bold text-2xl py-10'>Complementary Partners and
                    Technology Expertise</p>
                   <div className='mt-10'>
                    <TechExpertiseContainer/>
                   </div>

            </div>

        </div>
    )
}

export default Partners