import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import website1 from '../../../assets/web1.png';
import website2 from '../../../assets/web2.png';
import website3 from '../../../assets/web3.png';
import website4 from '../../../assets/web4.png';
import website5 from '../../../assets/web5.png';
import website6 from '../../../assets/web6.jpg';
import website7 from '../../../assets/web7.jpg';
import website8 from '../../../assets/web8.jpg';
import website9 from '../../../assets/web9.jpg';

const WebsiteShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  
  const websites = [
    {
      id: 1,
      image: website1,
      title: "Corporate Website",
      description: "Professional business solution"
    },
    {
      id: 2,
      image: website2,
      title: "E-commerce Platform",
      description: "Online shopping experience"
    },
    {
      id: 3,
      image: website3,
      title: "International Partnership",
      description: "Global business connections"
    },
    {
      id: 4,
      image: website4,
      title: "Medical Services",
      description: "Healthcare solutions"
    },
    {
      id: 5,
      image: website5,
      title: "Educational Platform",
      description: "Learning management system"
    }
  ];

  const sideWebsites = [
    { image: website6, position: 'left-far' },
    { image: website7, position: 'left-near' },
    { image: website8, position: 'right-far' },
    { image: website9, position: 'right-near' },
    
  ];

  // Auto-rotate the websites when not hovering
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % websites.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [websites.length, isHovering]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Position variants for side websites
  const getPositionVariants = (position) => {
    switch(position) {
      case 'left-far':
        return {
          initial: { x: -100, y: 0, rotate: -12, opacity: 0 },
          animate: { x: 0, y: 0, rotate: -12, opacity: 1 },
          hover: { x: -20, y: -10, rotate: -8, scale: 1.05, opacity: 1 }
        };
      case 'left-near':
        return {
          initial: { x: -60, y: 0, rotate: -6, opacity: 0 },
          animate: { x: 0, y: 0, rotate: -6, opacity: 1 },
          hover: { x: -10, y: -5, rotate: -3, scale: 1.05, opacity: 1 }
        };
      case 'right-far':
        return {
          initial: { x: 100, y: 0, rotate: 12, opacity: 0 },
          animate: { x: 0, y: 0, rotate: 12, opacity: 1 },
          hover: { x: 20, y: -10, rotate: 8, scale: 1.05, opacity: 1 }
        };
      case 'right-near':
        return {
          initial: { x: 60, y: 0, rotate: 6, opacity: 0 },
          animate: { x: 0, y: 0, rotate: 6, opacity: 1 },
          hover: { x: 10, y: -5, rotate: 3, scale: 1.05, opacity: 1 }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-b from-white via-purple-100 to-purple-100 min-h-screen py-16 px-4 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p 
            className="text-indigo-500 text-sm font-medium uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Web creations
          </motion.p>
          <motion.h1 
            className="text-5xl font-bold text-black bg-clip-text  mb-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.5, 
              type: "spring", 
              stiffness: 100 
            }}
          >
            site web
          </motion.h1>
          <motion.p
            className="text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Stunning websites crafted with modern design principles and cutting-edge technologies
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative h-96 md:h-[500px] mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main tablet display */}
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              type: "spring",
              stiffness: 50 
            }}
            whileHover={{ 
              scale: 1.05, 
              transition: { duration: 0.3 } 
            }}
          >
            <motion.div 
              className="bg-black rounded-3xl p-3 shadow-2xl w-64 md:w-80 mx-auto"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.4)"
              }}
            >
              <div className="rounded-2xl bg-white overflow-hidden h-80 md:h-96">
              <div className="bg-black h-12 md:h-14 flex items-center justify-center px-4">
              <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple rounded-full"></div>
                  </div>
                 </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-64 md:h-105"
                  >
                    <motion.img 
                      src={websites[activeIndex].image} 
                      alt={websites[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3"
                    >
                      <p className="text-white font-medium text-sm">{websites[activeIndex].title}</p>
                      <p className="text-white/80 text-xs">{websites[activeIndex].description}</p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
                <div className="p-3">
                  <div className="h-3 w-3/4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="rounded-full w-8 h-8 bg-gray-200 mx-auto mt-2"></div>
            </motion.div>
          </motion.div>
          
          {/* Side website examples */}
          {sideWebsites.map((website, index) => {
            const variants = getPositionVariants(website.position);
            const isLeft = website.position.includes('left');
            const isFar = website.position.includes('far');
            
            return (
              <motion.div
                key={index}
                className={`absolute ${isLeft ? (isFar ? 'left-0' : 'left-16') : (isFar ? 'right-0' : 'right-16')} top-1/2 transform -translate-y-1/2 ${isLeft ? (isFar ? 'z-10' : 'z-20') : (isFar ? 'z-10' : 'z-20')}`}
                initial="initial"
                animate={isHovering ? "hover" : "animate"}
                variants={variants}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15,
                  delay: 0.1 * index 
                }}
              >
                <motion.div 
                  className="w-40 md:w-48 h-56 md:h-64 bg-white rounded-lg shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.img 
                    src={website.image} 
                    alt="Website example" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Navigation dots */}
        <motion.div 
          className="flex justify-center space-x-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {websites.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-black' : 'bg-white'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View website ${index + 1}`}
            />
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button 
          onClick={()=> navigate("/portfolio")}
            className="px-8 py-3 bg-gradient-to-r from-purple-700 to-black text-white font-medium rounded-full shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};


export default WebsiteShowcase;