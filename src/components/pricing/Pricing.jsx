import React, { useState, useEffect } from 'react'
import Container from '../commoncomponents/Container'
import Button from '../commoncomponents/Button'
import { FaCheckCircle, FaCrown, FaRocket, FaStar, FaChevronRight, FaArrowRight } from 'react-icons/fa'
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
      boxShadow: "0 15px 30px rgba(118, 120, 237, 0.1)",
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
      boxShadow: "0 20px 40px rgba(118, 120, 237, 0.2)",
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

  // Button variants
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(118, 120, 237, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    tap: { scale: 0.98 }
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
      popular: false,
      icon: <FaRocket className="w-5 h-5" />
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
      popular: true,
      icon: <FaStar className="w-5 h-5" />
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
      featured: true,
      icon: <FaCrown className="w-5 h-5" />
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
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-3 rounded-lg font-[Commissioner] text-[16px] font-medium transition-all duration-300 ${
                !isMonthly 
                  ? 'bg-[#7678ED] text-white shadow-md' 
                  : 'bg-transparent text-[#7678ED] border border-[#7678ED] hover:bg-[#7678ED] hover:text-white'
              }`}
            >
              Weekly
            </button>
          </motion.div>
          
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-3 rounded-lg font-[Commissioner] text-[16px] font-medium transition-all duration-300 ${
                isMonthly 
                  ? 'bg-[#7678ED] text-white shadow-md' 
                  : 'bg-transparent text-[#7678ED] border border-[#7678ED] hover:bg-[#7678ED] hover:text-white'
              }`}
            >
              Monthly
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className='mt-16 mb-20 flex flex-col md:flex-row md:justify-center gap-8 px-4 md:px-0'>
          
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={plan.featured ? featuredCardVariants : cardVariants}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`w-full md:w-[384px] min-h-[520px] ${plan.featured ? 'bg-[#7678ED]' : 'bg-[#FFFFFF]'} shadow-lg rounded-xl flex-shrink-0 relative border ${plan.featured ? 'border-[#7678ED]' : 'border-gray-100'}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className='bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md'
                  >
                    Most Popular
                  </motion.div>
                </div>
              )}

              <div className='pt-12 pb-8 px-8 flex flex-col justify-between h-full'>
                <div className='flex flex-col justify-center text-center items-center mx-auto'>
                  {/* Plan Icon */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${plan.featured ? 'bg-white/20' : 'bg-blue-50'}`}>
                    <div className={plan.featured ? 'text-white text-2xl' : 'text-[#7678ED] text-2xl'}>
                      {plan.icon}
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3 className={`${plan.featured ? 'text-white' : 'text-[#13132C]'} text-[28px] leading-[34px] font-bold font-[Commissioner] mb-3`}>
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className={`${plan.featured ? 'text-white/80' : 'text-[#898998]'} w-[280px] text-[15px] leading-6 font-medium font-[Commissioner] mb-6`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <motion.div
                    key={isMonthly ? `${plan.id}-monthly` : `${plan.id}-weekly`}
                    variants={priceChangeVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                  >
                    <h2 className={`${plan.featured ? 'text-white' : 'text-[#13132C]'} text-[56px] leading-[48px] font-bold font-[Commissioner]`}>
                      ${isMonthly ? plan.monthlyPrice : plan.weeklyPrice}
                      <span className={`${plan.featured ? 'text-white/70' : 'text-[#898998]'} text-[16px] leading-6 font-medium ml-2`}>
                        /{isMonthly ? "month" : "week"}
                      </span>
                    </h2>
                  </motion.div>

                  {/* Features List */}
                  <ul className='w-full flex flex-col gap-4 mb-8'>
                    {plan.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        variants={checkIconVariants}
                        className='flex items-start gap-3'
                      >
                        <div className={`mt-1 ${plan.featured ? 'text-white' : 'text-[#7678ED]'}`}>
                          <FaCheckCircle className='w-5 h-5' />
                        </div>
                        <span className={`${plan.featured ? 'text-white' : 'text-[#13132C]'} text-[15px] font-[Commissioner] text-left`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action Button - Now properly visible */}
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="mt-4"
                >
                  <button className={`w-full py-4 font-[Commissioner] font-semibold text-[16px] rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 ${
                    plan.featured 
                      ? 'bg-white text-[#7678ED] hover:bg-gray-50' 
                      : plan.popular
                      ? 'bg-[#7678ED] text-white hover:bg-[#6365e2]'
                      : 'bg-transparent text-[#7678ED] border-2 border-[#7678ED] hover:bg-[#7678ED] hover:text-white'
                  }`}>
                    <span>Get Started</span>
                    <FaArrowRight className="text-sm" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div 
          variants={itemVariants}
          className='flex justify-center mt-8 mb-20'
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <button className="px-10 py-3.5 bg-transparent font-[Commissioner] font-semibold text-[16px] text-[#7678ED] border-2 border-[#7678ED] rounded-xl hover:bg-[#7678ED] hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-3">
              <span>Load More</span>
              <FaChevronRight className="text-sm" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default Pricing