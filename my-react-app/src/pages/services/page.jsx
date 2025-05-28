import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Users, Search, ArrowRight, CheckCircle, Star, ArrowDown, Monitor, Video } from 'lucide-react';

const ServicesShowcase = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = (packageName, price) => {
    // You can replace these URLs with your actual checkout/contact links
    const packageLinks = {
      'Pack Site Vitrine': 'https://your-website.com/pack-site-vitrine',
      'Pack Identité Visuelle': 'https://your-website.com/pack-identite-visuelle', 
      'Pack Motion Design': 'https://your-website.com/pack-motion-design'
    };
    
    // Open the link in a new tab
    window.open(packageLinks[packageName] || '#', '_blank');
  };
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites built with the latest technologies to ensure fast loading, responsive designs.",
      icon: Code,
      bgColor: "bg-violet-50",
      iconBgColor: "bg-violet-600",
    },
    {
      id: 2,
      title: "Branding",
      description: "Crafting memorable brand identities and visuals that set you apart and build trust with your audience.",
      icon: Palette,
      bgColor: "bg-violet-100",
      iconBgColor: "bg-violet-800",
    },
    {
      id: 3,
      title: "Community Management",
      description: "Engaging and growing your online community to build loyalty and boost your brand's reputation.",
      icon: Users,
      bgColor: "bg-violet-50",
      iconBgColor: "bg-violet-600",
    },
    {
      id: 4,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      icon: Search,
      bgColor: "bg-violet-100",
      iconBgColor: "bg-violet-800",
    },
  ];

  const plans = [
    {
      name: "Pack Site Vitrine",
      price: "5000",
      currency: "DH",
      period: "",
      description: "Donnez vie à votre présence en ligne avec un site élégant et performant.",
      features: [
        "Jusqu'à 3 pages professionnelles",
        "Design sur mesure et attractif", 
        "Responsive design (mobile, tablette, desktop)",
        "Optimisation SEO de base",
        "Intégration de vos contenus (textes, images, formulaires)"
      ],
      idealFor: "Idéal pour : Artisans, commerçants, consultants, indépendants",
      popular: false,
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      icon: Monitor,
      iconColor: "text-gray-700",
      iconBg: "bg-gray-100"
    },
    {
      name: "Pack Identité Visuelle", 
      price: "900",
      currency: "DH",
      period: "",
      description: "Posez les bases d'une image de marque forte et cohérente.",
      features: [
        "2 propositions de logo personnalisées",
        "Design 100% original",
        "Livraison du logo HD + carte de visite",
        "Délai express : 48h"
      ],
      idealFor: "Idéal pour : Startups, auto-entrepreneurs, nouvelles marques",
      popular: true,
      bgColor: "bg-violet-600",
      borderColor: "border-violet-600",
      icon: Palette,
      iconColor: "text-violet-600",
      iconBg: "bg-violet-100"
    },
    {
      name: "Pack Motion Design",
      price: "4500", 
      currency: "DH",
      period: "",
      description: "Communiquez efficacement avec une vidéo animée professionnelle.",
      features: [
        "Vidéo animée jusqu'à 60 secondes",
        "Storyboard sur mesure", 
        "Musique de fond libre de droits",
        "Texte ou voix-off (jusqu'à 150 mots)"
      ],
      idealFor: "Idéal pour : Réseaux sociaux, présentations, campagnes de lancement",
      popular: false,
      bgColor: "bg-white",
      borderColor: "border-gray-200", 
      icon: Video,
      iconColor: "text-gray-700",
      iconBg: "bg-gray-100"
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
              Premium Services
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Mission Is To Make Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Business
              </span>{' '}
              Better Through Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We deliver cutting-edge digital solutions that transform your business and drive exceptional results.
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
            >
              See Below
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
              Our <span className="text-violet-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business to new heights.
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
              return (
                <motion.div
                  key={service.id}
                  className={`relative p-8 rounded-2xl ${service.bgColor} border border-violet-100 group cursor-pointer`}
                  variants={itemVariants}
                  whileHover="hover"
                  custom={cardHoverVariants}
                >
                  <motion.div
                    className={`w-16 h-16 ${service.iconBgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We Make IT Simple, Faster, And Less{' '}
              <span className="text-violet-600">Expensive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan that fits your business needs and budget. All plans include our premium support and guarantee.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 ${plan.bgColor} ${plan.borderColor} border-2 ${plan.popular ? 'shadow-2xl scale-105' : 'shadow-lg'}`}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: plan.popular ? 1.05 : 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Le Plus Populaire
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 ${plan.popular ? 'bg-white/20' : plan.iconBg} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                      <IconComponent className={`w-8 h-8 ${plan.popular ? 'text-white' : plan.iconColor}`} />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${plan.popular ? 'text-violet-100' : 'text-gray-600'} mb-4`}>
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-violet-600'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ${plan.popular ? 'text-violet-100' : 'text-gray-600'} ml-1`}>
                        {plan.currency}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-violet-200' : 'text-violet-500'} mr-3 mt-0.5 flex-shrink-0`} />
                        <span className={`${plan.popular ? 'text-white' : 'text-gray-700'} text-sm`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className={`text-sm ${plan.popular ? 'text-violet-100' : 'text-gray-600'} mb-6 italic`}>
                    {plan.idealFor}
                  </div>

                  <motion.button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all ${
                      plan.popular 
                        ? 'bg-white text-violet-600 hover:bg-violet-50' 
                        : 'bg-violet-600 text-white hover:bg-violet-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCheckout(plan.name, plan.price)}
                  >
                    Choisir ce Pack
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-violet-900 to-purple-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Let's discuss how we can help you achieve your digital goals and drive exceptional results.
          </p>
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-white text-violet-900 font-semibold rounded-lg hover:bg-violet-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesShowcase;