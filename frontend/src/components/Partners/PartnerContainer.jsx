import React from 'react'
import aws from "../../assets/aws_coloured.svg";
const PartnerContainer = () => {
    return (
        <div className=' '>
            <div className='border-t border-black'></div>
            <p className='font-light text-xs'>Cloud Native Apps / Data & AI / Cloud Infra / IoT</p>
            <div className='flex flex-col gap-10 pt-10 justify-start items-start'>
                <img src={aws} className=" h-[50px] "/>
                <p className='font-light text-sm  w-52'>Amazon Web Services offers a broad set
                    of global cloud-based products
                    including compute, storage, databases,
                    analytics, networking, mobile, developer
                    tools, management tools, IoT, security,
                    and enterprise applications: on-
                    demand, available in seconds, with pay-
                    as-you-go pricing</p>
                <a className='underline font-semibold mb-10'>to the partner website</a>
            </div>
        </div>
    )
}

export default PartnerContainer