import React, { useRef, useState, useEffect } from 'react'
import Container from '../../components/commoncomponents/Container'
import Button from '../../components/commoncomponents/Button'
import { motion } from 'framer-motion'

const reviewData = [
  {
    text: "Circle back around golden goose, for all 360 degrees content marketing pool. And digitally out of the loop, not social short life know end",
    name: "Sherina Angelina Putri",
    role: "Product Designer",
    img: "./images/img.png",
    icon: "./images/reviewIcon.png",
  },
  {
    text: "Circle back around golden goose, for all 360 degrees content marketing pool. And digitally out of the loop, not social short life know end",
    name: "Sherina Angelina Putri",
    role: "Product Designer",
    img: "./images/img.png",
    icon: "./images/reviewIcon.png",
  },
  {
    text: "Circle back around golden goose, for all 360 degrees content marketing pool. And digitally out of the loop, not social short life know end",
    name: "Sherina Angelina Putri",
    role: "Product Designer",
    img: "./images/img.png",
    icon: "./images/reviewIcon.png",
  },
]

const Reviews = () => {
  const sliderRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleDotClick = (index) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].offsetWidth + (isMobile ? 0 : 16)
      sliderRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
      setActiveIndex(index)
    }
  }

  // 🔥 Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % reviewData.length
        if (sliderRef.current) {
          const cardWidth = sliderRef.current.children[0].offsetWidth + (isMobile ? 0 : 16)
          sliderRef.current.scrollTo({ left: cardWidth * nextIndex, behavior: "smooth" })
        }
        return nextIndex
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <Container>
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-center mt-20 mb-10 gap-4'>
        <h1 className='font-[Commissioner] w-[327px] md:w-[403px] leading-[36px] text-[36px] md:text-[48px] md:leading-[70px] font-semibold text-[#13132C] text-center md:text-left'>
          What our beloved listeners said
        </h1>

        {/* Desktop button */}
        <div className='hidden md:block'>
          <Button
            text="More Reviews"
            bgColor="transparent"
            textColor="#FFFFFF"
            font="Commissioner"
            fontSize="16px"
            fontWeight={400}
            border='1px solid #7678ED'
          />
        </div>
      </div>

      {/* Slider */}
      <motion.div
        ref={sliderRef}
        className='flex gap-4 md:flex-wrap md:justify-center px-3'
        drag={isMobile ? false : 'x'}
        dragConstraints={{ left: -500, right: 0 }}
        whileTap={{ cursor: isMobile ? "auto" : "grabbing" }}
        style={{
          overflowX: isMobile ? 'hidden' : 'auto',
          scrollSnapType: isMobile ? 'x mandatory' : 'none'
        }}
      >
        {reviewData.map((review, index) => (
          <div
            key={index}
            className={`${
              isMobile ? 'min-w-full max-w-full' : 'min-w-[327px] max-w-[327px] md:w-[384px]'
            } h-[250px] bg-[#FFFFFF] shadow-lg rounded-lg flex-shrink-0 mx-auto`}
          >
            <div className='px-6 py-6 flex flex-col h-full'>
              <img src={review.icon} alt="icon" />
              <p className='font-[Commissioner] text-[16px] text-[#898998] mt-[10px] italic'>
                {review.text}
              </p>

              <div className='flex justify-start items-center gap-4 mt-6'>
                <img src={review.img} alt={review.name} className='w-10 h-10 rounded-full' />

                <h5 className='font-[Commissioner] text-[18px] font-medium leading-7 text-[#13132C]'>
                  {review.name} <br />
                  <span className='font-[Commissioner] text-[16px] leading-7 text-[#898998]'>{review.role}</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dots */}
      {isMobile && (
        <div className='flex justify-center gap-3 mt-4'>
          {reviewData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-[#7678ED]' : 'bg-[#D9D9D9]'}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      )}

      {/* Mobile Button */}
      {isMobile && (
        <div className='flex justify-center mt-6'>
          <Button
            text="More Reviews"
            bgColor="transparent"
            textColor="#FFFFFF"
            font="Commissioner"
            fontSize="16px"
            fontWeight={400}
            border='1px solid #7678ED'
          />
        </div>
      )}
    </Container>
  )
}

export default Reviews
