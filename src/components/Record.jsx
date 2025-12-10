import React, { useEffect, useRef } from 'react';
import Container from './commoncomponents/Container';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaMicrophone, FaEdit, FaUpload, FaCrown } from 'react-icons/fa';

const Record = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9 
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8
      }
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      rotateX: -15 
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 18
      }
    }),
    hover: {
      y: -15,
      scale: 1.03,
      rotateX: 5,
      boxShadow: "0 30px 60px -12px rgba(118, 120, 237, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const iconContainerVariants = {
    rest: { 
      scale: 1,
      rotate: 0 
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const iconBackgroundVariants = {
    rest: { 
      scale: 1,
      opacity: 0.1 
    },
    hover: {
      scale: 1.5,
      opacity: 0.2,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Feature data
  const features = [
    {
      id: 1,
      title: "Record Your Podcast",
      description: "Record your podcast as creatively possible, capturing studio-quality audio with advanced tools.",
      icon: <FaMicrophone className="text-3xl" />,
      color: "bg-gradient-to-br from-blue-500 to-purple-500",
      delay: 0
    },
    {
      id: 2,
      title: "Edit Your Podcast",
      description: "Edit podcast with professional settings, filters, and effects in our intuitive editing suite.",
      icon: <FaEdit className="text-3xl" />,
      color: "bg-gradient-to-br from-green-500 to-teal-500",
      delay: 1
    },
    {
      id: 3,
      title: "Upload Your Podcast",
      description: "Upload podcast on this or other podcast platforms seamlessly with one-click distribution.",
      icon: <FaUpload className="text-3xl" />,
      color: "bg-gradient-to-br from-orange-500 to-yellow-500",
      delay: 2
    },
    {
      id: 4,
      title: "Go Premium Podcast",
      description: "Access exclusive content, advanced analytics, and priority support with premium membership.",
      icon: <FaCrown className="text-3xl" />,
      color: "bg-gradient-to-br from-pink-500 to-purple-500",
      delay: 3
    }
  ];

  return (
    <div className='bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden'>
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-2xl opacity-20"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-tr from-purple-200 to-transparent rounded-full blur-2xl opacity-20"
      />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Heading and description */}
          <motion.div 
            variants={itemVariants}
            className='flex flex-col items-center text-center py-16 md:py-24 px-4 md:px-0 gap-6 relative'
          >
            {/* Animated underline for heading */}
            <div className="relative">
              <motion.h1 
                variants={itemVariants}
                className='font-[Commissioner] text-[28px] sm:text-[48px] font-semibold leading-[40px] sm:leading-[70px] text-[#13132C] max-w-[327px] sm:max-w-[700px] relative z-10'
              >
                <span className="relative inline-block">
                  Record Your Podcast
                  <motion.div
                    animate={pulseAnimation}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  />
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Easily & Quickly
                </span>
              </motion.h1>
            </div>
            
            <motion.p 
              variants={itemVariants}
              className='font-[Commissioner] text-[15px] sm:text-[16px] leading-6 sm:leading-7 text-[#898998] max-w-[327px] sm:max-w-[650px] relative z-10'
            >
              The podcast world is booming and Podcesto has the ambition to keep up with this world by making
              features that make it easy. All the features on Podcesto are designed for creators of all levels.
            </motion.p>

            {/* Animated progress indicator */}
            <motion.div
              variants={itemVariants}
              className="relative h-1 w-64 bg-gray-200 rounded-full overflow-hidden mt-4"
            >
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                  transition: { duration: 3, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div 
            variants={cardContainerVariants}
            className='flex flex-wrap md:flex-nowrap justify-center pb-24 gap-6 px-4 md:px-0'
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                className="relative group"
              >
                {/* Card background glow */}
                <motion.div
                  variants={iconBackgroundVariants}
                  initial="rest"
                  whileHover="hover"
                  className={`absolute inset-0 ${feature.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                
                {/* Main card */}
                <div className='w-[327px] sm:w-[282px] h-auto bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl flex flex-col justify-center text-center items-center p-8 relative z-10'>
                  {/* Icon container */}
                  <motion.div 
                    variants={iconContainerVariants}
                    initial="rest"
                    whileHover="hover"
                    className="relative mb-6"
                  >
                    {/* Icon background */}
                    <motion.div
                      animate={pulseAnimation}
                      className={`absolute inset-0 ${feature.color} rounded-full blur-xl opacity-20`}
                    />
                    {/* Icon circle */}
                    <div className={`relative w-20 h-20 ${feature.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    
                    {/* Step number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md"
                    >
                      <span className="font-bold text-sm text-gray-700">{index + 1}</span>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <h6 className='font-[Commissioner] text-[#13132C] text-[22px] font-semibold leading-7 mb-4'>
                    {feature.title}
                  </h6>
                  
                  <p className='font-[Commissioner] text-[14px] leading-6 text-[#898998] mb-6'>
                    {feature.description}
                  </p>

                  {/* Interactive hover indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  />

                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ 
                          opacity: 0,
                          y: 0,
                          x: Math.random() * 100
                        }}
                        whileHover={{ 
                          opacity: [0, 1, 0],
                          y: -100,
                          x: Math.random() * 200 - 100
                        }}
                        transition={{ 
                          duration: 1,
                          delay: i * 0.1
                        }}
                        className={`absolute bottom-0 w-1 h-1 ${feature.color.replace('bg-gradient-to-br', 'bg-blue-500')} rounded-full`}
                      />
                    ))}
                  </div>
                </div>

                {/* Connection line between cards (desktop only) */}
                {index < features.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-transparent z-0"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Animated CTA section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center pb-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <span className="font-[Commissioner] font-medium">Start Your Podcast Journey</span>
              <motion.svg
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Record;