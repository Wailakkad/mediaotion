import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion, useInView, useAnimation } from 'framer-motion';
import img from "../assets/whyChoseUs.png"
export default function WhyChooseUs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureItems = [
    {
      title: "Expert Team",
      description: "Our professionals have years of industry experience."
    },
    {
      title: "Custom Solutions",
      description: "Tailored strategies designed specifically for your business needs."
    },
    {
      title: "Ongoing Support",
      description: "We're with you every step of the way, even after project completion."
    }
  ];
    const navigate = useNavigate();

  return (
    <div className="bg-[#f8f6fc] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="lg:grid lg:grid-cols-2 lg:gap-16 items-center"
        >
          {/* Left Column with Image and Background Shape */}
          <motion.div 
            variants={itemVariants}
            className="relative mb-10 lg:mb-0"
          >
            <div className="absolute inset-0 translate-x-5 translate-y-5 transform rounded-3xl bg-purple-500 opacity-20"></div>
            <div className="absolute -left-10 -top-10 w-3/4 h-3/4 rounded-[40px] bg-purple-500 opacity-20 rotate-12"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={img}
                alt="Professional team meeting" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right Column with Content */}
          <motion.div 
            variants={itemVariants}
            className="lg:pl-8"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4"
            >
              Why Choose Us
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-8 text-lg"
            >
              With years of experience in the digital industry, we've helped hundreds of
              businesses transform their online presence.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              className="space-y-6"
            >
              {featureItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-10"
            >     
              <motion.button
               onClick={() => navigate('/packOne')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}