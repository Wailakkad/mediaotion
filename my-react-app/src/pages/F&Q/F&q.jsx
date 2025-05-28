import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import suport from "../../assets/support.png"
export default function FAQPage() {
  const [activeSection, setActiveSection] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const faqSections = [
    {
      title: 'Website Development',
      questions: [
        {
          question: 'What technologies do you use for website development?',
          answer: 'We utilize modern technologies including React, Next.js, Vue.js, and WordPress depending on client needs. For styling, we implement Tailwind CSS and SCSS. Our backend solutions include Node.js, Python, and PHP frameworks.'
        },
        {
          question: 'How long does it typically take to build a website?',
          answer: 'Development timelines vary based on complexity. Simple websites can be completed in 2-4 weeks, while more complex projects with custom functionality may take 2-3 months. E-commerce platforms and enterprise solutions typically require 3-6 months for proper development and testing.'
        },
        {
          question: 'Do you offer website maintenance after launch?',
          answer: 'Yes, we provide comprehensive maintenance packages that include regular updates, security monitoring, performance optimization, and content updates. Our support teams ensure your website remains secure, fast, and up-to-date with current web standards.'
        }
      ]
    },
    {
      title: 'Branding',
      questions: [
        {
          question: 'What does your branding service include?',
          answer: 'Our branding services encompass logo design, color palette development, typography selection, brand guidelines creation, messaging strategy, and visual identity systems. We focus on creating cohesive brand experiences that resonate with your target audience.'
        },
        {
          question: 'How do you approach the branding process?',
          answer: 'We begin with discovery sessions to understand your business goals, target audience, and market positioning. We then conduct research, develop concept directions, refine the chosen direction, and deliver comprehensive brand assets and guidelines for implementation.'
        },
        {
          question: 'Can you refresh our existing brand instead of creating a new one?',
          answer: 'Absolutely. Brand refreshes can modernize your visual identity while maintaining brand recognition. We analyze your current branding, identify elements to preserve, and thoughtfully update components to better align with your current business goals and market position.'
        }
      ]
    },
    {
      title: 'UI/UX Design',
      questions: [
        {
          question: 'What\'s your UI/UX design process?',
          answer: 'Our process includes user research, information architecture, wireframing, prototyping, visual design, and usability testing. We create user-centered designs that balance aesthetic appeal with functionality and intuitive navigation.'
        },
        {
          question: 'How do you ensure designs are accessible?',
          answer: 'We adhere to WCAG guidelines, implementing proper color contrast, semantic HTML, keyboard navigation, screen reader compatibility, and responsive design. We conduct accessibility audits throughout the design and development process to ensure inclusivity.'
        },
        {
          question: 'Do you create design systems for larger projects?',
          answer: 'Yes, for complex projects we develop comprehensive design systems with reusable components, style guides, interaction patterns, and documentation. This ensures consistency across all touchpoints and facilitates efficient scaling and maintenance.'
        }
      ]
    },
    {
      title: 'SEO Optimization',
      questions: [
        {
          question: 'What SEO services do you offer?',
          answer: 'Our SEO services include technical SEO audits, on-page optimization, content strategy, keyword research, competitive analysis, local SEO, link building, performance optimization, and monthly analytics reporting with actionable insights.'
        },
        {
          question: 'How long does it take to see results from SEO efforts?',
          answer: 'SEO is a long-term strategy. Initial improvements can be seen within 3-4 months, but significant results typically appear after 6-12 months of consistent optimization. We provide regular progress updates throughout the process.'
        },
        {
          question: 'Do you guarantee first-page rankings?',
          answer: 'We don\'t guarantee specific rankings as search algorithms constantly evolve and many factors are outside our control. Instead, we focus on sustainable optimization practices that improve visibility, traffic quality, and conversions over time.'
        }
      ]
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const shapeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 0.8,
      transition: { duration: 0.8 }
    }
  };

  const toggleSection = (title) => {
    setActiveSection(activeSection === title ? '' : title);
    setActiveFaq(null);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden mt-30">
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute top-40 right-20 w-40 h-40 rounded-full bg-violet-400 mix-blend-multiply filter blur-xl"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-purple-500 mix-blend-multiply filter blur-lg"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      />

      <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-black">
            Frequently <span className='text-purple-400'>Asked</span> Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? We've compiled answers to common inquiries to help you understand how we can elevate your digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8"
        >
          {faqSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title} 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-purple-600"
            >
              <motion.div
                onClick={() => toggleSection(section.title)}
                className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-gray-50 to-white hover:from-purple-50 hover:to-violet-50 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                <div className="text-purple-700">
                  {activeSection === section.title ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </motion.div>

              {activeSection === section.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="space-y-4">
                    {section.questions.map((faq, faqIndex) => (
                      <motion.div 
                        key={faqIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: faqIndex * 0.1 }}
                        className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                      >
                        <div 
                          onClick={() => toggleFaq(`${sectionIndex}-${faqIndex}`)}
                          className="flex justify-between items-center py-2 cursor-pointer group"
                        >
                          <h3 className="text-lg font-medium text-gray-700 group-hover:text-purple-700 transition-colors duration-200">
                            {faq.question}
                          </h3>
                          <div className="text-purple-600">
                            {activeFaq === `${sectionIndex}-${faqIndex}` ? 
                              <ChevronUp size={18} /> : 
                              <ChevronDown size={18} />
                            }
                          </div>
                        </div>
                        
                        {activeFaq === `${sectionIndex}-${faqIndex}` && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 text-gray-600 pl-2 border-l-2 border-purple-300"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden shadow-lg"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left side contact section */}
            <div className="p-8 md:p-10 md:w-1/2 flex flex-col gap-4 items-center justify-center ">
              <img src={suport} alt="" width={200} height={200} />
              <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="text-2xl text-center font-bold mb-3 text-purple-700"
              >
                See our solutions in action
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="mb-6 text-gray-600 text-center"
              >
                Request a demo to chat and learn how to drive more digital revenue with personalized website experiences.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition"
                />
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-violet-800 transition-all duration-300 shadow-md whitespace-nowrap">
                  Request Demo
                </button>
              </motion.div>
              </div>
            </div>
            
            {/* Right side phone image with chat messages */}
            <div className="md:w-1/2 relative bg-gradient-to-br from-purple-100 to-violet-50 py-8 px-4 md:p-0 flex items-center justify-center overflow-hidden">
              {/* Decorative elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 rounded-full bg-purple-200 mix-blend-multiply filter blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className="absolute bottom-10 left-20 w-16 h-16 rounded-full bg-violet-300 mix-blend-multiply filter blur-lg"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Phone mockup with messages */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7 }}
                className="relative bg-white rounded-3xl shadow-xl w-64 h-96 border-8 border-gray-100 overflow-hidden m-10"
              >
                {/* Phone top bar */}
                <div className="h-6 bg-gray-100 flex justify-center items-center">
                  <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                </div>
                
                {/* Chat interface */}
                <div className="p-3 h-full bg-gray-50 flex flex-col">
                  {/* Company message */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.4 }}
                    className="self-start bg-purple-100 text-purple-800 text-sm p-2 rounded-lg rounded-tl-none mb-2 max-w-xs shadow-sm"
                  >
                    Hi there! How can we help with your website project?
                  </motion.div>
                  
                  {/* User message */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7, duration: 0.4 }}
                    className="self-end bg-gradient-to-r from-purple-600 to-violet-700 text-white text-sm p-2 rounded-lg rounded-tr-none mb-2 max-w-xs shadow-sm"
                  >
                    I need help with UI/UX design for my new app
                  </motion.div>
                  
                  {/* Company message */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.9, duration: 0.4 }}
                    className="self-start bg-purple-100 text-purple-800 text-sm p-2 rounded-lg rounded-tl-none max-w-xs shadow-sm"
                  >
                    Great! Our designers specialize in creating intuitive user experiences. Would you like to schedule a consultation?
                  </motion.div>
                  
                  {/* Typing indicator */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 1.5,
                      delay: 2.1
                    }}
                    className="self-end mt-2"
                  >
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}