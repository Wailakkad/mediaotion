import { useState , useEffect } from 'react';
import { Phone, Users, BarChart , ChevronDown , Menu , X } from 'lucide-react';
import imHero from './assets/heroImg.png';
import { BrowserRouter as Router, Route, Routes, Link , useLocation , useNavigate } from 'react-router-dom';


import { motion, AnimatePresence } from 'framer-motion';
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
  
export default function   App() {

 const location = useLocation();

  
  const noLayoutPaths = [
    '/AdminDashbord',
    '/NewProject'
    
  ];
   const hideLayout = noLayoutPaths.includes(location.pathname);
  
  
   const Home = () => { 
    const navigate = useNavigate();
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-purple-10 px-4 sm:px-8 md:px-12 lg:px-20 mt-60">
        {/* Hero Section */}
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            
            {/* Left Column - Text */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
                Start Growing Your <br/>
                Business Through Better <br/>
                <span className="text-purple-600">Digital Presence</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto lg:mx-0">
                Maximize your visibility, minimize your limits. Unleash your 
                digital potential with our professional web solutions and
                innovative strategies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button  onClick={() => navigate('/services')} className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-8 rounded-lg shadow-lg transition-all font-medium">
                  Get Started
                </button>
                <button onClick={() => navigate('/f&q')} className="border border-purple-600 text-purple-700 hover:bg-purple-100 py-3 px-8 rounded-lg transition-all font-medium">
                  Learn More
                </button>
              </div>
            </motion.div>
  
            {/* Right Column - Image */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative mx-auto max-w-[500px]">
                {/* Main Image with Glow Effect */}
                <div className="relative rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-300 to-purple-600 opacity-40 blur-lg"></div>
                  <img 
                    src={imHero}
                    alt="Woman working on laptop"
                    className="relative rounded-3xl w-full object-cover shadow-xl"
                  />
                </div>
  
              
             {/* Floating Stats Card - Happy Clients */}
            {/* Floating Stats Card - Happy Clients */}
<motion.div 
  className="absolute top-6 -left-10 backdrop-blur-md bg-white/70 p-4 rounded-2xl shadow-xl flex flex-col items-center gap-3 border border-white/30"
  whileHover={{ scale: 1.05 }}
>
  <div className="flex">
    {/* Avatar 1 */}
    <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden -ml-0">
      <img 
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" 
        alt="Client avatar 1"
        className="h-full w-full object-cover"
      />
    </div>
    
    {/* Avatar 2 */}
    <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden -ml-2">
      <img 
        src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" 
        alt="Client avatar 2"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Avatar 3 */}
    <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden -ml-2">
      <img 
        src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" 
        alt="Client avatar 3"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Avatar 4 */}
    <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden -ml-2">
      <img 
        src="https://img.freepik.com/free-photo/isolated-shot-pleasant-looking-cheerful-beautiful-brunette-posing-against-pink-wall_273609-20417.jpg?semt=ais_hybrid&w=740" 
        alt="Client avatar 4"
        className="h-full w-full object-cover"
      />
    </div>

    {/* + Icon */}
    <div className="h-8 w-8 rounded-full bg-black border-2 border-white overflow-hidden flex items-center justify-center -ml-2">
      <span className="text-white text-xs font-bold">+</span>
    </div>
  </div>

  <div>
    <p className="font-bold text-lg">+1k Happy Clients</p>
  </div>
</motion.div>

  
                {/* Floating Circle with Chart */}
                <motion.div 
                  className="absolute top-20 -right-6 backdrop-blur-md bg-purple-700 p-4 rounded-full shadow-xl border border-purple-600/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <BarChart className="text-white w-8 h-8" />
                </motion.div>
  
                {/* Floating Stats Card - Active Members */}
                <motion.div 
                  className="absolute bottom-0 right-0 backdrop-blur-md bg-white/70 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gray-800 p-2 rounded-full flex items-center justify-center">
                    <Users className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">13.4 k +</p>
                    <p className="text-xs text-gray-700">Active members</p>
                  </div>
                </motion.div>
  
                {/* Floating Icon Card Left Middle */}
                <motion.div 
                  className="absolute top-50 -left-4 backdrop-blur-md bg-purple-700 p-4 rounded-full shadow-xl border border-purple-600/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-white flex items-center justify-center">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2" />
                      <line x1="8" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </motion.div>
  
                {/* Decorative Gradient Circles */}
                <div className="absolute top-1/4 right-1/3 bg-gradient-to-r from-pink-300 to-purple-400 w-6 h-6 rounded-full opacity-70 blur-sm" />
                <div className="absolute bottom-1/4 left-1/3 bg-gradient-to-tr from-purple-200 to-yellow-300 w-5 h-5 rounded-full opacity-60 blur-sm" />
                <div className="absolute bottom-1/3 right-1/4 bg-gradient-to-l from-pink-300 to-violet-300 w-8 h-8 rounded-full opacity-50 blur-sm" />
                <div className="absolute top-1/3 left-1/5 bg-purple-300 w-4 h-4 rounded-full opacity-40 blur-sm" />
                <div className="absolute bottom-1/5 right-1/3 bg-pink-300 w-5 h-5 rounded-full opacity-30 blur-sm" />
              </div>
            </motion.div>
          </div>
        </div>
        {/* Premium Services Section */}
        <div className="container mx-auto mt-50">
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
            <motion.div 
              className="flex items-center text-gray-600 text-xs sm:text-sm hover:text-purple-600 transition-colors duration-300"
              whileHover={{ x: 3 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mon - Fri 9:00am - 6:00pm
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-3 sm:space-x-4"
            variants={itemVariants}
          >
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
              className="bg-black text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center"
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

  useEffect(() => {
    // Set visible when component mounts to trigger animations
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Navigation links avec leurs routes respectives
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'F&Q', path: '/f&q' },
    { name: 'Contact', path: '/contact' }
  ];

  // Services avec leurs routes respectives


  const serviceLinks = [
    { name: 'Web Development', path: '/packThree' },
    { name: 'Branding', path: '/packTwo' },
    { name: 'Community Management', path: '/packFour' },
    { name: 'SEO Optimization', path: '/packSix' }
  ];


  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <motion.div 
        className="container mx-auto px-4 py-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <div>
              <img src={logo2} alt="NOVATECH Logo" width={150} height={150} />
            </div>
            <p className="text-sm">
             Our services are designed to fit your unique needs. We create personalized websites and community management strategies to ensure your online presence stands out. With us, you’ll receive customized solutions that align perfectly with your goals and objectives.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links avec navigation */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services avec navigation */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium text-white">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-sm hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Us */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-indigo-400" />
                <span className="text-sm">14, Bd de Paris, ETG 5, Bureau 49, Casablanca, Morocco</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-indigo-400" />
                <span className="text-sm">+212 6 10 67 11 98</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-indigo-400" />
                <span className="text-sm">contact@mediamotion.ma</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-800 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm mb-4 sm:mb-0">MediaMotion © Copyright 2025. All Rights Reserved.</div>
         
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
    <>
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
    </>
    
  );
}