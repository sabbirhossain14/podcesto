import React, { useEffect, useRef } from 'react'
import Container from './Container'
import { FaCheckCircle, FaStar, FaPlayCircle } from 'react-icons/fa'
import { FiTrendingUp } from 'react-icons/fi'
import Button from './Button'
import { motion, useAnimation, useInView } from 'framer-motion'

const PodcastTheme = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      x: -30, 
      opacity: 0,
      scale: 0.95 
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        mass: 0.8
      }
    }
  };

  const rightItemVariants = {
    hidden: { 
      x: 30, 
      opacity: 0,
      scale: 0.95 
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        mass: 0.8
      }
    }
  };

  const featureItemVariants = {
    hidden: { 
      x: -20, 
      opacity: 0 
    },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    })
  };

  const checkIconVariants = {
    hidden: { 
      scale: 0, 
      rotate: -180 
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const imageContainerVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotateY: -15 
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.9
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 40px 80px -20px rgba(118, 120, 237, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <Container>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className='flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 my-20 mt-[100px]'
      >

        {/* Animated background elements */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute left-0 top-1/4 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl -z-10"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute right-0 bottom-1/4 w-48 h-48 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl -z-10"
        />

        {/* Left Content */}
        <motion.div 
          variants={itemVariants}
          className='flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[492px] relative'
        >
          {/* Decorative element */}
          <motion.div
            animate={floatingAnimation}
            className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#F18701] to-orange-400 rounded-full flex items-center justify-center shadow-lg"
          >
            <FaStar className="text-white text-lg" />
          </motion.div>

          {/* Heading with gradient effect */}
          <div className="relative">
            <motion.h1 
              variants={itemVariants}
              className='font-[Commissioner] text-[32px] sm:text-[36px] md:text-[48px] font-semibold leading-[34px] sm:leading-[46px] md:leading-[70px] text-[#13132C] w-[327px] sm:w-[420px] md:w-[491px] relative z-10'
            >
              What makes us
              <motion.span 
                animate={pulseAnimation}
                className="block bg-gradient-to-r from-[#F18701] via-orange-500 to-[#F18701] bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                different from others
              </motion.span>
            </motion.h1>
            
            {/* Animated underline */}
            <motion.div
              animate={{
                width: ["0%", "100%"],
                transition: { delay: 0.8, duration: 1, ease: "easeOut" }
              }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#F18701] to-transparent rounded-full"
            />
          </div>

          {/* Paragraph */}
          <motion.p 
            variants={itemVariants}
            className='font-[Commissioner] text-[13px] sm:text-[14px] md:text-[14px] leading-5 sm:leading-6 md:leading-6 text-[#898998] mt-6 w-[327px] sm:w-[420px] md:w-[420px] relative'
          >
            Waste of resources our competitors are jumping the shark for
            to be inspired is to become creative podcast hosters
          </motion.p>

          {/* Feature List */}
          <motion.ul 
            variants={containerVariants}
            className='mt-8 space-y-4 w-[327px] sm:w-[420px] md:w-[420px] flex flex-col items-start'
          >
            {[
              "Latest and feasible topics",
              "Curated speakers",
              "Available on all platform"
            ].map((feature, index) => (
              <motion.li 
                key={index}
                custom={index}
                variants={featureItemVariants}
                className="flex items-start gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  variants={checkIconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="relative"
                >
                  {/* Icon background glow */}
                  <motion.div
                    animate={pulseAnimation}
                    className="absolute inset-0 bg-[#F18701]/20 rounded-full blur-sm"
                  />
                  <FaCheckCircle className='text-[#F18701] w-5 h-5 flex-shrink-0 relative z-10' />
                </motion.div>
                <motion.span 
                  className='text-[#13132C] text-[15px] sm:text-[16px] font-[Commissioner] font-medium group-hover:text-[#F18701] transition-colors duration-300'
                  whileHover={{ scale: 1.02 }}
                >
                  {feature}
                </motion.span>
                
                {/* Hover effect line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-[#F18701] to-transparent"
                />
              </motion.li>
            ))}
          </motion.ul>

          {/* Stats display */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex gap-6"
          >
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
                className="text-2xl font-bold text-[#F18701]"
              >
                500K+
              </motion.div>
              <div className="text-sm text-[#898998]">Listeners</div>
            </div>
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  transition: { duration: 2, repeat: Infinity, delay: 0.5 }
                }}
                className="text-2xl font-bold text-[#7678ED]"
              >
                100+
              </motion.div>
              <div className="text-sm text-[#898998]">Podcasts</div>
            </div>
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  transition: { duration: 2, repeat: Infinity, delay: 1 }
                }}
                className="text-2xl font-bold text-[#4ADE80]"
              >
                50+
              </motion.div>
              <div className="text-sm text-[#898998]">Speakers</div>
            </div>
          </motion.div>

          {/* Button */}
          <motion.div 
            variants={itemVariants}
            className='mt-10 w-full md:w-auto flex justify-center md:justify-start relative group'
          >
            {/* Button glow effect */}
            <motion.div
              animate={pulseAnimation}
              className="absolute inset-0 bg-[#7678ED] rounded-lg blur-md opacity-50 -z-10"
            />
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(118, 120, 237, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                text={
                  <div className="flex items-center gap-2">
                    <span>Learn More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiTrendingUp />
                    </motion.div>
                  </div>
                }
                bgColor="#7678ED" 
                textColor="#FFFFFF" 
                font="Commissioner" 
                fontSize="16px" 
                fontWeight={500} 
                border='1px solid #7678ED'
                className='w-full md:w-auto px-8 py-3 rounded-xl'
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side image */}
        <motion.div 
          variants={rightItemVariants}
          className='w-[327px] sm:w-[420px] md:w-[592px] h-auto flex justify-center md:justify-end mb-6 md:mb-0 relative'
        >
          {/* Image container with 3D effect */}
          <motion.div
            variants={imageContainerVariants}
            whileHover="hover"
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="./images/PodcastImage.png"
              alt="Podcast Theme"
              className='w-full h-auto object-contain relative z-10'
            />
            
            {/* Play button overlay */}
            <motion.div
              animate={floatingAnimation}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                <FaPlayCircle className="text-[#7678ED] text-3xl" />
              </div>
            </motion.div>
            
            {/* Image background glow */}
            <motion.div
              animate={pulseAnimation}
              className="absolute inset-0 bg-gradient-to-br from-[#7678ED]/30 to-[#F18701]/30 blur-2xl -z-10"
            />
          </motion.div>

          {/* Floating elements around image */}
          <motion.div
            animate={{
              rotate: 360,
              transition: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute -top-6 -right-6 w-12 h-12 border-2 border-dashed border-[#7678ED]/30 rounded-full"
          />
          
          <motion.div
            animate={{
              rotate: -360,
              transition: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
            className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-dotted border-[#F18701]/30 rounded-full"
          />

          {/* Listening indicators */}
          <motion.div
            animate={pulseAnimation}
            className="absolute -top-4 right-10 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-700">Live Now</span>
          </motion.div>
        </motion.div>

      </motion.div>
    </Container>
  )
}

export default PodcastTheme