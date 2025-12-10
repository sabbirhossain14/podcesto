import React, { useEffect, useRef } from 'react';
import Container from './commoncomponents/Container';
import Button from './commoncomponents/Button';
import { motion, useAnimation, useInView } from 'framer-motion';

const Banner = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Staggered text animation for heading lines
  const headingLinesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Button animation variants
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // Image animation variants
  const leftImageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const rightImageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  // Floating animation for decorative elements
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
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
        className="flex flex-col-reverse md:flex-row justify-between py-12 md:py-20 items-center"
      >
        
        {/* Left content (Text + Buttons + Featured) */}
        <div className="w-full md:w-[50%] mt-8 md:mt-0 flex flex-col items-center md:items-start">
          
          {/* Heading with staggered line animation */}
          <motion.div 
            variants={headingLinesVariants}
            className="text-center md:text-left"
          >
            <motion.h1 
              variants={textVariants}
              className="text-[24px] sm:text-[40px] md:text-[60px] font-[Commissioner] font-semibold leading-[40px] sm:leading-[48px] md:leading-[76px] text-[#13132C] w-[327px] md:w-auto"
            >
              <motion.span variants={lineVariants} className="block">
                Let's Make What You
              </motion.span>
              <motion.span variants={lineVariants} className="block">
                Heard Are Preciously
              </motion.span>
              <motion.span variants={lineVariants} className="block">
                Worth It To Hear
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Paragraph */}
          <motion.p 
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={0.4}
            className="text-[14px] sm:text-[16px] font-[Commissioner] font-normal text-[#898998] leading-6 sm:leading-7 mt-6 mb-8 text-center md:text-left w-[327px] md:w-[416px]"
          >
            Waste of resources our competitors are jumping the shark
            for to be inspired is to become creative and it is easiest
            way to host, promote, and track your podcast here
          </motion.p>

          {/* Buttons with stagger animation */}
          <motion.div 
            variants={buttonContainerVariants}
            className="flex flex-row gap-4 justify-center md:justify-start w-[327px] md:w-auto"
          >
            <motion.div
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(118, 120, 237, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                text="Subscribe" 
                bgColor="#7678ED" 
                textColor="#FFFFFF" 
                font="Commissioner" 
                fontSize="18px" 
                fontWeight={500} 
                border="1px solid #7678ED"
                className="flex-1 md:flex-none md:px-8 py-4"
              />
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(118, 120, 237, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                text="Explore" 
                bgColor="transparent" 
                textColor="#7678ED" 
                font="Commissioner" 
                fontSize="18px" 
                fontWeight={500} 
                border="1px solid #7678ED"
                className="flex-1 md:flex-none md:px-8 py-4 hover:bg-[#7678ED] hover:text-white transition-colors duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Featured Image with floating animation */}
          <motion.div 
            variants={leftImageVariants}
            animate={floatAnimation}
            className="mt-12 md:mt-16 w-full flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-[327px]">
              <img 
                src="./images/Featured.png" 
                alt="Featured" 
                className="w-full h-auto object-contain rounded-lg"
              />
              {/* Decorative dots */}
              <motion.div 
                animate={{ 
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute -top-4 -left-4 w-8 h-8 md:w-10 md:h-10"
              >
                <div className="w-full h-full rounded-full border-2 border-dotted border-[#7678ED] opacity-30"></div>
              </motion.div>
              <motion.div 
                animate={{ 
                  rotate: -360,
                  transition: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
                className="absolute -bottom-4 -right-4 w-6 h-6 md:w-8 md:h-8"
              >
                <div className="w-full h-full rounded-full border-2 border-dotted border-[#898998] opacity-30"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Banner Image with hover effect */}
        <motion.div 
          variants={rightImageVariants}
          whileHover="hover"
          className="w-full md:w-[50%] flex justify-center md:justify-end mb-8 md:mb-0 relative"
        >
          <div className="relative">
            {/* Background decorative elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
                transition: { duration: 4, repeat: Infinity }
              }}
              className="absolute -top-4 -right-4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-[#7678ED]/20 to-transparent rounded-full blur-xl"
            />
            
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                transition: { duration: 5, repeat: Infinity, delay: 1 }
              }}
              className="absolute -bottom-6 -left-4 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-tr from-[#898998]/10 to-transparent rounded-full blur-lg"
            />
            
            {/* Main Image */}
            <motion.img 
              src="./images/bannerimage.png" 
              alt="BannerImage" 
              className="relative z-10 w-full max-w-[327px] md:w-auto md:max-w-[500px] h-auto object-contain rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
            />
            
            {/* Play button overlay */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
              className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-[#7678ED] ml-1"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Banner;