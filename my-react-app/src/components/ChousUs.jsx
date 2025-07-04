import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Users, LayoutDashboard, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
  const controls = useAnimation();
  const [ref, setRef] = useState(null);
  
  // Mock translation function for demo
  const t = (key) => {
    const translations = {
      'whyChooseUs.title': 'Why Choose Us',
      'whyChooseUs.features.tailored.title': 'Tailored Solutions',
      'whyChooseUs.features.tailored.description': 'We create customized solutions that fit your specific business needs and requirements.',
      'whyChooseUs.features.userFocused.title': 'User-Focused Design',
      'whyChooseUs.features.userFocused.description': 'Our designs prioritize user experience, ensuring intuitive and engaging interfaces.',
      'whyChooseUs.features.measurable.title': 'Measurable Results',
      'whyChooseUs.features.measurable.description': 'We deliver solutions that provide clear, measurable improvements to your business metrics.',
      'whyChooseUs.startNow': 'Start Now'
    };
    return translations[key] || key;
  };
  
  // Mock navigate function for demo
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref) {
      observer.observe(ref);
    }
    
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const iconContainerVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Content for the cards
  const features = [
    {
      icon: <Users size={24} />,
      title: t('whyChooseUs.features.tailored.title'),
      description: t('whyChooseUs.features.tailored.description'),
      bgColor: "bg-purple-50"
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: t('whyChooseUs.features.userFocused.title'),
      description: t('whyChooseUs.features.userFocused.description'),
      bgColor: "bg-gray-50"
    },
    {
      icon: <TrendingUp size={24} />,
      title: t('whyChooseUs.features.measurable.title'),
      description: t('whyChooseUs.features.measurable.description'),
      bgColor: "bg-purple-50"
    }
  ];

  const handleButtonClick = (e) => {
    e.preventDefault();
    
    navigate("/packThree");
  };

  return (
    <div className="bg-white py-16 px-4 min-h-screen flex flex-col gap-20 items-center justify-center relative">
      <section 
        className="max-w-7xl mx-auto w-full relative z-10"
        ref={setRef}
      >
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('whyChooseUs.title')}
        </motion.h2>

        {/* Cards Container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl ${feature.bgColor} p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 relative z-10`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-purple-300 mb-6"
                variants={iconContainerVariants}
                whileHover="hover"
              >
                <motion.div className="text-purple-600">
                  {feature.icon}
                </motion.div>
              </motion.div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Fixed Button with proper z-index and event handling */}
      <motion.button 
        onClick={handleButtonClick}
        className="bg-black p-3 px-8 rounded-2xl text-white font-bold hover:bg-violet-800 transition-colors duration-300 cursor-pointer relative z-20 transform hover:scale-105 active:scale-95"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          pointerEvents: 'auto',
          userSelect: 'none'
        }}
      >
        {t('whyChooseUs.startNow')}
      </motion.button>
    </div>
  );
};

export default WhyChooseUs;