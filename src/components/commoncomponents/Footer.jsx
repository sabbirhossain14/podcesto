import React from 'react'
import Container from './Container'
import { AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { BsTelephone, BsFacebook } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaSpotify, FaApple, FaGooglePlay } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const hoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  }

  const socialIconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  }

  const linkVariants = {
    rest: { x: 0 },
    hover: { 
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  }

  const floatingAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <div className='bg-gradient-to-b from-[#13132C] to-[#0a0a1a] overflow-hidden'>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            transition: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#7678ED]/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            transition: { duration: 12, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tr from-[#7678ED]/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className='mt-6'>
            {/* ================== MAIN WRAPPER ================== */}
            <motion.div 
              variants={itemVariants}
              className='flex justify-between gap-10 pt-[80px] pb-[40px] max-md:flex-col max-md:gap-12 max-md:pt-20'
            >

              {/* ========== LOGO + TEXT + SOCIAL ========== */}
              <div className='w-[30%] max-md:w-full'>
                <motion.div
                  animate={floatingAnimation}
                  className="mb-6"
                >
                  <img src="./images/Logo.png" alt="Logo" className='max-md:w-40 max-md:mx-auto max-md:ml-0' />
                </motion.div>
                
                <p className='font-[Commissioner] text-[16px] leading-7 text-[#ffffffb0] mt-6 max-md:mt-4 max-md:text-left'>
                  The best sound and library for you and waste of resources
                  our competitors are jumping the shark for to be inspired
                  is to become creative and good
                </p>

                {/* App Download Links */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col gap-4 mt-8"
                >
                  <p className='font-[Commissioner] text-[14px] text-[#ffffff80]'>Download Our App</p>
                  <div className="flex gap-3">
                    <motion.a
                      variants={hoverVariants}
                      whileHover="hover"
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-lg border border-[#ffffff20] hover:bg-[#7678ED]/20 transition-colors"
                    >
                      <FaApple className="text-white text-xl" />
                      <div className="text-left">
                        <div className="text-[10px] text-[#ffffff80]">Download on the</div>
                        <div className="text-white text-sm font-medium">App Store</div>
                      </div>
                    </motion.a>
                    <motion.a
                      variants={hoverVariants}
                      whileHover="hover"
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-lg border border-[#ffffff20] hover:bg-[#7678ED]/20 transition-colors"
                    >
                      <FaGooglePlay className="text-white text-xl" />
                      <div className="text-left">
                        <div className="text-[10px] text-[#ffffff80]">Get it on</div>
                        <div className="text-white text-sm font-medium">Google Play</div>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Social Media Links */}
                <motion.div 
                  variants={itemVariants}
                  className="flex gap-4 mt-8"
                >
                  <motion.a
                    variants={socialIconVariants}
                    whileHover="hover"
                    href="#"
                    className="w-10 h-10 bg-[#7678ED]/20 rounded-full flex items-center justify-center text-white hover:bg-[#7678ED] transition-colors"
                  >
                    <BsFacebook />
                  </motion.a>
                  <motion.a
                    variants={socialIconVariants}
                    whileHover="hover"
                    href="#"
                    className="w-10 h-10 bg-[#7678ED]/20 rounded-full flex items-center justify-center text-white hover:bg-[#7678ED] transition-colors"
                  >
                    <AiOutlineTwitter />
                  </motion.a>
                  <motion.a
                    variants={socialIconVariants}
                    whileHover="hover"
                    href="#"
                    className="w-10 h-10 bg-[#7678ED]/20 rounded-full flex items-center justify-center text-white hover:bg-[#7678ED] transition-colors"
                  >
                    <AiOutlineInstagram />
                  </motion.a>
                  <motion.a
                    variants={socialIconVariants}
                    whileHover="hover"
                    href="#"
                    className="w-10 h-10 bg-[#7678ED]/20 rounded-full flex items-center justify-center text-white hover:bg-[#7678ED] transition-colors"
                  >
                    <AiOutlineYoutube />
                  </motion.a>
                  <motion.a
                    variants={socialIconVariants}
                    whileHover="hover"
                    href="#"
                    className="w-10 h-10 bg-[#7678ED]/20 rounded-full flex items-center justify-center text-white hover:bg-[#7678ED] transition-colors"
                  >
                    <FaSpotify />
                  </motion.a>
                </motion.div>
              </div>

              {/* ========== MENU (MOBILE GRID) ========== */}
              <div className='w-[70%] flex justify-between max-md:w-full max-md:grid max-md:grid-cols-2 max-md:gap-y-10'>

                {/* SERVICES */}
                <motion.div variants={itemVariants} className='max-md:text-left'>
                  <h3 className='font-[Commissioner] text-[18px] leading-7 text-white font-semibold mb-6'>
                    SERVICES
                  </h3>
                  <ul className='font-[Commissioner] text-[16px] leading-7 text-[#ffffffb0] flex flex-col gap-4'>
                    {['About Us', 'Contact Us', 'Features', 'Careers', 'Press Kit'].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={linkVariants}
                        whileHover="hover"
                        className="cursor-pointer hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-[#7678ED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* RESOURCES */}
                <motion.div variants={itemVariants} className='max-md:text-left'>
                  <h3 className='font-[Commissioner] text-[18px] leading-7 text-white font-semibold mb-6'>
                    RESOURCES
                  </h3>
                  <ul className='font-[Commissioner] text-[16px] leading-7 text-[#ffffffb0] flex flex-col gap-4'>
                    {['Our Apps', 'Our Blog', 'Our Pricing', 'Documentation', 'Tutorials'].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={linkVariants}
                        whileHover="hover"
                        className="cursor-pointer hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-[#7678ED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* SUPPORT */}
                <motion.div variants={itemVariants} className='max-md:text-left max-md:order-3'>
                  <h3 className='font-[Commissioner] text-[18px] leading-7 text-white font-semibold mb-6'>
                    SUPPORT
                  </h3>
                  <ul className='font-[Commissioner] text-[16px] leading-7 text-[#ffffffb0] flex flex-col gap-4'>
                    {['License System', 'Affiliate Market', 'Integration', 'Help Center', 'Community'].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={linkVariants}
                        whileHover="hover"
                        className="cursor-pointer hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-[#7678ED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* CONTACT */}
                <motion.div variants={itemVariants} className='w-[200px] max-md:w-full max-md:order-4 max-md:text-left'>
                  <h3 className='font-[Commissioner] text-[18px] leading-7 text-white font-semibold mb-6'>
                    CONTACT
                  </h3>
                  <div className='flex flex-col gap-6'>
                    <motion.a
                      variants={hoverVariants}
                      whileHover="hover"
                      href="mailto:hellopodacesto.com"
                      className='flex items-center gap-3 font-[Commissioner] text-[16px] leading-7 text-[#ffffffb0] hover:text-white transition-colors group'
                    >
                      <div className="w-10 h-10 bg-[#7678ED]/20 rounded-full flex items-center justify-center group-hover:bg-[#7678ED] transition-colors">
                        <AiOutlineMail className="text-lg" />
                      </div>
                      <div>
                        <div className="text-sm text-[#ffffff80]">Email</div>
                        <div>@hellopodacesto.com</div>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      variants={hoverVariants}
                      whileHover="hover"
                      href="tel:+022675463857674"
                      className='flex items-center gap-3 font-[Commissioner] text-[16px] leading-7 text-[#ffffffb0] hover:text-white transition-colors group'
                    >
                      <div className="w-10 h-10 bg-[#7678ED]/20 rounded-full flex items-center justify-center group-hover:bg-[#7678ED] transition-colors">
                        <BsTelephone className="text-lg" />
                      </div>
                      <div>
                        <div className="text-sm text-[#ffffff80]">Phone</div>
                        <div>+022675463857674</div>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      variants={hoverVariants}
                      whileHover="hover"
                      href="https://www.google.com/maps/place/Axe+Street+Millennial+56"
                      target="_blank" rel="noopener noreferrer"
                      className='flex items-center gap-3 font-[Commissioner] text-[16px] leading-7 text-[#ffffffb0] hover:text-white transition-colors group'
                    >
                      <div className="w-10 h-10 bg-[#7678ED]/20 rounded-full flex items-center justify-center group-hover:bg-[#7678ED] transition-colors">
                        <CiLocationOn className="text-lg" />
                      </div>
                      <div>
                        <div className="text-sm text-[#ffffff80]">Location</div>
                        <div>Axe Street Millennial 56</div>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* ========== BOTTOM BORDER ========== */}
          <motion.div 
            variants={itemVariants}
            className='border-t border-[#ffffff20] py-8 flex flex-col md:flex-row justify-between items-center gap-6'
          >
            <div className="text-center md:text-left">
              <span className='text-[#ffffff80] font-[Commissioner] text-[14px] leading-6'>
                Copyright 2021 Podcesto All Right Reserved
              </span>
              <div className="flex gap-6 mt-2">
                <a href="#" className="text-[#ffffff80] text-sm hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-[#ffffff80] text-sm hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-[#ffffff80] text-sm hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-[#7678ED] to-blue-500 rounded-full cursor-pointer"
            >
              <a href="#top" className="font-[Commissioner] text-white text-sm font-medium">
                Back to Top ↑
              </a>
            </motion.div>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div 
            variants={itemVariants}
            className="py-8 border-t border-[#ffffff10]"
          >
            <div className="max-w-md mx-auto text-center">
              <h4 className="font-[Commissioner] text-white text-xl font-semibold mb-3">Stay Updated</h4>
              <p className="text-[#ffffff80] text-sm mb-6">Subscribe to our newsletter for the latest podcast tips</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/30 border border-[#ffffff20] rounded-lg text-white placeholder-[#ffffff60] focus:outline-none focus:border-[#7678ED]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#7678ED] to-blue-500 text-white font-medium rounded-lg hover:shadow-lg transition-shadow"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Footer