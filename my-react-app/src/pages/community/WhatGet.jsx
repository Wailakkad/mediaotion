import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, PenTool } from 'lucide-react';

export default function FeaturesGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const navigate = useNavigate();
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      id: 'updates',
      title: 'Gestion de Réseaux Sociaux',
      icon: (
        <svg width="80" height="80" viewBox="0 0 200 200" className="mx-auto mb-4">
          <g transform="translate(20, 0)">
            {/* Social Media Icons */}
            <circle cx="80" cy="80" r="35" fill="#1877F2" /> {/* Facebook */}
            <text x="80" y="90" fontSize="40" fill="white" textAnchor="middle">f</text>
            <circle cx="40" cy="80" r="35" fill="#E4405F" /> {/* Instagram */}
            <rect x="20" y="60" width="40" height="40" rx="10" fill="none" stroke="white" strokeWidth="4" />
            <circle cx="40" cy="80" r="10" fill="none" stroke="white" strokeWidth="4" />
            <circle cx="55" cy="65" r="5" fill="white" />
          </g>
        </svg>
      ),
      color: 'border-blue-200 bg-blue-50',
      hover: 'hover:border-blue-300 hover:bg-blue-100'
    },
    {
      id: 'secure',
      title: 'Publications Hebdomadaires',
      icon: <Share2 size={40} className="mx-auto mb-2" />,
      secondaryIcon: <PenTool size={30} className="absolute top-4 right-4 text-pink-400" />,
      color: 'border-pink-200 bg-pink-50',
      hover: 'hover:border-pink-300 hover:bg-pink-100'
    },
    {
      id: 'responsive',
      title: 'Création Graphique',
      icon: (
        <svg width="80" height="80" viewBox="0 0 200 200" className="mx-auto mb-4">
          <g transform="translate(30, 20)">
            {/* Palette */}
            <circle cx="70" cy="80" r="50" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="2" />
            
            {/* Color Dots */}
            <circle cx="50" cy="60" r="15" fill="#FF5733" />
            <circle cx="90" cy="60" r="15" fill="#33FF57" />
            <circle cx="50" cy="100" r="15" fill="#3357FF" />
            <circle cx="90" cy="100" r="15" fill="#F3FF33" />
            
            {/* Brush */}
            <rect x="110" y="40" width="10" height="60" rx="2" fill="#8B4513" />
            <path d="M110,40 Q120,30 130,40 L130,60 Q120,70 110,60 Z" fill="#F5DEB3" />
          </g>
        </svg>
      ),
      color: 'border-purple-200 bg-purple-50',
      hover: 'hover:border-purple-300 hover:bg-purple-100'
    },
    {
      id: 'support',
      title: 'Stratégie Social Media',
      icon: (
        <svg width="80" height="80" viewBox="0 0 200 200" className="mx-auto mb-4">
          <g transform="translate(20, 10)">
            {/* Chart */}
            <rect x="50" y="60" width="20" height="70" fill="#4CAF50" />
            <rect x="80" y="40" width="20" height="90" fill="#2196F3" />
            <rect x="110" y="70" width="20" height="60" fill="#FF9800" />
            
            {/* Growth Arrow */}
            <path d="M40,120 L130,50 L130,70 L150,70 L130,50 L110,70" fill="none" stroke="#E91E63" strokeWidth="3" />
            
            {/* Magnifying Glass */}
            <circle cx="60" cy="40" r="15" fill="none" stroke="#9C27B0" strokeWidth="3" />
            <line x1="70" y1="50" x2="80" y2="60" stroke="#9C27B0" strokeWidth="3" />
          </g>
        </svg>
      ),
      color: 'border-green-200 bg-green-50',
      hover: 'hover:border-green-300 hover:bg-green-100'
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
      <button onClick={()=> navigate("/packFour")} className='bg-black p-3 px-8 rounded-2xl text-white font-bold hover:bg-violet-800 transition duration-400 cursor-pointer mt-15'>Commencer maintenant</button>

    </div>
  );
}