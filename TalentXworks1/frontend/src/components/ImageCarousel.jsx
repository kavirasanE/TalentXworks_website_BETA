import React from 'react';
import ImageSlider from './ImageSlider';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import img1 from "../assets/Home/img1.png";
import img2 from "../assets/Home/img2.png";
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
        
    ];
    
    const splideOptions = {
        perPage: 1,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
            1200: { perPage: 1 },
            991: { perPage: 2.3 },
            768: { perPage: 2 },
            500: { perPage: 1.3 },
            425: { perPage: 1 },
        },
    };
    return (
        <div>
            <Splide options={splideOptions}>
                <SplideSlide>
                    <ImageSlider data={data} />
                </SplideSlide>
            </Splide>
        </div>
    )
};

export default ImageCarousel;

