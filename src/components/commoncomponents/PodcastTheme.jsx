import React from 'react'
import Container from './Container'
import { FaCheckCircle } from 'react-icons/fa'
import Button from './Button'

const PodcastTheme = () => {
  return (
    <Container>
      <div className='flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 my-20 mt-[100px]'>

        {/* Left Content */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[492px]'>

          {/* Heading */}
          <h1 className='font-[Commissioner] text-[32px] sm:text-[36px] md:text-[48px] font-semibold leading-[34px] sm:leading-[46px] md:leading-[70px] text-[#13132C] w-[327px] sm:w-[420px] md:w-[491px]'>
            What makes us <br />
            different from others
          </h1>

          {/* Paragraph */}
          <p className='font-[Commissioner] text-[13px] sm:text-[14px] md:text-[14px] leading-5 sm:leading-6 md:leading-6 text-[#898998] mt-4 w-[327px] sm:w-[420px] md:w-[420px]'>
            Waste of resources our competitors are jumping the shark for
            to be inspired is to become creative podcast hosters
          </p>

          {/* Feature List */}
          <ul className='mt-6 space-y-3 w-[327px] sm:w-[420px] md:w-[420px] flex flex-col items-start'>
            <li className='flex items-start gap-2'>
              <FaCheckCircle className='text-[#F18701] w-[19px] h-[19px] flex-shrink-0 mt-[3px]' />
              <span className='text-[#13132C] text-[15px] sm:text-[16px] font-[Commissioner]'>
                Latest and feasible topics
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <FaCheckCircle className='text-[#F18701] w-[19px] h-[19px] flex-shrink-0 mt-[3px]' />
              <span className='text-[#13132C] text-[15px] sm:text-[16px] font-[Commissioner]'>
                Curated speakers
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <FaCheckCircle className='text-[#F18701] w-[19px] h-[19px] flex-shrink-0 mt-[3px]' />
              <span className='text-[#13132C] text-[15px] sm:text-[16px] font-[Commissioner]'>
                Available on all platform
              </span>
            </li>
          </ul>

          {/* Button */}
          <div className='mt-10 w-full md:w-auto flex justify-center md:justify-start'>
            <Button 
              text="Learn More" 
              bgColor="#7678ED" 
              textColor="#FFFFFF" 
              font="Commissioner" 
              fontSize="16px" 
              fontWeight={400} 
              border='1px solid #7678ED'
              className='w-full md:w-auto'
            />
          </div>
        </div>

        {/* Right side image */}
        <div className='w-[327px] sm:w-[420px] md:w-[592px] h-auto flex justify-center md:justify-end mb-6 md:mb-0'>
          <img 
            src="./images/PodcastImage.png"
            alt="Podcast Theme"
            className='w-full h-auto object-contain'
          />
        </div>

      </div>
    </Container>
  )
}

export default PodcastTheme
