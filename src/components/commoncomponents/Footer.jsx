import React from 'react'
import Container from './Container'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='bg-[#13132C]'>
      <Container>
        <div className='mt-6'>
          {/* ================== MAIN WRAPPER ================== */}
          <div className='flex justify-between gap-10 pt-[80px] pb-[40px] 
                          max-md:flex-col max-md:gap-12 max-md:pt-20'>

            {/* ========== LOGO + TEXT ========== */}
            <div className='w-[30%] max-md:w-full'>
              <img src="./images/Logo.png" alt="Logo" className='max-md:w-40 max-md:mx-auto max-md:ml-0' />
              <p className='font-[Commissioner] text-[16px] leading-7 text-[#ffffffce] mt-6 max-md:mt-4 max-md:text-left'>
                The best sound and library for you and waste of resources
                our competitors are jumping the shark for to be inspired
                is to become creative and good
              </p>
            </div>

            {/* ========== MENU (MOBILE GRID) ========== */}
            <div className='w-[70%] flex justify-between 
                            max-md:w-full max-md:grid max-md:grid-cols-2 max-md:gap-y-10'>

              {/* SERVICES */}
              <div className='max-md:text-left'>
                <h3 className='font-[Commissioner]  text-[16px] leading-7 text-[#FFFFFF] font-semibold'>
                  SERVICES
                </h3>
                <ul className='font-[Commissioner] text-[14px] md:text-[16px] leading-7 text-[#ffffffce] mt-6 flex flex-col gap-4'>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Features</li>
                </ul>
              </div>

              {/* RESOURCES */}
              <div className='max-md:text-left'>
                <h3 className='font-[Commissioner] text-[16px] leading-7 text-[#FFFFFF] font-semibold'>
                  RESOURCES
                </h3>
                <ul className='font-[Commissioner] text-[14px] md:text-[16px] leading-7 text-[#ffffffce] mt-6 flex flex-col gap-4'>
                  <li>Our Apps</li>
                  <li>Our Blog</li>
                  <li>Our Pricing</li>
                </ul>
              </div>

              {/* SUPPORT */}
              <div className='max-md:text-left max-md:order-3'>
                <h3 className='font-[Commissioner] text-[16px] leading-7 text-[#FFFFFF] font-semibold'>
                  SUPPORT
                </h3>
                <ul className='font-[Commissioner] text-[14px] md:text-[16px] leading-7 text-[#ffffffce] mt-6 flex flex-col gap-4'>
                  <li>License System</li>
                  <li>Affiliate Market</li>
                  <li>Integration</li>
                </ul>
              </div>

              {/* CONTACT */}
              <div className='w-[183px] max-md:w-full max-md:order-4 max-md:text-left'>
                <h3 className='font-[Commissioner] text-[16px] leading-7 text-[#FFFFFF] font-semibold'>
                  CONTACT
                </h3>
                <div className='flex flex-col'>
                  <a href="mailto:hellopodacesto.com"
                    className='flex items-center gap-2 font-[Commissioner] text-[14px] md:text-[16px] leading-4 text-[#ffffffce] mt-6'>
                    <AiOutlineMail />
                    @hellopodacesto.com
                  </a>
                  <a href="tel:+022675463857674"
                    className='flex items-center gap-2 font-[Commissioner] text-[14px] md:text-[16px] leading-4 text-[#ffffffce] mt-6'>
                    <BsTelephone />
                    +022675463857674
                  </a>
                  <a href="https://www.google.com/maps/place/Axe+Street+Millennial+56"
                    target="_blank" rel="noopener noreferrer"
                    className='flex items-center gap-2 font-[Commissioner] text-[14px] md:text-[16px] leading-7 text-[#ffffffce] mt-6'>
                    <CiLocationOn />
                    Axe Street Millennial 56
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========== BOTTOM BORDER ========== */}
        <div className='border border-[#ffffff7c]'></div>
        <span className='text-[#ffffffb0] font-[Commissioner] text-[14px] leading-6 flex justify-center py-6'>
          Copyright 2021 Podcesto All Right Reserved
        </span>
      </Container>
    </div>
  )
}

export default Footer
