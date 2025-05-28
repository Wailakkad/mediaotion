import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Users, LayoutDashboard, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
  const controls = useAnimation();
  const [ref, setRef] = useState(null);
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
      title: "Tailored Design",
      description: "We create custom websites that align with your brand identity and specific goals, ensuring a unique online presence.",
      bgColor: "bg-purple-50"
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "User-Focused",
      description: "Our designs prioritize a seamless user experience, making navigation intuitive and engaging for your visitors.",
      bgColor: "bg-gray-50"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Measurable Success",
      description: "Obtains video order to optimize focally outstanding insights.",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 min-h-screen flex flex-col gap-20 items-center justify-center">
      <section 
        className="max-w-7xl mx-auto w-full"
        ref={setRef}
      >
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
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
              className={`rounded-2xl ${feature.bgColor} p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300`}
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
      <button onClick={()=> navigate("/packThree") } className='bg-black p-3 px-8 rounded-2xl text-white font-bold hover:bg-violet-800 transition duration-400 cursor-pointer'>Start now</button>

    </div>
  );
};

export default WhyChooseUs;