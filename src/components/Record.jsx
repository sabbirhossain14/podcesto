import React from 'react';
import Container from './commoncomponents/Container';

const Record = () => {
  return (
    <div className='bg-[#FAFAFA]'>
      <Container>
        <div>
          {/* Heading and description */}
          <div className='flex flex-col items-center text-center py-16 md:py-20 px-4 md:px-0 gap-6'>
            <h1 className='font-[Commissioner] text-[24px] sm:text-[48px] font-semibold leading-[40px] sm:leading-[70px] text-[#13132C] w-[327px] sm:w-[634px] capitalize'>
              You can record your podcast easily and quickly
            </h1>
            <p className='font-[Commissioner] text-[14px] sm:text-[14px] leading-6 sm:leading-6 text-[#898998] w-[327px] sm:w-[604px]'>
              The podcast world is booming and Podcesto has the ambition to keep up with this world by making
              features that make it easy. All the features on Podcesto are very easy to use
            </p>
          </div>

          {/* Features */}
          <div className='flex flex-wrap md:flex-nowrap justify-center pb-20 gap-6'>
            <div className='w-[327px] sm:w-[282px] h-auto bg-[#FFFFFF] flex flex-col justify-center text-center items-center p-6'>
              <img className='w-[88px] h-[88px]' src="./images/Icon1.png" alt="icon1" />
              <h6 className='font-[Commissioner] text-[#13132C] text-[20px] font-medium leading-7 mt-4 sm:mt-8'>Record Your Podcast</h6>
              <p className='font-[Commissioner] text-[14px] leading-6 text-[#898998] mt-2 sm:mt-4 w-[240px] sm:w-[240px]'>
                Record your podcast as creatively possible, capturing good voice quality.
              </p>
            </div>

            <div className='w-[327px] sm:w-[282px] h-auto bg-[#FFFFFF] flex flex-col justify-center text-center items-center p-6'>
              <img className='w-[88px] h-[88px]' src="./images/Icon2.png" alt="icon2" />
              <h6 className='font-[Commissioner] text-[#13132C] text-[20px] font-medium leading-7 mt-4 sm:mt-8'>Edit Your Podcast</h6>
              <p className='font-[Commissioner] text-[14px] leading-6 text-[#898998] mt-2 sm:mt-4 w-[180px]'>
                Edit podcast with the settings podcast voice provided
              </p>
            </div>

            <div className='w-[327px] sm:w-[282px] h-auto bg-[#FFFFFF] flex flex-col justify-center text-center items-center p-6'>
              <img className='w-[88px] h-[88px]' src="./images/Icon3.png" alt="icon3" />
              <h6 className='font-[Commissioner] text-[#13132C] text-[20px] font-medium leading-7 mt-4 sm:mt-8'>Upload Your Podcast</h6>
              <p className='font-[Commissioner] text-[14px] leading-6 text-[#898998] mt-2 sm:mt-4 w-[180px]'>
                Upload podcast on this or other podcast voice platform
              </p>
            </div>

            <div className='w-[327px] sm:w-[282px] h-auto bg-[#FFFFFF] flex flex-col justify-center text-center items-center p-6'>
              <img className='w-[88px] h-[88px]' src="./images/Icon4.png" alt="icon4" />
              <h6 className='font-[Commissioner] text-[#13132C] text-[20px] font-medium leading-7 mt-4 sm:mt-8'>Go Premium Podcast</h6>
              <p className='font-[Commissioner] text-[14px] leading-6 text-[#898998] mt-2 sm:mt-4 w-[180px]'>
                Exclusive podcast from our original content and favourite
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Record;
