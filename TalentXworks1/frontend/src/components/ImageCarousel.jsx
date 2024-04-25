import React from 'react';
import ImageSlider from './ImageSlider';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import img1 from "../assets/Home/img1.png";
import img2 from "../assets/Home/img2.png";
import BannerImage from './BannerImage';
const ImageCarousel = () => {
    const data = [
        {
            head: "The",
            subhead: "TalentXworks",
            desc: "Driving Success, Empowering Small and Medium Enterprises with Cutting-Edge IT Solutions to Navigate Today's Digital Landscape",
            subdesc: "“Empowering SMEs with Innovative IT Solutions”",
            img1: img1,
            img2: img2
        },
        {
            head: "Another",
            subhead: "Example",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla lectus magna, eget suscipit tortor fermentum id.",
            subdesc: "“Lorem Ipsum”",
            img1: img1,
            img2: img2
        },
        {
            head: "Yet",
            subhead: "Another",
            desc: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            subdesc: "“Dolor Sit Amet”",
            img1: img1,
            img2: img2
        }
    ];
    const splideOptions ={
        perPage:1,
        perMove:1,
        type:'loop',
        rewind:true,
        keyboard:'global',
        gap:'2rem',
        pagination:false,
        padding:'rem',
        breakpoints:{
            1200:{perPage: 1},
            991:{perPage:1},
            768:{perPage:1},
            500:{perPage:1},
            425:{perPage:1},
        },
    };


    return (
        <div className='md:px-5'>
            <Splide options={splideOptions}>
                    {data.map((dat) => (
                <SplideSlide>
                        <div className='md:p-6 p-6'>
                            <div className='md:px-32 flex md:flex-row flex-col justify-between items-center'>
                                <div className='flex flex-col gap-5 md:w-[400px] '>
                                    <p className='font-extrabold text-xl md:text-5xl'> {dat.head} <br className='hidden'/> {dat.subhead}</p>
                                    <p className='font-bold text-xs md:text-xl'>{dat.desc}</p>
                                </div>
                                <BannerImage dat={dat}/>
                            </div>
                        </div>
                </SplideSlide>
                       
                       
                    ))}
            </Splide>
        </div>
    )
};

export default ImageCarousel;

