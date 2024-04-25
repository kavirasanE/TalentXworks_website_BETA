import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import JoinUs from '../components/JoinUs'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
// import ImageCarousel from '../components/ImageCarousel'
import Services from '../components/Services'
import OurServices from '../components/OurServices'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <ImageSlider/>
    {/* <ImageCarousel/> */}
    <JoinUs/>
    <div>
      <OurServices/>
    </div>
    <div>
        <FAQ/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home