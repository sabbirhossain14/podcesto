import React, { useState, useEffect } from 'react';
import Container from './Container';
import { NavLink, useLocation } from 'react-router-dom';
import { IoMdMenu, IoMdClose, IoMdMic } from 'react-icons/io';
import { FaHeadphones, FaPodcast, FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const mobileMenuVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 0.5 }
  };

  const floatingAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const navItems = [
    { path: "/episodes", label: "Episodes", icon: <FaHeadphones className="md:hidden" /> },
    { path: "/reviews", label: "Reviews", icon: <IoMdMic className="md:hidden" /> },
    { path: "/blog", label: "Blog", icon: <FaPodcast className="md:hidden" /> },
    { path: "/contact", label: "Contact", icon: <IoMdMic className="md:hidden" /> }
  ];

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-4 md:py-6 relative">
          
          {/* Logo with animation */}
          <motion.div 
            animate={floatingAnimation}
            className="relative"
          >
            <NavLink to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7678ED] to-blue-500 rounded-lg flex items-center justify-center">
                <IoMdMic className="text-white text-xl" />
              </div>
              <div className="w-[120px] md:w-[150px]">
                <img 
                  src="./images/Logo.png" 
                  alt="Podcesto" 
                  className="w-full h-auto cursor-pointer" 
                />
              </div>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 font-[Commissioner]">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.path}
                custom={index}
                variants={navItemVariants}
                className="relative"
              >
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-[#7678ED] font-semibold' 
                        : 'text-[#62636C] hover:text-[#7678ED] hover:bg-[#7678ED]/10'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7678ED] rounded-full"
                    />
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Desktop CTA Section */}
          <motion.div 
            variants={navItemVariants}
            custom={4}
            className="hidden md:flex items-center gap-4"
          >
            {/* Sign In Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-xl font-[Commissioner] text-[#62636C] text-[16px] font-medium hover:bg-gray-200 transition-colors"
            >
              <FaUserCircle className="text-lg" />
              <span>Sign In</span>
            </motion.button>
            
            {/* Get Started Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#7678ED] to-blue-500 text-white font-[Commissioner] font-semibold text-[16px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="md:hidden w-10 h-10 bg-gradient-to-r from-[#7678ED] to-blue-500 rounded-lg flex items-center justify-center shadow-md"
          >
            <IoMdMenu className="text-white text-xl" />
          </motion.button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  variants={overlayVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="fixed inset-0 bg-black z-40"
                  onClick={() => setIsOpen(false)}
                />
                
                {/* Mobile Menu Panel */}
                <motion.div
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50"
                >
                  {/* Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#7678ED] to-blue-500 rounded-lg flex items-center justify-center">
                          <IoMdMic className="text-white text-xl" />
                        </div>
                        <span className="font-[Commissioner] font-bold text-[#13132C]">Podcesto</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                      >
                        <IoMdClose className="text-gray-600 text-xl" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-6">
                    <ul className="space-y-4">
                      {navItems.map((item) => (
                        <motion.li
                          key={item.path}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                isActive
                                  ? 'bg-gradient-to-r from-[#7678ED]/10 to-blue-500/10 text-[#7678ED] border-l-4 border-[#7678ED]'
                                  : 'text-[#62636C] hover:bg-gray-50'
                              }`
                            }
                            onClick={() => setIsOpen(false)}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              location.pathname === item.path 
                                ? 'bg-[#7678ED] text-white' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {item.icon}
                            </div>
                            <span className="font-[Commissioner] font-medium">{item.label}</span>
                          </NavLink>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Divider */}
                    <div className="my-8">
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    </div>

                    {/* Mobile CTA */}
                    <div className="space-y-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-gray-100 text-[#62636C] rounded-xl font-[Commissioner] font-medium flex items-center justify-center gap-2"
                      >
                        <FaUserCircle className="text-lg" />
                        Sign In
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-gradient-to-r from-[#7678ED] to-blue-500 text-white font-[Commissioner] font-semibold rounded-xl shadow-lg"
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Nav;