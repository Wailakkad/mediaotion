import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import imgHero from "../../assets/community.png"
import Why from './ChoseUs'
import Packags from "./Packeges"
import FeaturesGrid from './WhatGet';
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

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
                 Growing Your Community          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-700 mb-8 max-w-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We focus on building strong relationships and fostering active participation within your community.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
            onClick={() => navigate("/packFour")}
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
                  src={imgHero} 
                  alt="Web designer working on laptop" 
                  className="w-full h-auto"
                />
              </motion.div>
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
      <div>
        <Why />
      </div>
      <div>
        <Packags />
      </div>
      <div>
        <FeaturesGrid />
      </div>
    </div>
   
  );
};

export default HeroSection;