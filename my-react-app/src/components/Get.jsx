import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Shield, Zap, Headphones, ArrowRight } from 'lucide-react';

export default function FeaturesGrid() {
  const {t} = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

const features = [
  {
    id: 'updates',
    title: t('whatYouGet.updates.title'),
    description: t('whatYouGet.updates.description'),
    icon: <Zap size={32} className="text-white" />,
    backgroundImage: 'https://i.pinimg.com/736x/cf/bf/88/cfbf883733bdeb47f7a15614361db074.jpg',
    gradient: 'from-blue-600/90 via-blue-700/85 to-blue-800/90',
    glowColor: 'shadow-blue-500/25'
  },
  {
    id: 'secure',
    title: t('whatYouGet.secure.title'),
    description: t('whatYouGet.secure.description'),
    icon: <Shield size={32} className="text-white" />,
    backgroundImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-emerald-600/90 via-emerald-700/85 to-emerald-800/90',
    glowColor: 'shadow-emerald-500/25'
  },
  {
    id: 'responsive',
    title: t('whatYouGet.responsive.title'),
    description: t('whatYouGet.responsive.description'),
    icon: <Globe size={32} className="text-white" />,
    backgroundImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-purple-600/90 via-purple-700/85 to-purple-800/90',
    glowColor: 'shadow-purple-500/25'
  },
  {
    id: 'support',
    title: t('whatYouGet.support.title'),
    description: t('whatYouGet.support.description'),
    icon: <Headphones size={32} className="text-white" />,
    backgroundImage: 'https://i.pinimg.com/736x/e5/d8/0f/e5d80f815585dff394f6e4da0f002ed4.jpg',
    gradient: 'from-orange-600/90 via-orange-700/85 to-orange-800/90',
    glowColor: 'shadow-orange-500/25'
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8,
      rotateX: 15
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const cardHoverVariants = {
    hover: { 
      y: -12,
      scale: 1.02,
      rotateX: -2,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0.7 },
    hover: { 
      opacity: 0.85,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 1
      }
    }
  };

  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "100px",
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4  py-20" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div 
        className="text-center mb-16 relative z-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headingVariants}
      >
        <motion.h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {t('whatYouGet.title')}
        </motion.h1>
        <motion.p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          {t('whatYouGet.subtitle')}
        </motion.p>
        <motion.div 
          className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={underlineVariants}
        ></motion.div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="group cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(feature.id)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div
              className={`relative rounded-3xl overflow-hidden h-80 shadow-xl ${feature.glowColor} backdrop-blur-sm border border-white/20`}
              variants={cardHoverVariants}
              style={{
                backgroundImage: `url(${feature.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} backdrop-blur-[1px]`}
                variants={overlayVariants}
                initial="hidden"
                whileHover="hover"
              />
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                <motion.div
                  className="mb-6 p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30"
                  variants={iconVariants}
                  animate={hoveredCard === feature.id ? "hover" : ""}
                >
                  {feature.icon}
                </motion.div>
                
                <motion.div
                  variants={contentVariants}
                  animate={hoveredCard === feature.id ? "hover" : ""}
                >
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
                
                {/* Hover arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={24} className="text-white" />
                </motion.div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.button 
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white font-bold py-4 px-10 rounded-2xl mt-16 relative overflow-hidden group border border-gray-700"
        variants={buttonVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover="hover"
        whileTap="tap"
      >
        <span className="relative z-10 flex items-center gap-2">
          {t('whatYouGet.cta')}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </div>
  );
}