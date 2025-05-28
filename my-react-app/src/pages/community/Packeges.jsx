import { motion, useAnimation, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Check, Instagram, Facebook, Search, Camera } from 'lucide-react';

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
      id: 'community',
      subtitle: 'Pack Community Management',
      description: 'Dynamisez vos réseaux sociaux avec une gestion professionnelle et créative.',
      features: [
        'Gestion de Facebook & Instagram',
        '2 publications par semaine',
        'Création graphique personnalisée',
        'Élaboration d\'une mini-stratégie social media',
        'Consultation gratuite incluse',
      ],
      idealFor: 'Boutiques, cafés, services, indépendants',
      featured: false,
      color: 'bg-white',
      icon: <Facebook className="w-8 h-8 text-purple-500" />,
      linkPath: '/packFour'
    },
    {
      id: 'seo',
      subtitle: 'Pack SEO',
      description: 'Boostez votre positionnement naturel sur les moteurs de recherche.',
      features: [
        'Optimisation autour de 2 mots-clés principaux',
        '3 mots-clés secondaires ciblés',
        'Analyse concurrentielle de votre marché',
        'Soumission aux moteurs de recherche (Google, Bing...)',
        'Consultation gratuite incluse',
      ],
      idealFor: 'Sites vitrines, blogs, entreprises locales',
      featured: true,
      color: 'bg-black',
      icon: <Search className="w-8 h-8 text-purple-300" />,
      linkPath: '/packSix'
    },
    {
      id: 'shooting',
      subtitle: 'Pack Shooting Pro',
      description: 'Mettez en valeur vos produits, locaux ou équipe avec des visuels de qualité.',
      features: [
        '20 photos HD (prises sur site)',
        '10 retouches professionnelles',
        'Vidéo backstage (jusqu\'à 30 secondes)',
        'Livraison sous 24h',
        'Consultation gratuite incluse',
      ],
      idealFor: 'Restaurants, hôtels, e-commerce, profils LinkedIn pros',
      featured: false,
      color: 'bg-white',
      icon: <Camera className="w-8 h-8 text-purple-500" />,
      linkPath: '/packFive'
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

  // Handle navigation
  const handlePackageClick = (linkPath) => {
    // For React Router, you would use: navigate(linkPath)
    // For Next.js, you would use: router.push(linkPath)
    // For vanilla JS, we use window.location
    window.location.href = linkPath;
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
            className={`relative rounded-3xl overflow-hidden shadow-lg cursor-pointer ${plan.featured ? 'md:scale-105 z-10' : ''} flex-1 max-w-md`}
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(plan.id)}
            onHoverEnd={() => setHoveredCard(null)}
            onClick={() => handlePackageClick(plan.linkPath)}
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
                  className={`w-full py-3 px-4 rounded-full ${plan.featured ? 'bg-white text-black' : 'bg-black text-white'} font-medium text-sm uppercase tracking-wider transition-colors hover:opacity-90`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when button is clicked
                    handlePackageClick(plan.linkPath);
                  }}
                >
                  Découvrir les options
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional CTA Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-gray-600 mb-4">
          Besoin d'une solution sur mesure ? 
        </p>
        <motion.button
          className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePackageClick('/contact')}
        >
          Contactez-nous
        </motion.button>
      </motion.div>
    </div>
  );
}