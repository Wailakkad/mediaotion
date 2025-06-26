import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Testimonials = () => {
  const {t} = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const navigate = useNavigate(); // Add this line


  const testimonials = [
    {
      id: 1,
      name: t('testimonial1Name'),
      role: t('testimonial1Role'),
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      content: t('testimonial1Content'),
      rating: 5
    },
    {
      id: 2,
      name: t('testimonial2Name'),
      role: t('testimonial2Role'),
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      content: t('testimonial2Content'),
      rating: 5
    },
    {
      id: 3,
      name: t('testimonial3Name'),
      role: t('testimonial3Role'),
      avatarUrl: "https://randomuser.me/api/portraits/men/65.jpg",
      content: t('testimonial3Content'),
      rating: 5
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "128px",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(79, 70, 229, 0.15)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.98 }
  };

  const ratingStars = (rating) => {
    return Array(rating).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className="w-4 h-4 text-yellow-400 fill-yellow-400" 
      />
    ));
  };

  const Avatar = ({ avatarUrl, name }) => (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-white font-medium">
      {avatarUrl ? (
        <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
      ) : (
        name.split(" ").map(n => n[0]).join("").toUpperCase()
      )}
    </div>
  );

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-gray-50 rounded-4xl">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          variants={headingVariants}
        >
          {t('testimonialsTitle')}
        </motion.h2>
        
        <motion.div 
          className="h-1 bg-purple-600 w-32 mx-auto mb-6"
          variants={lineVariants}
        ></motion.div>
        
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
          variants={descriptionVariants}
        >
           {t('testimonialsDescription')}
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className={`rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${
              index === 1 ? "bg-black text-white" : "bg-white"
            }`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 * index }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="flex mb-3">
              {ratingStars(testimonial.rating)}
            </div>
            
            <p className={`mb-6 font-medium italic ${
              index === 1 ? "text-gray-200" : "text-gray-700"
            }`}>
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center">
              <div className="mr-4">
                <Avatar avatarUrl={testimonial.avatarUrl} name={testimonial.name} />
              </div>
              <div>
                <h4 className={`font-semibold ${
                  index === 1 ? "text-white" : "text-gray-800"
                }`}>{testimonial.name}</h4>
                <p className={`text-sm ${
                  index === 1 ? "text-gray-300" : "text-gray-500"
                }`}>{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-16 px-6 py-12 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl text-center text-white shadow-xl"
        variants={ctaVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('ctaTitle')}</h3>
        <p className="max-w-lg mx-auto mb-8">{t('ctaDescription')}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md flex items-center justify-center"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate('/packOne')}
          >
            {t('getStarted')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
          
          <motion.button 
            className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg flex items-center justify-center"
            onClick={() => navigate('/f&q')}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            {t('learnMore')}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
