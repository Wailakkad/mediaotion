import { motion, useAnimation, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Check, Globe, Rocket, ShoppingBag } from 'lucide-react';

export default function PricingTable() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const plans = [
    {
      id: 'basic',
      title: '5000 MAD',
      subtitle: 'Pack Basic',
      description: "L'essentiel pour une présence en ligne professionnelle.",
      features: [
        'Site vitrine de 1 à 3 pages',
        'Design responsive (mobile, tablette, desktop)',
        'Interface attractive et claire',
        'Optimisation SEO de base',
        '1 séance de consulting gratuite'
      ],
      idealFor: 'Indépendants, artisans, petites structures',
      featured: false,
      color: 'bg-white',
      icon: <Globe className="w-8 h-8 text-purple-500" />
    },
    {
      id: 'startup',
      title: '8500 MAD',
      subtitle: 'Pack Start-up',
      description: "Un site robuste pour lancer et développer votre activité.",
      features: [
        'Site de 1 à 10 pages',
        'Design avancé et personnalisé',
        'Optimisation SEO avancée',
        'Compatible tous supports',
        '2 séances de consulting offertes'
      ],
      idealFor: 'PME, projets en lancement, agences',
      featured: true,
      color: 'bg-black',
      icon: <Rocket className="w-8 h-8 text-purple-300" />
    },
    {
      id: 'ecommerce',
      title: '15000 MAD',
      subtitle: 'Pack E-commerce',
      description: "Une boutique en ligne professionnelle, évolutive et performante.",
      features: [
        'Produits en illimité',
        'Site 100% responsive',
        'Design moderne et ergonomique',
        'SEO naturel pour visibilité optimale',
        '3 séances de consulting personnalisées'
      ],
      idealFor: 'Boutiques en ligne, commerçants, marques',
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
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-purple-200 p-4 py-16"
    >
          <motion.h1 
        className="text-4xl font-bold mb-4 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Nos Offres
      </motion.h1>
      
      <motion.p 
        className="text-lg text-gray-600 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Des solutions adaptées à tous vos besoins numériques
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            className={`relative rounded-3xl overflow-hidden shadow-lg ${plan.featured ? 'md:scale-105 z-10' : ''} flex-1 max-w-md`}
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(plan.id)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div
              className={`${plan.color} ${
                plan.featured ? 'text-white' : 'text-black'
              } p-8 flex flex-col h-full`}
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
                  Ce qui est inclus :
                </h4>
                <div className="flex flex-col gap-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check
                        size={18}
                        className={`mt-0.5 ${
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
                    ✅ Idéal pour :
                  </h4>
                  <p className="text-sm">
                    {plan.idealFor}
                  </p>
                </div>
                <motion.button
                  className={`w-full py-3 px-4 rounded-full ${plan.featured ? 'bg-white text-black' : 'bg-black text-white'} font-medium text-sm uppercase tracking-wider`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Choisir ce pack
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}