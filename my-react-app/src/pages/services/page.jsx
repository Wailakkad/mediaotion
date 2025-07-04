import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Users, Search, Star, ArrowDown, ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Mock translation function for demo
  const {t} = useTranslation();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      title: t('services.webDevelopment.title'),
      description: t('services.webDevelopment.description'),
      icon: Code,
      bgColor: "bg-violet-50",
      iconBgColor: "bg-violet-600",
      path: "/packThree",
    },
    {
      id: 2,
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      icon: Palette,
      bgColor: "bg-violet-100",
      iconBgColor: "bg-violet-800",
      path: "/packTwo",
    },
    {
      id: 3,
      title: t('services.communityManagement.title'),
      description: t('services.communityManagement.description'),
      icon: Users,
      bgColor: "bg-violet-50",
      iconBgColor: "bg-violet-600",
      path: "/packFour",
    },
    {
      id: 4,
      title: t('services.seoOptimization.title'),
      description: t('services.seoOptimization.description'),
      icon: Search,
      bgColor: "bg-violet-100",
      iconBgColor: "bg-violet-800",
      path: "/packSix",
    },
  ];

  const handleServiceClick = (path) => {
    // Replace with your navigation method (React Router, Next.js router, etc.)
    window.location.href = path;
    // For React Router: navigate(path);
    // For Next.js: router.push(path);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-white mt-40">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden bg-gradient-to-b from-white to-violet-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-violet-500/20 backdrop-blur-sm rounded-full text-violet-600 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 mr-2" />
              {t('Hero.premiumServices')}
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('Hero.missionStart')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                {t('Hero.business')}
              </span>{' '}
              {t('Hero.missionEnd')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('Hero.description')}
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
            >
              {t('Hero.seeBelow')}
              <ArrowDown className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </motion.section>

      {/* Services Section */}
      <section id="services-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('servicesSection.ourServices.prefix')} <span className="text-violet-600">{t('servicesSection.ourServices.highlight')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('servicesSection.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              const isHovered = hoveredCard === service.id;
              const isOtherHovered = hoveredCard !== null && hoveredCard !== service.id;
              
              return (
                <motion.div
                  key={service.id}
                  className={`relative p-8 rounded-2xl ${service.bgColor} border border-violet-100 group cursor-pointer overflow-hidden transition-all duration-300 ${
                    isOtherHovered ? 'blur-sm opacity-75' : 'blur-0 opacity-100'
                  }`}
                  variants={itemVariants}
                  whileHover="hover"
                  custom={cardHoverVariants}
                  onClick={() => handleServiceClick(service.path)}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    zIndex: isHovered ? 10 : 1
                  }}
                >
                  {/* Background overlay for hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                    initial={{ scale: 0, borderRadius: "50%" }}
                    whileHover={{ scale: 1.2, borderRadius: "0%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Service Icon */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 ${service.iconBgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Service Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors duration-300">
                         {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                         {service.description}
                    </p>
                  </div>



                  {/* Subtle corner decoration */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ExternalLink className="w-5 h-5 text-violet-600" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default ServicesShowcase;