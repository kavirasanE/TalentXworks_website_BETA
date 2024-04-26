import React from 'react'
import Frame28 from "../../assets/Frame 28.svg"
const ComparsionChart = () => {
  return (
    <div>
    <table >
        <tr>
            <th className='w-96 text-start pb-5 text-lg'>Common pain areas</th>
            <th className='w-48 text-start pb-5'>FREELANCERS</th>
            <th className='w-48 text-start pb-5'>INHOUSE</th>
            <th className='w-48 text-start pb-5'></th>
        </tr>
        <tr>
            <td><p className='p-1 font-medium w-80  h-8 grad '> Affordable price with Experience</p></td>
            <td><img src={Frame28} className='h-14 w-24'/></td>
            <td><p className='bg-customOrange h-[31px] w-24'></p></td>
            <td><img src={Frame28} className='h-14 w-24'/></td>
        </tr>
        <tr>
            <td><p className='p-1 font-medium w-80  h-8 grad '>Security compliances</p></td>
            <td><p className='bg-customOrange h-[31px] w-24'></p></td>
            <td><img src={Frame28} className='h-14 w-24'/></td>
            <td><img src={Frame28} className='h-14 w-24'/></td>
        </tr>
        <tr>
            <td><p className='p-1 font-medium w-80  h-8 grad '> Reliablity Factor</p></td>
            <td><p className='bg-customOrange h-[31px] w-24'></p></td>
            <td><img src={Frame28} className='h-14 w-24'/></td>
            <td><img src={Frame28} className='h-14 w-24'/></td>
        </tr>
        <tr>
            <td><p className='p-1 font-medium w-80  h-8 grad '> Escalation Procedure</p></td>
            <td><p className='bg-customOrange h-[31px] w-24'></p></td>
            <td><img src={Frame28} className='h-14 w-24'/></td>
            <td><img src={Frame28} className='h-14 w-24'/></td>
        </tr>
        <tr>
            <td><p className='p-1 font-medium w-80  h-8 grad '> Time-Zone availablity</p></td>
            <td><p className='bg-customOrange h-[31px] w-24'></p></td>
            <td><p className='bg-customOrange h-[31px] w-24'></p></td>
            <td><img src={Frame28} className='h-14 w-24'/></td>
        </tr>
        <tr>
            <td><p className='p-1 font-medium w-80  h-8 grad '>Domain & Industry Expertise</p></td>
            <td><p className='bg-customOrange h-[31px] w-24'></p></td>
            <td><p className='bg-customOrange h-[31px] w-24'></p></td>
            <td><img src={Frame28} className='h-14 w-24'/></td>
        </tr>
    </table>
    </div>
  )
}

export default ComparsionChart