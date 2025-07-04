import { motion, useAnimation, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Globe, Rocket, ShoppingBag } from 'lucide-react';

export default function PricingTable() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();
  const navigate = useNavigate();

  // Mock translation function for demo
  const t = (key, options) => {
    const translations = {
      'pricing.title': 'Choose Your Perfect Package',
      'pricing.subtitle': 'Select the plan that best fits your business needs and start your digital transformation today.',
      'pricing.included': 'What\'s Included',
      'pricing.idealFor': 'Ideal For',
      'pricing.choosePackage': 'Choose Package',
      'pricing.plans.basic.subtitle': 'Basic Website',
      'pricing.plans.basic.description': 'Perfect for small businesses looking to establish their online presence with a professional website.',
      'pricing.plans.basic.features': [
        'Responsive Design',
        '5 Pages Maximum',
        'Contact Form',
        'Basic SEO Setup',
        'Mobile Optimized',
        '30 Days Support'
      ],
      'pricing.plans.basic.idealFor': 'Small businesses, personal portfolios, and startups needing a simple online presence.',
      'pricing.plans.startup.subtitle': 'Startup Package',
      'pricing.plans.startup.description': 'Comprehensive solution for growing businesses with advanced features and better performance.',
      'pricing.plans.startup.features': [
        'Everything in Basic',
        'Up to 10 Pages',
        'Advanced SEO',
        'Social Media Integration',
        'Analytics Setup',
        'Content Management',
        '60 Days Support'
      ],
      'pricing.plans.startup.idealFor': 'Growing startups and medium businesses ready to scale their digital presence.',
      'pricing.plans.ecommerce.subtitle': 'E-commerce Solution',
      'pricing.plans.ecommerce.description': 'Complete e-commerce platform with payment integration and inventory management.',
      'pricing.plans.ecommerce.features': [
        'Everything in Startup',
        'Online Store Setup',
        'Payment Gateway',
        'Inventory Management',
        'Customer Accounts',
        'Order Management',
        '90 Days Support'
      ],
      'pricing.plans.ecommerce.idealFor': 'Businesses ready to sell online with a complete e-commerce solution.'
    };
    
    if (options?.returnObjects && Array.isArray(translations[key])) {
      return translations[key];
    }
    return translations[key] || key;
  };

  // Mock navigate function for demo
  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/packThree");
    
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const plans = [
    {
      id: 'basic',
      title: '5000 MAD',
      subtitle: t('pricing.plans.basic.subtitle'),
      description: t('pricing.plans.basic.description'),
      features: t('pricing.plans.basic.features', { returnObjects: true }),
      idealFor: t('pricing.plans.basic.idealFor'),
      featured: false,
      color: 'bg-white',
      icon: <Globe className="w-8 h-8 text-purple-500" />
    },
    {
      id: 'startup',
      title: '8500 MAD',
      subtitle: t('pricing.plans.startup.subtitle'),
      description: t('pricing.plans.startup.description'),
      features: t('pricing.plans.startup.features', { returnObjects: true }),
      idealFor: t('pricing.plans.startup.idealFor'),
      featured: true,
      color: 'bg-black',
      icon: <Rocket className="w-8 h-8 text-purple-300" />
    },
    {
      id: 'ecommerce',
      title: '15000 MAD',
      subtitle: t('pricing.plans.ecommerce.subtitle'),
      description: t('pricing.plans.ecommerce.description'),
      features: t('pricing.plans.ecommerce.features', { returnObjects: true }),
      idealFor: t('pricing.plans.ecommerce.idealFor'),
      featured: false,
      color: 'bg-white',
      icon: <ShoppingBag className="w-8 h-8 text-purple-500" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

  const priceVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-purple-200 p-4 py-16 rounded-3xl relative"
    >
      <motion.h1 
        className="text-4xl font-bold mb-4 text-center text-gray-800 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {t('pricing.title')}
      </motion.h1>
      
      <motion.p 
        className="text-lg text-gray-600 mb-12 text-center max-w-2xl relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {t('pricing.subtitle')}
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            className={`relative rounded-3xl overflow-hidden shadow-lg flex-1 max-w-md ${
              plan.featured ? 'md:scale-105' : ''
            }`}
            style={{
              zIndex: plan.featured ? 30 : 20 + index,
              pointerEvents: 'auto'
            }}
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => {
              console.log(`Hovering over ${plan.id}`);
              setHoveredCard(plan.id);
            }}
            onHoverEnd={() => {
              console.log(`Stopped hovering over ${plan.id}`);
              setHoveredCard(null);
            }}
          >
            <div
              className={`${plan.color} ${
                plan.featured ? 'text-white' : 'text-black'
              } p-8 flex flex-col h-full relative`}
              style={{ pointerEvents: 'auto' }}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className={`text-lg font-medium ${plan.featured ? 'text-purple-200' : 'text-purple-600'}`}>
                    {plan.subtitle}
                  </h3>
                  <motion.div
                    className="text-3xl font-bold mt-1"
                    variants={priceVariants}
                    animate={hoveredCard === plan.id ? 'hover' : ''}
                  >
                    {plan.title}
                  </motion.div>
                </div>
                <div className={`p-3 rounded-full ${plan.featured ? 'bg-purple-800' : 'bg-purple-100'}`}>
                  {plan.icon}
                </div>
              </div>

              <p className="text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              <div className="mb-6">
                <h4 className={`text-sm font-medium mb-3 ${plan.featured ? 'text-purple-200' : 'text-purple-600'}`}>
                  {t('pricing.included')}
                </h4>
                <div className="flex flex-col gap-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check
                        size={18}
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.featured ? 'text-purple-300' : 'text-purple-500'
                        }`}
                      />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <div className={`mb-4 p-3 rounded-lg ${plan.featured ? 'bg-purple-800' : 'bg-purple-100'}`}>
                  <h4 className={`text-xs font-medium mb-1 ${plan.featured ? 'text-purple-200' : 'text-purple-600'}`}>
                    {t('pricing.idealFor')}
                  </h4>
                  <p className="text-sm">
                    {plan.idealFor}
                  </p>
                </div>
                
                <motion.button
                  onClick={(e) => handleNavigation(e, "/packThree")}
                  className={`w-full py-3 px-4 rounded-full ${
                    plan.featured ? 'bg-white text-black' : 'bg-black text-white'
                  } font-medium text-sm uppercase tracking-wider cursor-pointer relative z-50`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    pointerEvents: 'auto',
                    userSelect: 'none'
                  }}
                >
                  {t('pricing.choosePackage')}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}