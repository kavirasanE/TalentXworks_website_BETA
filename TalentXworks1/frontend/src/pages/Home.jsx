import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import JoinUs from '../components/JoinUs'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import ImageCarousel from '../components/ImageCarousel'
import Services from '../components/Services'
import OurServices from '../components/OurServices'
import Parallex from '../components/Parallex'
import Demo from './Demo'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <ImageSlider/> */}
      <div>
        <ImageCarousel />
      </div>
      <p className='font-bold text-2xl text-center pt-10'>Our Services </p>
        <OurServices />
      <div>
        <Demo />
      </div>
      <Footer />
    </div>
  )
}

export default Home