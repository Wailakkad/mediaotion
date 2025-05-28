import React, { useState } from 'react';
import { Globe, Layers, Users, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const PremiumServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites built with the latest technologies to ensure fast loading, responsive designs.",
      icon: <Globe className="h-6 w-6 text-purple-700" />,
      bgColor: "bg-purple-50",
      iconBgColor: "bg-purple-100",
    },
  {
  id: 2,
  title: "Branding",
  description: "Crafting memorable brand identities and visuals that set you apart and build trust with your audience.",
  icon: <Layers className="h-6 w-6 text-white" />,
  bgColor: "bg-purple-100",
  iconBgColor: "bg-black",
},
 {
  id: 3,
  title: "Community Management",
  description: "Engaging and growing your online community to build loyalty and boost your brand’s reputation.",
  icon: <Users className="h-6 w-6 text-purple-700" />, // Make sure to import Users from lucide-react
  bgColor: "bg-purple-50",
  iconBgColor: "bg-purple-100",
},
    {
      id: 4,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      bgColor: "bg-purple-100",
      iconBgColor: "bg-black",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full py-16 px-4 md:px-6 max-w-7xl mx-auto mt-20" ref={ref}>
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Premium Services</h2>
        <motion.div 
          className="w-32 h-1 bg-purple-500 mx-auto mb-6"
          initial={{ width: 0 }}
          animate={inView ? { width: 128 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive digital solutions to help your business thrive in the online world.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={`${service.bgColor} rounded-lg p-6 transition-all duration-300 transform border border-purple-200 hover:shadow-lg hover:-translate-y-1`}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
          >
            <motion.div 
              className={`${service.iconBgColor} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PremiumServices;