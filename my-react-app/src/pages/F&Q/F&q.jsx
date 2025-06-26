import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import suport from "../../assets/support.png"
export default function FAQPage() {
  const [activeSection, setActiveSection] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const {t} = useTranslation();

 const faqSections = [
    {
      title: t('faq.sections.webDevelopment.title'),
      questions: [
        {
          question: t('faq.sections.webDevelopment.questions.0.question'),
          answer: t('faq.sections.webDevelopment.questions.0.answer')
        },
        {
          question: t('faq.sections.webDevelopment.questions.1.question'),
          answer: t('faq.sections.webDevelopment.questions.1.answer')
        },
        {
          question: t('faq.sections.webDevelopment.questions.2.question'),
          answer: t('faq.sections.webDevelopment.questions.2.answer')
        }
      ]
    },
    {
      title: t('faq.sections.branding.title'),
      questions: [
        {
          question: t('faq.sections.branding.questions.0.question'),
          answer: t('faq.sections.branding.questions.0.answer')
        },
        {
          question: t('faq.sections.branding.questions.1.question'),
          answer: t('faq.sections.branding.questions.1.answer')
        },
        {
          question: t('faq.sections.branding.questions.2.question'),
          answer: t('faq.sections.branding.questions.2.answer')
        }
      ]
    },
    {
      title: t('faq.sections.uiuxDesign.title'),
      questions: [
        {
          question: t('faq.sections.uiuxDesign.questions.0.question'),
          answer: t('faq.sections.uiuxDesign.questions.0.answer')
        },
        {
          question: t('faq.sections.uiuxDesign.questions.1.question'),
          answer: t('faq.sections.uiuxDesign.questions.1.answer')
        },
        {
          question: t('faq.sections.uiuxDesign.questions.2.question'),
          answer: t('faq.sections.uiuxDesign.questions.2.answer')
        }
      ]
    },
    {
      title: t('faq.sections.seoOptimization.title'),
      questions: [
        {
          question: t('faq.sections.seoOptimization.questions.0.question'),
          answer: t('faq.sections.seoOptimization.questions.0.answer')
        },
        {
          question: t('faq.sections.seoOptimization.questions.1.question'),
          answer: t('faq.sections.seoOptimization.questions.1.answer')
        },
        {
          question: t('faq.sections.seoOptimization.questions.2.question'),
          answer: t('faq.sections.seoOptimization.questions.2.answer')
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
            {t('faq.title.part1')} <span className='text-purple-400'>{t('faq.title.part2')}</span> {t('faq.title.part3')}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('faq.subtitle')}
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
      </div>
    </div>
  );
}