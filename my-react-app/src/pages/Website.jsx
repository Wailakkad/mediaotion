import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import web from "./../assets/websites.png"
import img1 from "../assets/layers.png"
import img2 from "../assets/graphic-elements.png"
import img3 from "../assets/pie-chart.png"
import WhyChooseUs from '../components/ChousUs';
import PricingTable from '../components/WebsitePackages';
import FeaturesGrid from '../components/Get';
const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg- w-full py-12 px-4 sm:px-12 md:px-16 lg:px-20 rounded-lg overflow-hidden mt-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <motion.div 
          className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Vision, a Unique Website
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-700 mb-8 max-w-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We focus on building strong relationships and fostering active participation 
            within your community.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              onClick={() => navigate("/packThree")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
               Get Started
            </motion.button>
            
            <motion.button 
              onClick={() => navigate("/f&q")}
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn more
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Right Side - Illustration with Images */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative h-80 sm:h-96 md:h-96 lg:h-96 xl:h-96">
            {/* Main person floating animation */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
            >
              {/* Person image */}
              <motion.div
                className="relative w-4/5 mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <img 
                  src={web} 
                  alt="Web designer working on laptop" 
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>

            {/* UI Elements floating around - Top right */}
            <motion.div
              className="absolute top-0 right-0 w-22 h-22"
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -15, 0],
                x: [0, 10, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.9 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 6, ease: "easeInOut" }
              }}
            >
              <img 
                src={img1}
                alt="UI Design Element" 
                className="w-full h-auto" 
              />
            </motion.div>

            {/* Circle chart UI element - Bottom right */}
            <motion.div
              className="absolute bottom-12 right-4 w-20 h-20"
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                y: [0, 10, -5, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 1.1 },
                scale: { duration: 0.5, delay: 1.1 },
                rotate: { duration: 0.5, delay: 1.1 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
            >
              <img 
                src={img3}
                alt="Chart UI Element" 
                className="w-full h-auto rounded-full" 
              />
            </motion.div>

            {/* Small UI element - Top left */}
            <motion.div
              className="absolute top-16 left-0 w-16 h-16"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: [0.7, 1, 0.7], 
                x: [-5, 5, -5],
                y: [-5, 0, -5]
              }}
              transition={{
                opacity: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
            >
              <img 
                src={img2}
                alt="Small UI Element" 
                className="w-full h-auto rounded-md" 
              />
            </motion.div>

         
            {/* Selection corners/handles */}
            {[
              { position: "top-0 right-8", delay: 1.6 },
              { position: "top-0 left-8", delay: 1.65 },
              { position: "bottom-8 left-8", delay: 1.7 },
              { position: "bottom-8 right-8", delay: 1.75 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} w-2 h-2 bg-blue-500 rounded-sm`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [0.8, 1.2, 0.8] }}
                transition={{
                  opacity: { duration: 0.3, delay: item.delay },
                  scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
        <div className="">
            <WhyChooseUs />
        </div>
        <div className="">
            <PricingTable />
        </div>
        <div className="">
            <FeaturesGrid />
        </div>
    </div>
   
  );
};

export default HeroSection;