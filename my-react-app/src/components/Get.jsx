import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { Globe, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FeaturesGrid() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      id: 'updates',
      title: 'Effortless and Swift Updates',
      icon: (
        <svg width="80" height="80" viewBox="0 0 200 200" className="mx-auto mb-4">
          <g transform="translate(20, 0)">
            {/* Desk */}
            <rect x="40" y="120" width="80" height="10" fill="#e0e0e0" />
            <rect x="45" y="130" width="70" height="6" fill="#d0d0d0" />
            {/* Desk legs */}
            <rect x="50" y="136" width="10" height="30" fill="#c0c0c0" />
            <rect x="100" y="136" width="10" height="30" fill="#c0c0c0" />
            {/* Computer */}
            <rect x="60" y="70" width="40" height="50" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="2" />
            <rect x="65" y="75" width="30" height="40" fill="#a0d8ef" />
            {/* Person */}
            <circle cx="40" cy="85" r="15" fill="#ff6b6b" /> {/* Head */}
            <rect x="32" y="100" width="16" height="25" fill="#ff6b6b" rx="5" /> {/* Body */}
            <rect x="25" y="100" width="7" height="20" fill="#ff6b6b" rx="3" /> {/* Left arm */}
            <rect x="48" y="100" width="20" height="7" fill="#ff6b6b" rx="3" /> {/* Right arm */}
            <rect x="32" y="125" width="7" height="20" fill="#ff6b6b" rx="3" /> {/* Left leg */}
            <rect x="42" y="125" width="7" height="20" fill="#ff6b6b" rx="3" /> {/* Right leg */}
            {/* Hat */}
            <path d="M40,70 L50,70 L45,60 Z" fill="#5bc0de" />
          </g>
        </svg>
      ),
      color: 'border-gray-200 bg-white',
      hover: 'hover:border-gray-300 hover:bg-gray-50'
    },
    {
      id: 'secure',
      title: 'Optimized and Secure',
      icon: <Globe size={40} className="mx-auto mb-2" />,
      secondaryIcon: <Shield size={30} className="absolute top-4 right-4 text-blue-400" />,
      color: 'border-purple-200 bg-purple-50',
      hover: 'hover:border-purple-300 hover:bg-purple-100'
    },
    {
      id: 'responsive',
      title: 'Responsive',
      icon: (
        <svg width="80" height="80" viewBox="0 0 200 200" className="mx-auto mb-4">
          <g transform="translate(30, 20)">
            {/* Device background */}
            <rect x="30" y="30" width="70" height="110" rx="10" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="2" />
            <rect x="40" y="50" width="50" height="70" fill="#a0d8ef" />
            
            {/* Documents flying out */}
            <rect x="110" y="40" width="30" height="40" rx="2" transform="rotate(15)" fill="#e6e6fa" stroke="#d0d0d0" />
            <rect x="115" y="70" width="30" height="40" rx="2" transform="rotate(30)" fill="#e6e6fa" stroke="#d0d0d0" />
            
            {/* Blue circle background */}
            <circle cx="85" cy="100" r="40" fill="#e6e6fa" opacity="0.5" />
          </g>
        </svg>
      ),
      color: 'border-purple-200 bg-purple-50',
      hover: 'hover:border-purple-300 hover:bg-purple-100'
    },
    {
      id: 'support',
      title: 'Support',
      icon: (
        <svg width="80" height="80" viewBox="0 0 200 200" className="mx-auto mb-4">
          <g transform="translate(20, 10)">
            {/* Cloud */}
            <ellipse cx="100" cy="90" rx="60" ry="40" fill="#e6f7ff" stroke="#d0d0d0" strokeWidth="1" />
            <circle cx="70" cy="70" r="25" fill="#e6f7ff" stroke="#d0d0d0" strokeWidth="1" />
            <circle cx="120" cy="65" r="30" fill="#e6f7ff" stroke="#d0d0d0" strokeWidth="1" />
            
            {/* Laptop */}
            <rect x="60" y="110" width="40" height="30" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="1" />
            <path d="M60,140 L100,140 L105,150 L55,150 Z" fill="#d0d0d0" />
            
            {/* Person with headset */}
            <circle cx="130" cy="110" r="12" fill="#ff6b6b" /> {/* Head */}
            <rect x="125" y="122" width="10" height="15" fill="#ff6b6b" rx="3" /> {/* Body */}
            <path d="M118,110 C115,105 115,115 118,110" stroke="#333" fill="none" strokeWidth="2" /> {/* Headset */}
            <circle cx="118" cy="110" r="3" fill="#333" /> {/* Headset mic */}
          </g>
        </svg>
      ),
      color: 'border-gray-200 bg-white',
      hover: 'hover:border-gray-300 hover:bg-gray-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    },
    hover: { 
      y: -5,
      transition: { 
        type: "spring",
        stiffness: 300
      }
    }
  };

  const iconVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      rotateY: -30
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        duration: 0.7
      }
    },
    hover: { 
      scale: 1.1,
      transition: { 
        type: "spring",
        stiffness: 300
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "80px",
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white mt-15" ref={ref}>
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headingVariants}
      >
        <motion.h1 className="text-3xl font-bold mb-3 text-center">What You Get</motion.h1>
        <motion.div 
          className="h-1 bg-blue-500 mx-auto mb-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={underlineVariants}
        ></motion.div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className={`relative rounded-3xl p-6 border ${feature.color} ${feature.hover} transition-colors flex flex-col items-center justify-center h-60`}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(feature.id)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div
              variants={iconVariants}
              animate={hoveredCard === feature.id ? "hover" : ""}
              className="relative"
            >
              {feature.icon}
              {feature.secondaryIcon && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                >
                  {feature.secondaryIcon}
                </motion.div>
              )}
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold text-center mt-2"
              variants={titleVariants}
            >
              {feature.title}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>
      <button onClick={()=> navigate("/packThree")} className='bg-black p-3 px-8 rounded-2xl text-white font-bold hover:bg-violet-800 transition duration-400 cursor-pointer mt-15'>Start now</button>

    </div>
  );
}