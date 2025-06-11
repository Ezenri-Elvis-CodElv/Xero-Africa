import React, { useState, useRef } from 'react';
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { FaApple, FaGooglePlay, FaArrowRight, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle wheel events for scroll-triggered navigation
  const handleWheel = (e) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    if (e.deltaY > 0 && currentIndex < 4) {
      setCurrentIndex(prev => prev + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  // Horizontal scroll boxes data
  const boxes = [
    {
      title: "User-Centric Design",
      description: "We prioritize your needs in every solution we create, ensuring intuitive interfaces and seamless experiences.",
    },
    {
      title: "Personalized Solutions",
      description: "Tailored approaches designed specifically for your unique business challenges and goals.",
    },
    {
      title: "Continuous Innovation",
      description: "Constantly evolving our methods to keep you ahead in a rapidly changing digital landscape.",
    },
    {
      title: "Transparent Collaboration",
      description: "Working with you at every step, ensuring alignment with your vision and objectives.",
    },
    {
      title: "Long-Term Partnership",
      description: "Building relationships that extend beyond projects to support your ongoing success.",
    }
  ];

  // Features data
  const features = [
    {
      title: "Seamless Experience",
      description: "Navigate your business operations with ease using our intuitive interface built for speed and efficiency.",
      route: "/features"
    },
    {
      title: "Real-Time Analytics",
      description: "Monitor your business performance with live data insights, enabling smarter and faster decision-making.",
      route: "/features"
    },
    {
      title: "Secure Cloud Storage",
      description: "Keep your data safe and accessible at any time from anywhere with our robust cloud solutions.",
      route: "/features"
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated team is always ready to assist you, ensuring your operations run smoothly without interruptions.",
      route: "/features"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Innovations",
      content: "Xero Africa has transformed how we manage our operations. The platform is intuitive and powerful.",
      rating: 5
    },
    {
      name: "David Mbeki",
      role: "Finance Director, Growth Corp",
      content: "The analytics tools have given us insights we never had before. Our decision-making process is now data-driven.",
      rating: 4
    },
    {
      name: "Amina Diallo",
      role: "Operations Manager, Logistics Plus",
      content: "Customer support is exceptional. They're always available when we need assistance.",
      rating: 5
    }
  ];

  // Handle download button click
  const handleDownload = () => {
    setShowModal(true);
  };

  // Handle horizontal scroll navigation
  const nextBox = () => {
    if (currentIndex < boxes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevBox = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 right-[10%] w-48 h-48 bg-cyan-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 right-[20%] w-32 h-32 bg-blue-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center max-w-4xl">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-700/50">
              <span className="text-blue-400 text-sm font-medium tracking-wider">
                TRANSFORMING DIGITAL EXPERIENCES
              </span>
            </div>
          </Motion.div>
          
          <Motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block mb-3">Elevate Your Digital</span>
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Presence
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
            </span>
          </Motion.h1>
          
          <Motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We create sophisticated digital experiences that blend cutting-edge technology with elegant design. Our solutions transform businesses through minimalist aesthetics and powerful functionality.
          </Motion.p>
          
          <Motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-medium rounded-lg transition-all duration-300 transform shadow-lg shadow-cyan-500/30 flex items-center justify-center min-w-[160px]"
              onClick={handleDownload}
            >
              Download App
            </Motion.button>
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact-us')}
              className="px-6 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Contact Us
            </Motion.button>
          </Motion.div>
        </div>
        
        <Motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs mb-2 text-cyan-400">Scroll to discover</span>
          <div className="w-7 h-10 rounded-full border-2 border-cyan-400 flex justify-center p-1">
            <Motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            />
          </div>
        </Motion.div>
      </section>

      {/* Phone Showcase */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <Motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Designed for <span className="text-cyan-400">Efficiency</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our mobile application combines sleek design with powerful functionality to streamline your business operations. Experience seamless integration across all your devices.
                </p>
                <button 
                  className="flex items-center gap-2 text-lg font-medium text-cyan-400 hover:text-cyan-300 transition"
                  onClick={() => navigate('/features')}
                >
                  Explore Features
                  <FaArrowRight className="mt-0.5" />
                </button>
              </Motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10">
                  <div className="w-64 h-[500px] bg-gray-800/30 backdrop-blur-sm rounded-[40px] border border-cyan-500/30 overflow-hidden shadow-2xl">
                    <div className="h-6 bg-gray-900/80 flex justify-center items-center">
                      <div className="w-24 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="h-full bg-gradient-to-b from-gray-800/50 to-black/50 p-4">
                      <div className="h-10 mb-4">
                        <div className="flex justify-between items-center px-2">
                          <span className="text-white text-sm">9:41</span>
                          <div className="flex gap-1">
                            <div className="w-1 h-4 bg-gray-600 rounded-sm"></div>
                            <div className="w-1 h-4 bg-gray-600 rounded-sm"></div>
                            <div className="w-1 h-4 bg-gray-600 rounded-sm"></div>
                            <div className="w-1 h-4 bg-gray-600 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-gray-700/50">
                        <div className="flex justify-between mb-6">
                          <h3 className="text-white font-bold">Dashboard</h3>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-gray-700/50">
                            <div className="h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded mb-2"></div>
                            <div className="h-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded w-3/4"></div>
                          </div>
                          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-gray-700/50">
                            <div className="h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded mb-2"></div>
                            <div className="h-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded w-3/4"></div>
                          </div>
                          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-gray-700/50">
                            <div className="h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded mb-2"></div>
                            <div className="h-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded w-3/4"></div>
                          </div>
                          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-gray-700/50">
                            <div className="h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded mb-2"></div>
                            <div className="h-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                        <div className="flex justify-between mb-4">
                          <h3 className="text-white font-bold">Recent Activity</h3>
                          <span className="text-gray-400 text-sm">View all</span>
                        </div>
                        <div className="space-y-3">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30"></div>
                              <div className="flex-1">
                                <div className="h-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded w-3/4 mb-1"></div>
                                <div className="h-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded w-1/2"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full -z-10 filter blur-3xl opacity-50"></div>
              </Motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section 
        className="w-full min-h-screen relative"
        ref={scrollContainerRef}
        onWheel={handleWheel}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-[20vh] flex items-center justify-center z-10">
          <Motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We put you at the heart of everything we do
          </Motion.h1>
        </div>
        
        <div className="absolute top-[20vh] left-0 w-full h-[80vh] overflow-hidden">
          <div 
            className="w-[500vw] h-full flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
          >
            {boxes.map((box, index) => (
              <div 
                key={index} 
                className={`w-screen h-full flex items-center justify-center p-8 ${index % 2 === 0 ? 'bg-gradient-to-br from-blue-900/10 to-black/30' : 'bg-gradient-to-br from-purple-900/10 to-black/30'}`}
              >
                <Motion.div
                  className="max-w-4xl w-full h-4/5 flex flex-col items-center justify-center text-center p-8 bg-gray-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-3xl shadow-lg"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-6xl font-bold mb-6 text-cyan-400">0{index + 1}</div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                    {box.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                    {box.description}
                  </p>
                </Motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
          <button 
            className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/10 transition"
            onClick={prevBox}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft className="text-cyan-400" />
          </button>
          <div className="flex gap-2">
            {boxes.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-cyan-400' : 'bg-gray-700'
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button 
            className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/10 transition"
            onClick={nextBox}
            disabled={currentIndex === boxes.length - 1}
          >
            <FaChevronRight className="text-cyan-400" />
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
          {/* <span className="text-xs mb-1 text-cyan-400">Scroll vertically to navigate</span> */}
          <div className="animate-bounce w-6 h-6 border-t-2 border-r-2 border-cyan-400 rotate-[135deg]"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Powerful <span className="text-cyan-400">Features</span>
            </Motion.h2>
            <Motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover the tools that will transform your business operations and drive growth
            </Motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Motion.div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold mb-4 text-cyan-400">0{index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <button 
                  className="flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition"
                  onClick={() => navigate(feature.route)}
                >
                  Learn more
                  <FaArrowRight className="text-sm" />
                </button>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What Our <span className="text-cyan-400">Clients Say</span>
            </Motion.h2>
            <Motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hear from businesses that have transformed their operations with our solutions
            </Motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Motion.div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-cyan-400 text-5xl mb-4">"</div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-sm ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-700'}`} 
                    />
                  ))}
                </div>
                <div className="border-t border-gray-700/50 pt-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-cyan-400">{testimonial.role}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of businesses already using our platform to streamline their operations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-lg hover:opacity-90 transition-all duration-300 text-lg shadow-lg shadow-cyan-500/30"
                onClick={() => navigate('/products')}
              >
                See Products
              </Motion.button>
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact-us')}
                className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-lg"
              >
                Schedule a Demo
              </Motion.button>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* App Store Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center gap-6 min-w-[320px] max-w-md w-full relative border border-cyan-500/30"
            >
              <button 
                className="absolute top-4 right-4 text-cyan-400 text-2xl hover:text-cyan-300 transition"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-white mb-2">Get Our Mobile App</h2>
              <p className="text-gray-300 text-center mb-4">
                Download our app for the best experience on mobile devices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a 
                  href="https://apps.apple.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:bg-cyan-500/10 transition w-full"
                >
                  <FaApple className="text-xl" />
                  <div className="text-left">
                    <span className="text-xs text-gray-400">Download on the</span>
                    <div className="font-semibold text-white">App Store</div>
                  </div>
                </a>
                <a 
                  href="https://play.google.com/store" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:bg-cyan-500/10 transition w-full"
                >
                  <FaGooglePlay className="text-xl" />
                  <div className="text-left">
                    <span className="text-xs text-gray-400">GET IT ON</span>
                    <div className="font-semibold text-white">Google Play</div>
                  </div>
                </a>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;