import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';

// Import your logos
import logo1 from "../assets/logose/logo1.png";
import logo2 from "../assets/logose/logo2.png";
import logo3 from "../assets/logose/logo3.png";
import logo4 from "../assets/logose/logo4.png";
import logo5 from "../assets/logose/logo5.png";
import logo6 from "../assets/logose/logo6.png";
import logo7 from "../assets/logose/logo7.png";
import logo8 from "../assets/logose/logo8.png";
import logo9 from "../assets/logose/logo9.png";
import logo10 from "../assets/logose/logo10.png";
import logo11 from "../assets/logose/logo11.png";
import logo12 from "../assets/logose/logo12.png";
import logo13 from "../assets/logose/logo13.png";
import logo14 from "../assets/logose/logo14.png";
import logo15 from "../assets/logose/logo15.png";
import logo16 from "../assets/logose/logo16.png";
import logo17 from "../assets/logose/logo17.png";
import logo18 from "../assets/logose/logo18.png";
import logo19 from "../assets/logose/logo19.png";
import logo20 from "../assets/logose/logo20.png";
import logo21 from "../assets/logose/logo21.png";
import logo22 from "../assets/logose/logo22.png";

const LogosSlider = () => {
  // Logo data
  const logos = [
    { id: 1, path: logo1, name: "Company 1" },
    { id: 2, path: logo2, name: "Company 2" },
    { id: 3, path: logo3, name: "Company 3" },
    { id: 4, path: logo4, name: "Company 4" },
    { id: 5, path: logo5, name: "Company 5" },
    { id: 6, path: logo6, name: "Company 6" },
    { id: 7, path: logo7, name: "Company 7" },
    { id: 8, path: logo8, name: "Company 8" },
    { id: 9, path: logo9, name: "Company 9" },
    { id: 10, path: logo10, name: "Company 10" },
    { id: 11, path: logo11, name: "Company 11" },
    { id: 12, path: logo12, name: "Company 12" },
    { id: 13, path: logo13, name: "Company 13" },
    { id: 14, path: logo14, name: "Company 14" },
    { id: 15, path: logo15, name: "Company 15" },
    { id: 16, path: logo16, name: "Company 16" },
    { id: 17, path: logo17, name: "Company 17" },
    { id: 18, path: logo18, name: "Company 18" },
    { id: 19, path: logo19, name: "Company 19" },
    { id: 20, path: logo20, name: "Company 20" },
    { id: 21, path: logo21, name: "Company 21" },
    { id: 22, path: logo22, name: "Company 22" },
  ];

  // State management
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);
  
  // Framer Motion animations
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const carouselRef = useRef(null);
  
  // Calculate maximum index based on visible items
  const maxIndex = Math.max(0, logos.length - itemsToShow);

  // Handle responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // sm
        setItemsToShow(1);
      } else if (window.innerWidth < 768) { // md
        setItemsToShow(2);
      } else if (window.innerWidth < 1024) { // lg
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start animations when section enters viewport
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Auto-scroll with smoother animation
  useEffect(() => {
    if (paused) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 3500);
    
    return () => clearInterval(interval);
  }, [paused, maxIndex, itemsToShow]);

  // Navigation handlers
  const handlePrev = () => {
    setActiveIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  // Handle direct jump to specific slide
  const jumpToSlide = (index) => {
    setActiveIndex(index);
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const carouselVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  // Animation styles with smoother easing for carousel
  const translateValue = `-${activeIndex * (100 / itemsToShow)}%`;

  return (
    <motion.div 
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern section header with animation */}
        <motion.div 
          variants={headerVariants}
          className="mb-12 text-center"
        >
          <motion.p 
            variants={headerVariants}
            className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-2"
          >
            Partnerships
          </motion.p>
          <motion.h2 
            variants={headerVariants}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Our Trusted Partners</span>
              <motion.span 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                className="absolute bottom-1 left-0 h-3 bg-blue-100 -z-10 transform -rotate-1"
              ></motion.span>
            </span>
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            Working with industry leaders to deliver exceptional value
          </motion.p>
        </motion.div>
        
        {/* Carousel container with enhanced animation */}
        <motion.div 
          variants={carouselVariants}
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          ref={carouselRef}
        >
          {/* Logo track with improved animation */}
          <motion.div 
            animate={{ x: translateValue }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
            className="flex"
          >
            {logos.map((logo, index) => (
              <motion.div 
                key={logo.id}
                className="flex-none px-2 sm:px-3 md:px-4"
                style={{ width: `${100 / itemsToShow}%` }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 20,
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.05 % 0.4 // Creates a staggered effect for visible items
                    }
                  }
                }}
              >
                <motion.div 
                  className="bg-[#edf2fb24] rounded-xl shadow-md p-4 sm:p-6 my-3 h-28 sm:h-32 md:h-36 flex items-center justify-center border border-gray-100"
                  whileHover={{ 
                    borderColor: "#c8b6ff",
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.05)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.img 
                    src={logo.path} 
                    alt={logo.name} 
                    className="max-h-full max-w-full object-contain opacity-90"
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1.05,
                      transition: { duration: 0.2 } 
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced navigation arrows with animation */}
          <motion.button 
            onClick={handlePrev} 
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-80 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white z-10"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button 
            onClick={handleNext}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-80 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white z-10"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
        
        {/* Animated indicator dots */}
        <motion.div 
          variants={headerVariants}
          className="flex justify-center mt-8 space-x-2"
        >
          {Array.from({ length: Math.min(10, maxIndex + 1) }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => jumpToSlide(index * Math.ceil((maxIndex + 1) / 10))}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex >= index * Math.ceil((maxIndex + 1) / 10) && 
                activeIndex < (index + 1) * Math.ceil((maxIndex + 1) / 10) 
                  ? 'bg-black w-6' 
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </motion.div>
        
        {/* Animated navigation buttons for mobile */}
        <motion.div 
          variants={headerVariants}
          className="mt-6 flex justify-center md:hidden"
        >
          <motion.button 
            onClick={handlePrev}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="mx-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Prev
          </motion.button>
          <motion.button 
            onClick={handleNext}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="mx-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 flex items-center"
          >
            Next
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogosSlider;