import React, { useEffect } from 'react';
// import parallaxImage1 from './images/parallax-image1.jpg';
// import parallaxImage2 from './images/parallax-image2.jpg';
import service1 from '../assets/Home/service1.png';
const Parallex = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach(element => {
        let scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-blue-400">
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-fixed parallax-bg"
          style={{ backgroundImage: `url(${service1})` }}
        ></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center bg-green-400 mt-4">
            <h1 className="text-3xl text-white mt-5">
              Welcome to Tailwind CSS Parallax Effect
            </h1>
            <p className="text-lg text-white mt-5 ml-4">
              Elevate your web design with stunning parallax effects using
              Tailwind CSS. Impress your visitors and create engaging user
              experiences with minimal effort. Whether you're a beginner or an
              experienced developer, Tailwind CSS makes it easy to implement
              parallax scrolling and bring your designs to life.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-fixed parallax-bg"
          style={{ backgroundImage: `url(${service1})` }}
        ></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl text-green-300">HTML</h1>
            <p className="text-lg text-white">
              Tailwind CSS is a utility-first CSS framework that allows you to
              build custom designs rapidly. With its intuitive class-based
              approach, you can easily create responsive and visually
              appealing layouts without writing custom CSS. Tailwind provides a
              comprehensive set of pre-built utility classes for styling
              elements, making it easy to customize every aspect of your design.
              Whether you're a beginner or an experienced developer, Tailwind
              CSS empowers you to create modern and beautiful websites with
              ease.
            </p>
          </div>
        </div>
      </div>
      <div className="h-96 bg-green-500 w-full">
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience the Parallax Effect
          </h2>
          <p className="text-lg text-white ml-4">
            Discover the mesmerizing world of parallax scrolling with Tailwind
            CSS. Create stunning visual effects and captivate your audience
            with immersive web experiences. Whether you're building a portfolio,
            showcasing products, or telling a story, parallax adds depth and
            intrigue to your website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parallex;
