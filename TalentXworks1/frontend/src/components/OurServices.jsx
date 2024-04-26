import React from 'react'
import service1 from "../assets/Home/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
const OurServices = () => {
  const data = [
    {
      img: service1,
      head: "Microsoft Dynamic 365 {\"-->\"}",
      para: "Microsoft Dynamics 365 integrates applications ranging from Customer Relationship Management (CRM) to Enterprise Resource Planning (ERP)"
    },
    {
      img: service2,
      head: "Digital Transformation",
      para: "Salesforce CRM helps businesses manage customer relationships, streamline sales processes, and improve productivity."
    },
    {
      img: service3,
      head: "CRM Implementation",
      para: "Google Workspace offers a suite of productivity and collaboration tools, including Gmail, Google Drive, and Google Meet."
    },
    {
      img: service1,
      head: "Amazon Web Services (AWS)",
      para: "Amazon Web Services provides a wide range of cloud computing services, including computing power, storage, and databases, to help businesses scale and grow."
    },
    {
      img: service1,
      head: "Oracle ERP Cloud",
      para: "Oracle ERP Cloud offers a comprehensive suite of integrated applications for finance, project management, procurement, and more, to streamline business processes and drive innovation."
    },
    {
      img: service1,
      head: "Adobe Creative Cloud",
      para: "Adobe Creative Cloud provides a collection of industry-leading creative applications for design, photography, video editing, and more, empowering creatives to bring their ideas to life."
    },
    {
      img: service1,
      head: "HubSpot CRM",
      para: "HubSpot CRM is a powerful platform that helps businesses manage customer relationships, track sales activities, and automate marketing campaigns to drive growth and customer satisfaction."
    },
    {
      img: service1,
      head: "Zendesk",
      para: "Zendesk is a customer service software that enables businesses to provide support across multiple channels, including email, chat, phone, and social media, to deliver exceptional customer experiences."
    },
    {
      img: service1,
      head: "ServiceNow",
      para: "ServiceNow is a cloud-based platform that offers a wide range of IT service management (ITSM) and digital workflow solutions to help businesses improve efficiency, agility, and customer satisfaction."
    },
    {
      img: service1,
      head: "SAP S/4HANA",
      para: "SAP S/4HANA is an intelligent ERP suite that provides real-time insights, predictive analytics, and advanced automation to help businesses run their operations more efficiently and adapt to changing market demands."
    }
  ];
  const splideOptions = {
    perPage: 3,
    perMove: 1,
    speed: 4000,
    rewindSpeed: 2000,
    lazyLoad:true,
    interval: 6000,
    autoplay: true,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2 },
      768: { perPage: 2 },
      500: { perPage: 1 },
      425: { perPage: 1 },
    },
  };

  return (
    <div>
      <Splide options={splideOptions}>
        {data.map((item) => (
          <SplideSlide>
            <div className='lg:p-5 lg:pt-20 pt-10 my-10  '>
              <div className='lg:w-80 lg:h-96 h-[400px] hover:-translate-y-6 translate-transform duration-500 border-2 shadow-gray-500 shadow-2xl rounded-2xl'>
                <div className=' flex  flex-col justify-center items-center'>
                  <img src={item.img} className='w-36 h-36 my-10' />
                  <p className='hover:underline text-xl hover:text-purple-600 font-bold text-center '>{item.head}</p>
                  <p className=' text-center text-sm py-2'>{item.para}</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default OurServices