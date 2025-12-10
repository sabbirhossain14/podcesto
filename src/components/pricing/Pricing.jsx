import React, { useState, useEffect } from 'react'
import Container from '../commoncomponents/Container'
import Button from '../commoncomponents/Button'
import { FaCheckCircle, FaCrown, FaRocket, FaStar, FaChevronRight } from 'react-icons/fa'
import { motion, useAnimation, useInView } from 'framer-motion'

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)
  const [hoveredPlan, setHoveredPlan] = useState(null)
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
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

  // Card hover animations
  const cardVariants = {
    rest: { 
      scale: 1,
      y: 0 
    },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  const featuredCardVariants = {
    rest: { 
      scale: 1,
      y: 0 
    },
    hover: { 
      scale: 1.05,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  const checkIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  }

  const priceChangeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  const plans = [
    {
      id: 'beginner',
      name: 'Beginner Plan',
      description: 'Perfect for getting started with podcasting',
      monthlyPrice: '19',
      weeklyPrice: '5',
      features: [
        '6 times for skipping',
        '12 blog per days',
        '3 content only',
        'Basic analytics'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional Plan',
      description: 'For serious podcasters who want to grow',
      monthlyPrice: '29',
      weeklyPrice: '8',
      features: [
        '12 times for skipping',
        '24 blog per days',
        '6 content only',
        'Advanced analytics',
        'Priority support'
      ],
      popular: true
    },
    {
      id: 'business',
      name: 'Business Plan',
      description: 'Everything you need for your podcast business',
      monthlyPrice: '59',
      weeklyPrice: '15',
      features: [
        'Unlimited skipping',
        '48 blog per days',
        'Unlimited content',
        'Premium analytics',
        '24/7 dedicated support'
      ],
      featured: true
    }
  ]

  return (
    <Container>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div 
          variants={itemVariants}
          className='flex flex-col justify-center items-center text-center w-[327px] md:w-[386px] mx-auto py-16 gap-6'
        >
          <h1 className='font-[Commissioner] text-[24px] md:text-[48px] leading-[36px] md:leading-[70px] font-semibold w-[327px] md:w-[554px] text-[#13132C]'>
            Flexible Pricing Plan That Suit With Your needs
          </h1>
          <p className='font-[Commissioner] text-[15px] leading-6 w-[327px] md:w-[386px] text-[#898998]'>
            Waste of resources our competitors are jumping the shark for to be inspired is to become creative podcast hoster
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div 
          variants={itemVariants}
          className='flex justify-center gap-4 mt-3 flex-wrap'
        >
          <Button 
            onClick={() => setIsMonthly(false)}
            text="Weekly" 
            bgColor={!isMonthly ? "#7678ED" : "transparent"} 
            textColor="#FFFFFF" 
            font="Commissioner" 
            fontSize="16px" 
            fontWeight={400} 
            border='1px solid #7678ED'
          />
          <Button 
            onClick={() => setIsMonthly(true)}
            text="Monthly" 
            bgColor={isMonthly ? "#7678ED" : "transparent"} 
            textColor="#FFFFFF" 
            font="Commissioner" 
            fontSize="16px" 
            fontWeight={400} 
            border='1px solid #7678ED'
          />
        </motion.div>

        {/* Pricing Cards */}
        <div className='mt-16 mb-20 flex flex-col md:flex-row md:justify-center gap-6'>
          
          {/* Beginner Plan */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={cardVariants}
            onMouseEnter={() => setHoveredPlan('beginner')}
            onMouseLeave={() => setHoveredPlan(null)}
            className='w-full md:w-[384px] h-[470px] bg-[#FFFFFF] shadow-lg rounded-lg flex-shrink-0 relative'
          >
            <div className='px-6 py-6 flex flex-col justify-between h-full'>
              <div className='flex flex-col justify-center text-center items-center mx-auto'>
                <h3 className='text-[#13132C] text-[32px] leading-[38px] font-medium font-[Commissioner]'>Beginner Plan</h3>
                <p className='text-[#898998] w-[241px] text-[14px] leading-6 font-medium font-[Commissioner] mt-[10px]'>
                  Perfect for getting started with podcasting
                </p>
                <motion.div
                  key={isMonthly ? 'beginner-monthly' : 'beginner-weekly'}
                  variants={priceChangeVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className='text-[#13132C] text-[48px] leading-[38px] font-medium font-[Commissioner] mt-[10px]'>
                    ${isMonthly ? "19" : "5"} <span className='text-[#898998] text-[14px] leading-6 font-medium font-[Commissioner]'>/{isMonthly ? "month" : "week"}</span>
                  </h2>
                </motion.div>
                <ul className='mt-6 flex flex-col gap-4'>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>6 times for skipping</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>12 blog per days</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>3 content only</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>Basic analytics</span>
                  </motion.li>
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className='w-full py-4 bg-transparent font-[Commissioner] font-semibold text-[16px] text-[#7678ED] border border-[#7678ED] mt-6 hover:bg-[#7678ED] hover:text-[#FFFFFF] transition-all duration-300 ease-in-out cursor-pointer rounded-lg'
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Professional Plan */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={cardVariants}
            onMouseEnter={() => setHoveredPlan('pro')}
            onMouseLeave={() => setHoveredPlan(null)}
            className='w-full md:w-[384px] h-[470px] bg-[#FFFFFF] shadow-lg rounded-lg flex-shrink-0 relative'
          >
            {/* Popular Badge */}
            {plans[1].popular && (
              <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium'
                >
                  Most Popular
                </motion.div>
              </div>
            )}
            
            <div className='px-6 py-6 flex flex-col justify-between h-full'>
              <div className='flex flex-col justify-center text-center items-center mx-auto'>
                <h3 className='text-[#13132C] text-[32px] leading-[38px] font-medium font-[Commissioner]'>Professional Plan</h3>
                <p className='text-[#898998] w-[241px] text-[14px] leading-6 font-medium font-[Commissioner] mt-[10px]'>
                  For serious podcasters who want to grow
                </p>
                <motion.div
                  key={isMonthly ? 'pro-monthly' : 'pro-weekly'}
                  variants={priceChangeVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className='text-[#13132C] text-[48px] leading-[38px] font-medium font-[Commissioner] mt-[10px]'>
                    ${isMonthly ? "29" : "8"} <span className='text-[#898998] text-[14px] leading-6 font-medium font-[Commissioner]'>/{isMonthly ? "month" : "week"}</span>
                  </h2>
                </motion.div>
                <ul className='mt-6 flex flex-col gap-4'>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>12 times for skipping</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>24 blog per days</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>6 content only</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>Advanced analytics</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>Priority support</span>
                  </motion.li>
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className='w-full py-4 bg-[#7678ED] font-[Commissioner] font-semibold text-[16px] text-white border border-[#7678ED] mt-6 hover:bg-[#6365e2] hover:border-[#6365e2] transition-all duration-300 ease-in-out cursor-pointer rounded-lg'
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Business Plan */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={featuredCardVariants}
            onMouseEnter={() => setHoveredPlan('business')}
            onMouseLeave={() => setHoveredPlan(null)}
            className='w-full md:w-[384px] h-[470px] bg-[#7678ED] shadow-lg rounded-lg flex-shrink-0 relative'
          >
            <div className='px-6 py-6 flex flex-col justify-between h-full'>
              <div className='flex flex-col justify-center text-center items-center mx-auto'>
                <h3 className='text-[#FFFFFF] text-[32px] leading-[38px] font-medium font-[Commissioner]'>Business Plan</h3>
                <p className='text-[#ffffffc0] w-[241px] text-[14px] leading-6 font-medium font-[Commissioner] mt-[10px]'>
                  Everything you need for your podcast business
                </p>
                <motion.div
                  key={isMonthly ? 'business-monthly' : 'business-weekly'}
                  variants={priceChangeVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className='text-[#FFFFFF] text-[48px] leading-[38px] font-medium font-[Commissioner] mt-[10px]'>
                    ${isMonthly ? "59" : "15"} <span className='text-[#ffffffc0] text-[14px] leading-6 font-medium font-[Commissioner]'>/{isMonthly ? "month" : "week"}</span>
                  </h2>
                </motion.div>
                <ul className='mt-6 flex flex-col gap-4'>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#FFFFFF] w-[19px] h-[19px]' />
                    <span className='text-[#FFFFFF] text-[16px] font-[Commissioner]'>Unlimited skipping</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#FFFFFF] w-[19px] h-[19px]' />
                    <span className='text-[#FFFFFF] text-[16px] font-[Commissioner]'>48 blog per days</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#FFFFFF] w-[19px] h-[19px]' />
                    <span className='text-[#FFFFFF] text-[16px] font-[Commissioner]'>Unlimited content</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#FFFFFF] w-[19px] h-[19px]' />
                    <span className='text-[#FFFFFF] text-[16px] font-[Commissioner]'>Premium analytics</span>
                  </motion.li>
                  <motion.li 
                    variants={checkIconVariants}
                    className='flex items-center gap-2'
                  >
                    <FaCheckCircle className='text-[#FFFFFF] w-[19px] h-[19px]' />
                    <span className='text-[#FFFFFF] text-[16px] font-[Commissioner]'>24/7 dedicated support</span>
                  </motion.li>
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className='w-full py-4 bg-white font-[Commissioner] font-semibold text-[16px] text-[#7678ED] border border-white mt-6 hover:bg-gray-50 hover:border-gray-50 transition-all duration-300 ease-in-out cursor-pointer rounded-lg'
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Load More Button */}
        <motion.div 
          variants={itemVariants}
          className='flex justify-center mt-8 mb-20'
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              text="Load More"
              bgColor="transparent"
              textColor="#7678ED"
              border="1px solid #7678ED"
              className="px-8 py-3 hover:bg-[#7678ED] hover:text-white transition-colors duration-300"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default Pricing