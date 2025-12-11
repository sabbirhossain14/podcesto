import React, { useRef, useState, useEffect } from 'react'
import Container from '../../components/commoncomponents/Container'
import Button from '../../components/commoncomponents/Button'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const reviewData = [
  {
    text: "Podcesto has transformed our podcast production workflow. The intuitive interface and powerful editing tools saved us hours every week!",
    name: "Sherina Angelina Putri",
    role: "Product Designer at Spotify",
    img: "./images/img.png",
    rating: 5,
    color: "from-blue-500 to-purple-500"
  },
  {
    text: "As a new podcaster, I was overwhelmed by the technical aspects. Podcesto made it simple and fun. Our listener engagement grew by 300%!",
    name: "Alex Rodriguez",
    role: "Tech Podcast Host",
    img: "./images/img.png",
    rating: 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    text: "The analytics dashboard alone is worth the subscription. We've optimized our content strategy based on real listener data. Game changer!",
    name: "Maya Chen",
    role: "Content Strategist",
    img: "./images/img.png",
    rating: 5,
    color: "from-orange-500 to-yellow-500"
  },
  {
    text: "From recording to publishing, Podcesto handles everything seamlessly. Our production time decreased by 60% while quality improved dramatically.",
    name: "David Wilson",
    role: "Media Producer",
    img: "./images/img.png",
    rating: 5,
    color: "from-green-500 to-teal-500"
  }
]

const Reviews = () => {
  const sliderRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleDotClick = (index) => {
    setActiveIndex(index)
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].offsetWidth + (isMobile ? 0 : 16)
      sliderRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? reviewData.length - 1 : activeIndex - 1
    handleDotClick(prevIndex)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % reviewData.length
    handleDotClick(nextIndex)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Auto Slide Effect
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % reviewData.length
      handleDotClick(nextIndex)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [activeIndex, isAutoPlaying, isMobile])

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
    hidden: { y: 30, opacity: 0 },
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

  const cardVariants = {
    rest: { 
      scale: 1,
      y: 0,
      rotateY: 0 
    },
    hover: { 
      scale: 1.05,
      y: -10,
      rotateY: 5,
      boxShadow: "0 30px 60px -15px rgba(118, 120, 237, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const starVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    })
  }

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-12 md:py-20"
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className='flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 gap-8'
          >
            <div className="text-center md:text-left">
              {/* Decorative element */}
              <motion.div
                animate={floatingAnimation}
                className="w-20 h-1 bg-gradient-to-r from-[#7678ED] to-transparent rounded-full mx-auto md:mx-0 mb-4"
              />
              
              <h1 className='font-[Commissioner] w-full md:w-[550px] leading-[40px] text-[36px] md:text-[48px] md:leading-[70px] font-semibold text-[#13132C]'>
                What Our
                <span className="block bg-gradient-to-r from-[#7678ED] to-blue-500 bg-clip-text text-transparent">
                  Beloved Listeners Say
                </span>
              </h1>
              
              <p className="font-[Commissioner] text-[#898998] text-[15px] mt-4 max-w-[400px]">
                Hear from podcasters who transformed their audio journey with Podcesto
              </p>
            </div>

            {/* Desktop button */}
            <div className='hidden md:block'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  text={
                    <div className="flex items-center gap-2">
                      <span>View All Reviews</span>
                      <FaChevronRight className="text-sm" />
                    </div>
                  }
                  bgColor="transparent"
                  textColor="#7678ED"
                  font="Commissioner"
                  fontSize="16px"
                  fontWeight={500}
                  border='2px solid #7678ED'
                  className="px-8 py-3 rounded-xl hover:bg-[#7678ED] hover:text-white transition-all duration-300"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Slider Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            {!isMobile && (
              <>
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#7678ED] hover:text-white transition-all duration-300"
                >
                  <FaChevronLeft />
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#7678ED] hover:text-white transition-all duration-300"
                >
                  <FaChevronRight />
                </motion.button>
              </>
            )}

            {/* Slider */}
            <motion.div
              ref={sliderRef}
              className='flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4'
              style={{
                scrollSnapType: isMobile ? 'x mandatory' : 'none'
              }}
            >
              {reviewData.map((review, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={cardVariants}
                  className={`${
                    isMobile ? 'min-w-[85vw] max-w-[85vw] mx-2' : 'min-w-[400px] max-w-[400px]'
                  } h-auto min-h-[320px] bg-white rounded-2xl shadow-xl flex-shrink-0 overflow-hidden border border-gray-100 relative snap-center`}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${review.color} opacity-5 -z-10`} />

                  <div className='p-8 flex flex-col h-full'>
                    {/* Quote icon */}
                    <motion.div
                      animate={floatingAnimation}
                      className="w-16 h-16 bg-gradient-to-br from-[#7678ED] to-blue-500 rounded-full flex items-center justify-center mb-6"
                    >
                      <FaQuoteLeft className="text-white text-2xl" />
                    </motion.div>

                    {/* Review text */}
                    <p className='font-[Commissioner] text-[16px] text-[#898998] leading-7 italic mb-6 line-clamp-4'>
                      "{review.text}"
                    </p>

                    {/* Stars rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          custom={i}
                          variants={starVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <FaStar className="text-yellow-400 w-5 h-5" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Reviewer info */}
                    <div className='flex items-center gap-4 mt-auto pt-6 border-t border-gray-100'>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                      >
                        <img 
                          src={review.img} 
                          alt={review.name} 
                          className='w-14 h-14 rounded-full border-2 border-white shadow-md' 
                        />
                        {/* Online indicator */}
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      </motion.div>

                      <div>
                        <h5 className='font-[Commissioner] text-[18px] font-semibold leading-6 text-[#13132C]'>
                          {review.name}
                        </h5>
                        <span className='font-[Commissioner] text-[14px] leading-6 text-[#898998]'>
                          {review.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#7678ED] to-blue-500 text-white text-xs font-semibold rounded-full shadow">
                      Verified
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Progress indicator */}
            <div className="mt-8 w-full bg-gray-200 rounded-full h-1 max-w-[300px] mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-[#7678ED] to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((activeIndex + 1) / reviewData.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Dots and Mobile Button */}
          <div className='flex flex-col items-center mt-8 gap-6'>
            {/* Navigation dots */}
            <div className='flex justify-center gap-3'>
              {reviewData.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`flex items-center justify-center ${
                    activeIndex === index 
                      ? 'w-8 h-8 bg-gradient-to-r from-[#7678ED] to-blue-500 text-white' 
                      : 'w-6 h-6 bg-gray-200 text-gray-400'
                  } rounded-full text-xs font-medium transition-all duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: activeIndex === index ? 1.1 : 1
                  }}
                >
                  {activeIndex === index ? index + 1 : ''}
                </motion.button>
              ))}
            </div>

            {/* Mobile Button */}
            {isMobile && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  text={
                    <div className="flex items-center gap-2">
                      <span>View All Reviews</span>
                      <FaChevronRight className="text-sm" />
                    </div>
                  }
                  bgColor="transparent"
                  textColor="#7678ED"
                  font="Commissioner"
                  fontSize="16px"
                  fontWeight={500}
                  border='2px solid #7678ED'
                  className="px-8 py-3 rounded-xl hover:bg-[#7678ED] hover:text-white transition-all duration-300"
                />
              </motion.div>
            )}

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-8 mt-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#13132C]">500+</div>
                <div className="text-[#898998] text-sm">Positive Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#13132C]">4.9/5</div>
                <div className="text-[#898998] text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#13132C]">98%</div>
                <div className="text-[#898998] text-sm">Would Recommend</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Reviews