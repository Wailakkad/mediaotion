import { Phone, Users, BarChart , ChevronDown , Menu , X , Globe,  Check} from 'lucide-react';
import imHero from './assets/heroImg.png';
import { useTranslation } from 'react-i18next';
import { Route, Routes, Link , useLocation , useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatAssistant from './components/ChatAssistant.jsx';  
import PremiumServices from './components/PremiemServices';
  import LogosSlider from './components/LogosSlider';
  import WhyChooseUs from './components/WhyChoseUs';
  import Logo from "./assets/Logo.png";
  import logo2 from "./assets/logo2.png";
  import PagePortfolio from './pages/portfolio/page';
  import Reviews from './components/Reviews';
  import FAQPage from './pages/F&Q/F&q';
  import PackOne from "./pages/NosPacks/packOne/PackOne";
  import PackTwo from "./pages/NosPacks/PackTwo/PackTwo";
  import Website from "./pages/Website";
  import ContactPage from './pages/contact/page';
  import PackThree from "./pages/NosPacks/PackThree/PackTree";
  import PackFour from "./pages/NosPacks/PackQuatre/PackfQuatre";
  import PackFive from "./pages/NosPacks/PackFive/PackFive";
  import CheckoutPage from "./pages/checkout/page";
  import PackSix from "./pages/NosPacks/PackSix/PackSix";
  import HeroSection from './pages/community/Community';
  import LoginPge from "./pages/LoginADMIN/Login.jsx";
  import AdminDasbord from "./pages/DasbordAdmin/DashbordAdmin.jsx"
  import AddProjectPage from "./pages/AddProjectPage/page.jsx";
  import ServicesPage from "./pages/services/page.jsx";
  import ProtectedRoute from "./outils/ProtecteRoutes.jsx";
  import { Facebook, Twitter, Instagram, Linkedin, MapPin,  Mail } from 'lucide-react';
  import vedio from "./assets/vedio.mp4";
  
export default function   App() {

 const location = useLocation();

  
  const noLayoutPaths = [
    '/AdminDashbord',
    '/NewProject'
    
  ];
   const hideLayout = noLayoutPaths.includes(location.pathname);
  
  
   const Home = () => { 
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [showVideoModal, setShowVideoModal] = useState(false);
    return (
      <div className="min-h-screen relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 mt-50">
       {/* Hero Section */}
        
        <div className="container mx-auto">
          {/* Animated Wave Background */}
          <div className="absolute inset-0 -z-10">
  {/* Base gradient background with modern feel */}
  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-indigo-50/30"></div>
  
  {/* Animated wave layers with smoother gradients */}
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
    <defs>
      <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.4"/>
        <stop offset="30%" stopColor="#c7d2fe" stopOpacity="0.5"/>
        <stop offset="70%" stopColor="#a5b4fc" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3"/>
      </linearGradient>
      <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef7ff" stopOpacity="0.3"/>
        <stop offset="40%" stopColor="#f3e8ff" stopOpacity="0.4"/>
        <stop offset="80%" stopColor="#e9d5ff" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#d8b4fe" stopOpacity="0.2"/>
      </linearGradient>
    </defs>
    
    {/* First wave layer with professional movement */}
    <motion.path
      d="M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"
      fill="url(#wave1)"
      animate={{
        d: [
          "M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z",
          "M0,350 C300,250 600,500 1200,350 L1200,800 L0,800 Z",
          "M0,380 C300,180 600,580 1200,320 L1200,800 L0,800 Z",
          "M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"
        ]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: [0.4, 0.0, 0.2, 1], // Custom cubic-bezier for smooth professional feel
        times: [0, 0.33, 0.66, 1]
      }}
    />
    
    {/* Second wave layer with offset timing */}
    <motion.path
      d="M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z"
      fill="url(#wave2)"
      animate={{
        d: [
          "M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z",
          "M0,480 C400,320 800,650 1200,420 L1200,800 L0,800 Z",
          "M0,520 C400,280 800,720 1200,380 L1200,800 L0,800 Z",
          "M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z"
        ]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 2,
        times: [0, 0.33, 0.66, 1]
      }}
    />
  </svg>
  
  {/* Modern floating gradient orbs with glassmorphism */}
  <motion.div
    className="absolute top-20 left-10 w-96 h-96 rounded-full"
    style={{
      background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 40%, rgba(236,72,153,0.05) 70%, transparent 100%)',
      filter: 'blur(60px)',
      backdropFilter: 'blur(10px)'
    }}
    animate={{
      x: [0, 60, -20, 0],
      y: [0, -40, 20, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360]
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: [0.23, 1, 0.32, 1]
    }}
  />
  
  <motion.div
    className="absolute bottom-20 right-10 w-80 h-80 rounded-full"
    style={{
      background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(99,102,241,0.15) 50%, rgba(59,130,246,0.1) 80%, transparent 100%)',
      filter: 'blur(50px)',
      backdropFilter: 'blur(8px)'
    }}
    animate={{
      x: [0, -50, 30, 0],
      y: [0, 50, -30, 0],
      scale: [1, 0.8, 1.1, 1],
      rotate: [360, 270, 180, 0]
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: [0.165, 0.84, 0.44, 1],
      delay: 3
    }}
  />
  
  {/* Additional ambient orb for depth */}
  <motion.div
    className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full"
    style={{
      background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, rgba(99,102,241,0.05) 60%, transparent 100%)',
      filter: 'blur(40px)',
      transform: 'translate(-50%, -50%)'
    }}
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }}
  />
           </div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            
            {/* Left Column - Text */}
            <div className="flex flex-col space-y-6">
  {/* Tech Badge */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 py-2 w-fit"
  >
    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
    <span className="text-sm font-medium text-gray-700">
      {t('tech') || 'Innovative Technology Solutions'}
    </span>
  </motion.div>

  {/* Main Hero Title */}
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
  >
    {t('heroTitle')}
  </motion.h1>

  {/* Subtitle with tech focus */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="text-xl text-gray-600 leading-relaxed max-w-2xl"
  >
    {t('heroText') || 'Empowering businesses with cutting-edge AI solutions, advanced automation, and intelligent systems that drive digital transformation and operational excellence.'}
  </motion.p>

 

  {/* CTA Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="flex flex-col sm:flex-row gap-4 pt-4"
  >
    <motion.button
      onClick={() => navigate('/services')}
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold backdrop-blur-sm relative overflow-hidden group"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center space-x-2">
        <span>{t('getStarted') || 'Get Started'}</span>
        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.button>

    <motion.button
      onClick={() => setShowVideoModal(true)}
      className="border-2 border-gray-300 hover:border-purple-400 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 py-4 px-8 rounded-xl transition-all duration-300 font-semibold backdrop-blur-sm group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="flex items-center space-x-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{t('viewDemo') || 'View Demo'}</span>
      </span>
    </motion.button>
  </motion.div>

             </div>
  
            {/* Right Column - Image */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="lg:w-1/2 relative"
            >
              <div className="relative mx-auto max-w-[500px]">
                {/* Main Image with Modern Glow Effect */}
                <motion.div 
                  className="relative rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-300/15 to-indigo-400/20 blur-2xl transform scale-110"></div>
                  <img 
                    src={imHero}
                    alt="Woman working on laptop"
                    className="relative rounded-3xl w-full object-cover shadow-2xl"
                  />
                  {/* Modern overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-white/10 rounded-3xl"></div>
                </motion.div>
  
              
             {/* Modern Floating Stats Card - Happy Clients */}
<motion.div 
  className="absolute top-6 -left-10 backdrop-blur-xl bg-white/80 border border-white/20 p-5 rounded-3xl shadow-2xl flex flex-col items-center gap-4"
  style={{
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)"
  }}
  initial={{ opacity: 0, y: 20, scale: 0.8 }}
  animate={{ 
    opacity: 1, 
    y: [0, -10, 0], 
    scale: 1 
  }}
  transition={{
    opacity: { delay: 0.8, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    scale: { delay: 0.8, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
  }}
  whileHover={{ 
    scale: 1.08, 
    y: -5,
    transition: { duration: 0.2 }
  }}
>
  <div className="flex -space-x-2">
    {/* Avatar 1 with modern styling */}
    <motion.div 
      className="h-10 w-10 rounded-full border-3 border-white/60 overflow-hidden ring-2 ring-purple-100"
      whileHover={{ scale: 1.1, zIndex: 10 }}
    >
      <img 
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" 
        alt="Client avatar 1"
        className="h-full w-full object-cover"
      />
    </motion.div>
    
    {/* Avatar 2 */}
    <motion.div 
      className="h-10 w-10 rounded-full border-3 border-white/60 overflow-hidden ring-2 ring-purple-100"
      whileHover={{ scale: 1.1, zIndex: 10 }}
    >
      <img 
        src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" 
        alt="Client avatar 2"
        className="h-full w-full object-cover"
      />
    </motion.div>

    {/* Avatar 3 */}
    <motion.div 
      className="h-10 w-10 rounded-full border-3 border-white/60 overflow-hidden ring-2 ring-purple-100"
      whileHover={{ scale: 1.1, zIndex: 10 }}
    >
      <img 
        src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" 
        alt="Client avatar 3"
        className="h-full w-full object-cover"
      />
    </motion.div>

    {/* Avatar 4 */}
    <motion.div 
      className="h-10 w-10 rounded-full border-3 border-white/60 overflow-hidden ring-2 ring-purple-100"
      whileHover={{ scale: 1.1, zIndex: 10 }}
    >
      <img 
        src="https://img.freepik.com/free-photo/isolated-shot-pleasant-looking-cheerful-beautiful-brunette-posing-against-pink-wall_273609-20417.jpg?semt=ais_hybrid&w=740" 
        alt="Client avatar 4"
        className="h-full w-full object-cover"
      />
    </motion.div>

    {/* Modern + Icon */}
    <motion.div 
      className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-3 border-white/60 overflow-hidden flex items-center justify-center ring-2 ring-purple-100"
      whileHover={{ scale: 1.1, rotate: 90 }}
    >
      <span className="text-white text-sm font-bold">+</span>
    </motion.div>
  </div>

  <div className="text-center">
    <motion.p 
      className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      12K+
    </motion.p>
    <p className="text-xs text-gray-600 font-medium">{t('HappyClients')}</p>
  </div>
</motion.div>

  
                {/* Modern Floating Circle with Chart Icon */}
                <motion.div 
                  className="absolute top-20 -right-6 backdrop-blur-xl bg-gradient-to-br from-purple-600 to-purple-700 p-5 rounded-full shadow-2xl border border-purple-500/20"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.4)"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: [0, 360] 
                  }}
                  transition={{
                    opacity: { delay: 1, duration: 0.6 },
                    scale: { delay: 1, duration: 0.6 },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear", delay: 1.6 }
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 35px 60px -12px rgba(147, 51, 234, 0.5)"
                  }}
                >
                  <BarChart className="text-white w-8 h-8 drop-shadow-lg" />
                </motion.div>
  
                {/* Modern Floating Stats Card - Active Members */}
                <motion.div 
                  className="absolute bottom-0 right-0 backdrop-blur-xl bg-white/80 border border-white/20 p-5 rounded-3xl shadow-2xl flex items-center gap-4"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -8, 0], 
                    scale: 1 
                  }}
                  transition={{
                    opacity: { delay: 1.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                    scale: { delay: 1.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-slate-800 to-slate-900 p-3 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 5 }}
                  >
                    <Users className="text-white w-6 h-6" />
                  </motion.div>
                  <div>
                    <motion.p 
                      className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    >
                      13.4k+
                    </motion.p>
                    <p className="text-sm text-gray-600 font-medium">{t('ActiveMembers')}</p>
                  </div>
                </motion.div>
  
                {/* Modern Floating Icon Card Left Middle */}
                <motion.div 
                  className="absolute top-50 -left-4 backdrop-blur-xl bg-gradient-to-br from-indigo-600 to-purple-700 p-4 rounded-2xl shadow-2xl border border-indigo-500/20"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.4)"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: [0, 10, 0],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{
                    opacity: { delay: 0.6, duration: 0.6 },
                    scale: { delay: 0.6, duration: 0.6 },
                    x: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: -5,
                    boxShadow: "0 35px 60px -12px rgba(99, 102, 241, 0.5)"
                  }}
                >
                  <div className="text-white flex items-center justify-center">
                    <svg className="w-7 h-7 drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                      <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="8" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </motion.div>
  
                {/* Modern Decorative Gradient Elements */}
                <motion.div 
                  className="absolute top-1/4 right-1/3 bg-gradient-to-r from-pink-400 to-purple-500 w-8 h-8 rounded-full opacity-60 blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/4 left-1/3 bg-gradient-to-tr from-purple-400 to-yellow-400 w-6 h-6 rounded-full opacity-50 blur-sm"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.7, 0.5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 bg-gradient-to-l from-pink-400 to-violet-400 w-10 h-10 rounded-full opacity-40 blur-sm"
                  animate={{
                    scale: [1, 0.8, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="absolute top-1/3 left-1/5 bg-gradient-to-br from-purple-500 to-indigo-500 w-5 h-5 rounded-full opacity-30 blur-sm"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/5 right-1/3 bg-gradient-to-t from-pink-400 to-purple-400 w-7 h-7 rounded-full opacity-35 blur-sm"
                  animate={{
                    x: [0, 15, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.35, 0.55, 0.35]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Video Demo Modal */}
          <AnimatePresence>
  {showVideoModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={() => setShowVideoModal(false)}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.5, opacity: 0, y: 50 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          mass: 0.8 
        }}
        className="relative max-w-4xl w-full mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Product Demo</h3>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowVideoModal(false)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-gray-900">
          <video
            controls
            autoPlay
            className="w-full h-full object-cover"
            poster="https://via.placeholder.com/800x450/6366f1/ffffff?text=Demo+Video"
          >
            <source src={vedio} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-black">
          <p className="text-white text-center">
            See how our solutions can transform your business operations
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
          </AnimatePresence>

          <ChatAssistant/>
        </div>
        {/* Premium Services Section */}
        <div className="container mx-auto mt-50 ">
          <PremiumServices />
      </div>
        {/* Logos Slider Section */}
        <div className="">
          <LogosSlider />
          </div>
        {/* Why Choose Us Section */}
        <div className="container mx-auto mt-16">
          <WhyChooseUs />
          </div>
        {/* Reviews Section */}
        <div className="container mx-auto mt-16">
          <Reviews />
      </div>
      </div>
    );
  };



// LanguageSwitcher Component
const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();



  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      flag: '🇺🇸',
      nativeName: 'English'
    },
    { 
      code: 'fr', 
      name: 'French', 
      flag: '🇫🇷',
      nativeName: 'Français'
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  
const handleLanguageChange = (langCode) => {
  setCurrentLanguage(langCode);
  setIsOpen(false);
  i18n.changeLanguage(langCode); // <-- This line actually changes the language globally
};

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 border border-purple-200 hover:border-purple-300 transition-all duration-300 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Globe Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Globe className="h-4 w-4 text-purple-600" />
        </motion.div>

        {/* Current Language */}
        <div className="flex items-center space-x-1">
          <span className="text-lg leading-none">{currentLang.flag}</span>
          <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
            {currentLang.code}
          </span>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-3 w-3 text-gray-500 group-hover:text-purple-600 transition-colors" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
            style={{
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">Select Language</span>
              </div>
            </div>

            {/* Language Options */}
            <div className="py-2">
              {languages.map((language, index) => (
                <motion.button
                  key={language.code}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full px-4 py-3 flex items-center justify-between hover:bg-purple-50 transition-all duration-200 group ${
                    currentLanguage === language.code ? 'bg-purple-50 border-r-4 border-purple-600' : ''
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{language.flag}</span>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600">
                        {language.nativeName}
                      </div>
                      <div className="text-xs text-gray-500">{language.name}</div>
                    </div>
                  </div>
                  
                  {/* Check mark for current language */}
                  {currentLanguage === language.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-purple-600"
                    >
                      <Check className="h-4 w-4" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <div className="text-xs text-gray-500 flex items-center justify-center space-x-1">
                <Globe className="h-3 w-3" />
                <span>Auto-detect: Browser Language</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
  
const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();
  
    // Navigation items with potential dropdowns and routes
    const navItems = [
      { name: 'Home', dropdown: false, path: '/' },
      { name: 'Website' ,dropdown: false, path: '/website'},
      { name: 'Community Management', dropdown: false, path: '/community' },
      { name: 'Portfolio', dropdown: false, path: '/portfolio' },
      { name: 'Contact Us', dropdown: false, path: '/contact' },
      { name: 'Nos Packs', dropdown: true, 
        items: [
          { name: 'pack basic', path: '/packOne' },
          { name: 'Pack conception graphique', path: '/packTwo' },
          { name: 'Pack site web', path: '/packThree' },
          { name: 'Pack community management', path: '/packFour' },
          { name: 'Pack Photographie', path: '/packFive' },
          { name: 'Pack Seo', path: '/packSix' },
        ] 
      },
      { name: 'F&Q', dropdown: false, path: '/f&q' },
      
    ];
  
    // Update active tab based on current route
    useEffect(() => {
      const currentPath = location.pathname;
      const activeItem = navItems.find(item => 
        !item.dropdown && item.path === currentPath ||
        item.dropdown && item.items.some(subItem => subItem.path === currentPath)
      );
      
      if (activeItem) {
        setActiveTab(activeItem.name);
      }
    }, [location.pathname]);
  
    // Handle scroll effects
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle clicks outside of dropdowns to close them
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (openDropdown && !event.target.closest('.dropdown-container')) {
          setOpenDropdown(null);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [openDropdown]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      } else {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      };
    }, [isMobileMenuOpen]);
  
    // Toggle dropdown visibility
    const toggleDropdown = (itemName) => {
      if (openDropdown === itemName) {
        setOpenDropdown(null);
      } else {
        setOpenDropdown(itemName);
      }
    };

    // Close mobile menu function
    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    };
  
    // Animation variants
    const navbarVariants = {
      initial: { opacity: 0, y: -25 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          staggerChildren: 0.1
        }
      }
    };
  
    const itemVariants = {
      initial: { opacity: 0, y: -10 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.3 }
      }
    };
  
    const socialIconVariants = {
      initial: { scale: 0 },
      animate: { 
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 20 } 
      },
      hover: { 
        scale: 1.2, 
        color: "#9333ea",
        transition: { duration: 0.2 }
      }
    };
  
    // Mobile menu animation
    const mobileMenuVariants = {
      closed: { 
        x: "100%",
        transition: { 
          duration: 0.3,
          ease: "easeInOut"
        }
      },
      open: { 
        x: 0,
        transition: { 
          duration: 0.4,
          ease: "easeOut"
        }
      }
    };
  
    const mobileItemVariants = {
      closed: { x: 50, opacity: 0 },
      open: { 
        x: 0, 
        opacity: 1,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }
      }
    };
  
    // Dropdown animation
    const dropdownVariants = {
      hidden: { opacity: 0, y: -20, height: 0 },
      visible: { 
        opacity: 1, 
        y: 0, 
        height: "auto",
        transition: { duration: 0.3 }
      }
    };

    const mobileDropdownVariants = {
      hidden: { opacity: 0, height: 0 },
      visible: { 
        opacity: 1, 
        height: "auto",
        transition: { duration: 0.3 }
      }
    };
  
    // Hover animations for navigation items
    const navItemAnimation = {
      rest: { width: 0 },
      hover: { 
        width: "100%", 
        transition: { duration: 0.3 } 
      }
    };
  
    return (
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg' : 'nnone'}`}
        initial="initial"
        animate="animate"
        variants={navbarVariants}
        style={{ 
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        {/* Header with Contact Info */}
        <motion.div 
          className="py-2 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col sm:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <motion.div 
            className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:contact@company.com" 
              className="flex items-center text-gray-600 text-xs sm:text-sm hover:text-purple-600 transition-colors duration-300"
              whileHover={{ x: 3 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@mediamotion.ma
            </motion.a>
           
          </motion.div>
          <motion.div 
            className="flex items-center space-x-3 sm:space-x-4"
            variants={itemVariants}
          >
            <LanguageSwitcher />
            {/* Social icons with animations */}
            <motion.a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-600"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.a>
            <motion.a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-600"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-600"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
            <motion.a 
              href="tel:+1234567890" 
              className="bg-[#e4c1f9] text-black hover:text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#4c1d95",
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> +212 6 10 67 11 98
            </motion.a>
          </motion.div>
        </motion.div>
  
        {/* Navigation Menu */}
        <motion.div 
          className="bg-white py-2 sm:py-4 px-4 sm:px-8 md:px-12 lg:px-20"
          variants={itemVariants}
        >
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/">
                <motion.img 
                  src={Logo} 
                  alt="Logo" 
                  className="w-full h-auto max-w-[120px]" 
                />
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2 lg:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative dropdown-container">
                  {!item.dropdown ? (
                    <Link to={item.path}>
                      <motion.button 
                        className={`${activeTab === item.name ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600 text-sm lg:text-base flex items-center relative`}
                        onClick={() => setActiveTab(item.name)}
                        whileHover="hover"
                        variants={itemVariants}
                      >
                        {item.name}
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-purple-600 rounded-full"
                          variants={navItemAnimation}
                          initial="rest"
                          whileHover="hover"
                        />
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.button 
                      className={`${activeTab === item.name ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600 text-sm lg:text-base flex items-center relative`}
                      onClick={() => {
                        toggleDropdown(item.name);
                        setActiveTab(item.name);
                      }}
                      whileHover="hover"
                      variants={itemVariants}
                    >
                      {item.name}
                      <motion.span animate={{ rotate: openDropdown === item.name ? 180 : 0 }}>
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </motion.span>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-purple-600 rounded-full"
                        variants={navItemAnimation}
                        initial="rest"
                        whileHover="hover"
                      />
                    </motion.button>
                  )}
                  
                  {/* Dropdown menu - now toggled on click */}
                  {item.dropdown && openDropdown === item.name && (
                    <AnimatePresence>
                      <motion.div 
                        className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {item.items.map((subItem) => (
                          <Link 
                            key={subItem.name} 
                            to={subItem.path}
                            onClick={() => {
                              setOpenDropdown(null);
                            }}
                          >
                            <motion.div
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white rounded-2xl"
                              whileHover={{ x: 5 }}
                            >
                              {subItem.name}
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <motion.button 
              className="md:hidden text-gray-600 hover:text-purple-600 relative z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="flex flex-col items-center justify-center w-6 h-6"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: 45, y: 6, opacity: 1 }
                  }}
                  className="w-6 h-0.5 bg-current mb-1.5 origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-current mb-1.5"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: -45, y: -6, opacity: 1 }
                  }}
                  className="w-6 h-0.5 bg-current origin-center"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
        
        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
          )}
        </AnimatePresence>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden fixed top-0 right-0 h-screen w-80 max-w-full bg-white shadow-2xl z-50 overflow-y-auto"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Mobile menu header */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 relative min-h-[120px] flex flex-col justify-center">
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <h3 className="text-xl font-bold">Navigation</h3>
                    <p className="text-purple-200 text-sm mt-1">Choose your destination</p>
                  </div>
                  <motion.button
                    onClick={closeMobileMenu}
                    className="text-white hover:text-purple-200 transition-colors p-2 hover:bg-white hover:bg-opacity-20 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full translate-y-10 -translate-x-10"></div>
              </div>

              {/* Mobile menu content */}
              <div className="p-6 space-y-3 flex-1">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item.name} 
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {!item.dropdown ? (
                      <Link to={item.path} onClick={closeMobileMenu}>
                        <motion.div 
                          className={`${activeTab === item.name 
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg' 
                            : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                          } w-full text-left py-4 px-6 rounded-xl flex items-center justify-between transition-all duration-300 group cursor-pointer`}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="font-medium text-base">{item.name}</span>
                          <motion.div
                            className="w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                          />
                        </motion.div>
                      </Link>
                    ) : (
                      <div className="space-y-2">
                        <motion.button 
                          className={`${activeTab === item.name 
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg' 
                            : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                          } w-full text-left py-4 px-6 rounded-xl flex justify-between items-center transition-all duration-300 group`}
                          onClick={() => toggleDropdown(item.name)}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="font-medium text-base">{item.name}</span>
                          <motion.div
                            animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </motion.div>
                        </motion.button>
                        
                        {/* Mobile dropdown */}
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div 
                              className="ml-4 space-y-2 bg-gray-50 rounded-lg p-4 border-l-4 border-purple-300"
                              variants={mobileDropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              {item.items.map((subItem, subIndex) => (
                                <Link 
                                  key={subItem.name}
                                  to={subItem.path}
                                  onClick={closeMobileMenu}
                                >
                                  <motion.div
                                    className="block py-3 px-4 text-gray-600 hover:text-purple-600 hover:bg-white hover:shadow-md rounded-lg transition-all duration-300 cursor-pointer"
                                    whileHover={{ x: 5, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ 
                                      opacity: 1, 
                                      x: 0,
                                      transition: { delay: subIndex * 0.1 }
                                    }}
                                  >
                                    <span className="font-medium">{subItem.name}</span>
                                  </motion.div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile contact section */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-purple-200 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a 
                    href="/contact"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="h-5 w-5 mr-3" /> 
                    <span>Call Now</span>
                  </motion.a>

                  {/* Social links in mobile menu */}
                  <div className="flex justify-center space-x-6 pt-4">
                    <motion.a 
                      href="https://facebook.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://instagram.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://linkedin.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ); 
  }


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();          //  ←  i18n hook

  useEffect(() => setIsVisible(true), []);

  /* ───── links & services use translation keys ───── */
  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'portfolio', path: '/portfolio' },
    { key: 'faq', path: '/f&q' },
    { key: 'contact', path: '/contact' }
  ];

  const serviceLinks = [
    { key: 'webDevelopment', path: '/packThree' },
    { key: 'branding', path: '/packTwo' },
    { key: 'communityManagement', path: '/packFour' },
    { key: 'seo', path: '/packSix' }
  ];

  const socialIcons = [
    { icon: Facebook, href: '#' },
    { icon: Twitter,  href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
  ];

  /* ───── animation variants (unchanged) ───── */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <motion.div
        className="container mx-auto px-4 py-10"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* ───── main content grid ───── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand / description */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <img src={logo2} alt="NOVATECH Logo" width={150} height={150} />
            <p className="text-sm">{t('footer.description')}</p>

            <div className="flex space-x-3 pt-2">
              {socialIcons.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium text-white">{t('footer.quickLinksHeader')}</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ key, path }) => (
                <li key={key}>
                  <Link to={path} className="text-sm hover:text-white transition-colors duration-300">
                    {t(`footer.links.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium text-white">{t('footer.servicesHeader')}</h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ key, path }) => (
                <li key={key}>
                  <Link to={path} className="text-sm hover:text-white transition-colors duration-300">
                    {t(`footer.services.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium text-white">{t('footer.contactHeader')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-indigo-400" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-indigo-400" />
                <span>{t('footer.phone')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-indigo-400" />
                <span>{t('footer.email')}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="border-t border-gray-800 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="container mx-auto px-4 flex justify-center sm:justify-between items-center">
          <div className="text-sm">{t('footer.copyright')}</div>
        </div>
      </motion.div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


  
  return (
    <div>
      <ScrollToTop />
      {!hideLayout && <Navbar />}
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/website' element={<Website/>}/>
                <Route path='/community' element={<HeroSection/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/nos-packs' element={<HeroSection/>}/>f 
                <Route path='/packOne' element={<PackOne/>}/>
                <Route path='/packTwo' element={<PackTwo/>}/>
                <Route path='/packThree' element={<PackThree/>}/>
                <Route path='/packFour' element={<PackFour/>}/>
                <Route path='/packFive' element={<PackFive/>}/>
                <Route path='/packSix' element={<PackSix/>}/>
                <Route path='/Checkout' element={<CheckoutPage/>}/>
                <Route path='/f&q' element={<FAQPage/>}/>
                <Route path='/portfolio' element={<PagePortfolio/>}/>
                <Route path='/AdminLogin' element={<LoginPge/>} />
                <Route path='/NewProject' element={
                  <ProtectedRoute>
                    <AddProjectPage/>
                  </ProtectedRoute>
                }/>
                <Route path='/AdminDashbord' element={
                  <ProtectedRoute>
                    <AdminDasbord/>
                  </ProtectedRoute>
                } />
                <Route path='/services' element={<ServicesPage/>} />
      </Routes>
      {!hideLayout && <Footer />}
    </div>
    
  );
}