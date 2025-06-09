import React, { useEffect } from 'react';
import { motion as Motion } from "motion/react";


const Landingpage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = document.querySelector('.hero-section');
      if (hero) {
        hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[15%] w-64 h-64 border border-gray-800 rounded-full opacity-10"></div>
        <div className="absolute bottom-1/3 right-[10%] w-48 h-48 border border-gray-800 rotate-45 opacity-10"></div>
        <div className="absolute top-1/3 right-[20%] w-32 h-32 border border-gray-800 rounded-full opacity-10"></div>
      </div>

      <section className="hero-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 bg-cover bg-fixed overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center max-w-max">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-full mb-6">
              <span className="text-xs font-medium tracking-wider text-gray-300">
                TRANSFORMING DIGITAL EXPERIENCES
              </span>
            </div>
          </Motion.div>
          
          <Motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block mb-3">Elevate Your Digital</span>
            <span className="relative">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Presence
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></span>
            </span>
          </Motion.h1>
          
          <Motion.p
            className="text-base md:text-lg text-gray-300 max-w-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We create sophisticated digital experiences that blend cutting-edge technology with elegant design. Our solutions transform businesses and captivate audiences through minimalist aesthetics and powerful functionality.
          </Motion.p>
          
          <Motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-4 py-2 bg-white text-xl text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Download
            </button>
            <button className="px-4 py-2 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-xl">
              Contact Us
            </button>
          </Motion.div>
        </div>
        
        <Motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs mb-2 text-gray-400">Scroll to discover</span>
          <div className="w-7 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1">
            <Motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
          </div>
        </Motion.div>
      </section>
      
      <style jsx>{`
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
        }
        .hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30%;
          background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
          pointer-events: none;
        }
      `}</style>
      <div className='w-full h-[70vh] flex items-center justify-center bg-white'
      style={{ backgroundImage: 'url(/images/bgheropage.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-[95%] h-[95%] flex items-center justify-center relative'>
          <img
            src="/images/heroPhone-removebg-preview.png"
            alt=""
            className="w-[380px] md:w-[420px] lg:w-[500px] z-10"
            style={{ objectFit: "contain" }}
          />
          <img
            src="images/documentation-removebg.png"
            alt=""
            className="w-[120px] md:w-[160px] lg:w-[200px] absolute left-1/2 bottom-4 transform -translate-x-1/2 z-20 shadow-lg animate-bounce"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
     
    </div>
  );
};

export default Landingpage;