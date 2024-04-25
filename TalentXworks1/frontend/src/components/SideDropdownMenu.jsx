import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react';
const SideDropdownMenu = () => {
    const [openMinsteries, setOpenMinsteries] = useState(false)
    return (
        <div >
            <p className='
           border-black/50 w-full text-center
           cursor-pointer fixed flex top-20 left-10 justify-start items-center '
                onClick={() => setOpenMinsteries(!openMinsteries)}
            > Our Ministiries
                <RiArrowDropDownLine size={30}
                    className={` ${openMinsteries ? "rotate-180 transition-transform duration-500 ease-in-out"
                        : "rotate-360 transition-transform duration-500 ease-in-out"}`} />
            </p>
            {openMinsteries &&
                <div className='flex absolute flex-col justify-start items-start mt-7 top-20 right-1'
                    onClick={() => setOpenMinsteries(!openMinsteries)}
                >
                    <p to="chruchActivites" className='
           border-black/50 w-60 text-center py-2 cursor-pointer'>Chruch Activities</p>
                    <p to="TrustActivities" className='
           border-black/50 w-full text-center cursor-pointer py-2' >Trust Activities</p>
                    <p to="Childrenshome" className='
           border-black/50 w-full text-center cursor-pointer py-2' >Children's Home</p>
                </div>
            }
        </div>

    )
}

export default SideDropdownMenu