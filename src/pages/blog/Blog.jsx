import React, { useState, useRef, useEffect } from 'react'
import Container from '../../components/commoncomponents/Container'
import { FaArrowRightLong } from 'react-icons/fa6'
import Button from '../../components/commoncomponents/Button'
import { motion } from 'framer-motion'

const blogData = [
  {
    title: "Best Workspace For Your Work From Home At Pandemic Season Millenial",
    desc: "A mixer is a place of hardware that gives podcasters the ability to adjust audio levels, apply, effects, and get a top notch recording with less time spent",
    img: "./images/Rectangle3.png",
  },
  {
    title: "Best Workspace For Your Work From Home At Pandemic Season Millenial",
    desc: "A mixer is a place of hardware that gives podcasters the ability to adjust audio levels, apply, effects, and get a top notch recording with less time spent",
    img: "./images/Rectangle3.png",
  },
  {
    title: "Best Workspace For Your Work From Home At Pandemic Season Millenial",
    desc: "A mixer is a place of hardware that gives podcasters the ability to adjust audio levels, apply, effects, and get a top notch recording with less time spent",
    img: "./images/Rectangle3.png",
  },
]

const Blog = () => {
  const sliderRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleDotClick = (index) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].offsetWidth + 16
      sliderRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
      setActiveIndex(index)
    }
  }

  return (
    <Container>
      
      {/* Header */}
      <div className='flex flex-col justify-center items-center text-center w-[327px] md:w-[593px] mx-auto py-16 gap-6'>
        <h1 className='font-[Commissioner] text-[28px] md:text-[48px] leading-[36px] md:leading-[70px] font-semibold text-[#13132C]'>
          Find Blog Articles that can improve your podcast
        </h1>
        <p className='font-[Commissioner] text-[15px] md:w-[533px] leading-6 text-[#898998]'>
          Take a deep dive into the podcasting world with exclusive interviews, biographies and insight into podcast voice and creator podcast of all size age
        </p>
      </div>

      {/* Blog Cards */}
      <motion.div
        ref={sliderRef}
        className={`px-3 gap-4 flex
          ${isMobile ? 'overflow-x-auto flex-nowrap no-scrollbar' : 'flex-nowrap justify-center overflow-visible'}
        `}
        drag={isMobile ? "x" : false}
        dragConstraints={{ left: isMobile ? -((327 + 16) * (blogData.length - 1)) : 0, right: 0 }}
      >
        {blogData.map((blog, index) => (
          <div
            key={index}
            className={`bg-[#FFFFFF] shadow-md rounded-lg
                ${isMobile ? 'w-[327px] h-[618px]' : 'w-[384px] h-[510px]'}
                ${!isMobile ? 'flex-shrink-0 md:flex-shrink' : 'flex-shrink-0'}
            `}
          >
            <div className='py-6 px-6 flex flex-col h-full'>
              <img src={blog.img} alt="Blog img" className='rounded-md' />
              <h2 className='font-[Commissioner] text-[16px] md:text-[20px] leading-[32px] font-semibold text-[#13132C] mt-6'>
                {blog.title}
              </h2>
              <p className='font-[Commissioner] text-[14px] leading-6 text-[#898998] mt-4'>
                {blog.desc}
              </p>
              <div className='mt-4'>
                <button className='flex items-center gap-2 hover:gap-3 transition-all duration-300 text-[#F18701] font-[Commissioner] text-[14px]'>
                  Learn More <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Slider Dots (only mobile) */}
      {isMobile && (
        <div className='flex justify-center gap-3 mt-6'>
          {blogData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-[#7678ED]' : 'bg-[#D9D9D9]'}`}
            ></button>
          ))}
        </div>
      )}

      {/* Button */}
      <div className='flex justify-center items-center mx-auto mt-[48px]'>
        <Button
          text="More Blog"
          bgColor="transparent"
          textColor="#FFFFFF"
          font="Commissioner"
          fontSize="16px"
          fontWeight={400}
          border='1px solid #7678ED'
        />
      </div>

    </Container>
  )
}

export default Blog
