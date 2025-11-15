import React from 'react'
import Container from '../commoncomponents/Container'
import Button from '../commoncomponents/Button'
import { FaCheckCircle } from 'react-icons/fa'

const Pricing = () => {
  return (
    <Container>
      <div>
        {/* Header */}
        <div className='flex flex-col justify-center items-center text-center w-[327px] md:w-[386px] mx-auto py-16 gap-6'>
          <h1 className='font-[Commissioner] text-[24px] md:text-[48px] leading-[36px] md:leading-[70px] font-semibold w-[327px] md:w-[554px] text-[#13132C]'>
            Flexible Pricing Plan That Suit With Your needs
          </h1>
          <p className='font-[Commissioner] text-[15px] leading-6 w-[327px] md:w-[386px] text-[#898998]'>
            Waste of resources our competitors are jumping the shark for to be inspired is to become creative podcast hoster
          </p>
        </div>

        {/* Buttons */}
        <div className='flex justify-center gap-4 mt-3 flex-wrap'>
          <Button text="Weekly" bgColor="transparent" textColor="#FFFFFF" font="Commissioner" fontSize="16px" fontWeight={400} border='1px solid #7678ED'/>
          <Button text="Monthly" bgColor="#7678ED"  textColor="#FFFFFF" font="Commissioner" fontSize="16px" fontWeight={400} border='1px solid #7678ED'/>
        </div>

        {/* Pricing Cards */}
        <div className='mt-16 mb-20 flex flex-col md:flex-row md:justify-center gap-6'>
          
          {/* Beginner Plan */}
          <div className='w-full md:w-[384px] h-[470px] bg-[#FFFFFF] shadow-lg rounded-lg flex-shrink-0'>
            <div className='px-6 py-6 flex flex-col justify-between h-full'>
              <div className='flex flex-col justify-center text-center items-center mx-auto'>
                <h3 className='text-[#13132C] text-[32px] leading-[38px] font-medium font-[Commissioner]'>Beginner Plan</h3>
                <p className='text-[#898998] w-[241px] text-[14px] leading-6 font-medium font-[Commissioner] mt-[10px]'>Fast track design thinking yet quaterly
                  sales are at at an all-time low budget
                </p>
                <h2 className='text-[#13132C] text-[48px] leading-[38px] font-medium font-[Commissioner] mt-[10px]'>$19 <span className='text-[#898998] text-[14px] leading-6 font-medium font-[Commissioner]'>/month</span></h2>
                <ul className='mt-6 flex flex-col gap-4'>
                  <li className='flex items-center gap-2'>
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>6 times for skipping</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>12 blog per days</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>3 content only</span>
                  </li>
                </ul>
              </div>
              <button className='w-full py-4 bg-transparent font-[Commissioner] font-semibold text-[16px] text-[#7678ED] border border-[#7678ED] mt-6 hover:bg-[#7678ED] hover:text-[#FFFFFF] transition-all duration-300 ease-in-out cursor-pointer'>
                Learn More
              </button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className='w-full md:w-[384px] h-[470px] bg-[#FFFFFF] shadow-lg rounded-lg flex-shrink-0'>
            <div className='px-6 py-6 flex flex-col justify-between h-full'>
              <div className='flex flex-col justify-center text-center items-center mx-auto'>
                <h3 className='text-[#13132C] text-[32px] leading-[38px] font-medium font-[Commissioner]'>Professional Plan</h3>
                <p className='text-[#898998] w-[241px] text-[14px] leading-6 font-medium font-[Commissioner] mt-[10px]'>Fast track design thinking yet quaterly
                  sales are at at an all-time low budget
                </p>
                <h2 className='text-[#13132C] text-[48px] leading-[38px] font-medium font-[Commissioner] mt-[10px]'>$29 <span className='text-[#898998] text-[14px] leading-6 font-medium font-[Commissioner]'>/month</span></h2>
                <ul className='mt-6 flex flex-col gap-4'>
                  <li className='flex items-center gap-2'>
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>12 times for skipping</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>24 blog per days</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheckCircle className='text-[#7678ED] w-[19px] h-[19px]' />
                    <span className='text-[#13132C] text-[16px] font-[Commissioner]'>6 content only</span>
                  </li>
                </ul>
              </div>
              <button className='w-full py-4 bg-transparent font-[Commissioner] font-semibold text-[16px] text-[#7678ED] border border-[#7678ED] mt-6 hover:bg-[#7678ED] hover:text-[#FFFFFF] transition-all duration-300 ease-in-out cursor-pointer'>
                Learn More
              </button>
            </div>
          </div>

          {/* Business Plan */}
          <div className='w-full md:w-[384px] h-[470px] bg-[#7678ED] shadow-lg rounded-lg flex-shrink-0'>
            <div className='px-6 py-6 flex flex-col justify-between h-full'>
              <div className='flex flex-col justify-center text-center items-center mx-auto'>
                <h3 className='text-[#FFFFFF] text-[32px] leading-[38px] font-medium font-[Commissioner]'>Business Plan</h3>
                <p className='text-[#ffffffc0] w-[241px] text-[14px] leading-6 font-medium font-[Commissioner] mt-[10px]'>Fast track design thinking yet quaterly
                  sales are at at an all-time low budget
                </p>
                <h2 className='text-[#FFFFFF] text-[48px] leading-[38px] font-medium font-[Commissioner] mt-[10px]'>$59 <span className='text-[#ffffffc0] text-[14px] leading-6 font-medium font-[Commissioner]'>/month</span></h2>
                <ul className='mt-6 flex flex-col gap-4'>
                  <li className='flex items-center gap-2'>
                    <FaCheckCircle className='text-[#FFFFFF] w-[19px] h-[19px]' />
                    <span className='text-[#FFFFFF] text-[16px] font-[Commissioner]'>6 times for skipping</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheckCircle className='text-[#FFFFFF] w-[19px] h-[19px]' />
                    <span className='text-[#FFFFFF] text-[16px] font-[Commissioner]'>12 blog per days</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheckCircle className='text-[#FFFFFF] w-[19px] h-[19px]' />
                    <span className='text-[#FFFFFF] text-[16px] font-[Commissioner]'>3 content only</span>
                  </li>
                </ul>
              </div>
              <button className='w-full py-4 bg-transparent font-[Commissioner] font-semibold text-[16px] text-[#FFFFFF] border border-[#FFFFFF] mt-6 hover:bg-[#FFFFFF] hover:text-[#7678ED] transition-all duration-300 ease-in-out cursor-pointer'>
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </Container>
  )
}

export default Pricing
