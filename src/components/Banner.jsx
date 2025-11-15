import React from 'react';
import Container from './commoncomponents/Container';
import Button from './commoncomponents/Button';

const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-between py-12 md:py-20 items-center">

        {/* Left content (Text + Buttons + Featured) */}
        <div className="w-full md:w-[50%] mt-8 md:mt-0 flex flex-col items-center md:items-start">

          {/* Heading - 3 lines, max width 327px on mobile */}
          <h1 className="text-[24px] sm:text-[40px] md:text-[60px] font-[Commissioner] font-semibold leading-[40px] sm:leading-[48px] md:leading-[76px] text-[#13132C] text-center md:text-left w-[327px] md:w-auto">
            Let’s Make What You<br />
            Heard Are Preciously<br />
            Worth It To Hear
          </h1>

          {/* Paragraph */}
          <p className="text-[14px] sm:text-[16px] font-[Commissioner] font-normal text-[#898998] leading-6 sm:leading-7 mt-4 mb-6 text-center md:text-left w-[327px] md:w-[416px]">
            Waste of resources our competitors are jumping the shark
            for to be inspired is to become creative and it is easiest
            way to host, promote, and track your podcast here
          </p>

          {/* Buttons in one line, slightly bigger on mobile */}
          <div className="flex flex-row gap-4 justify-center md:justify-start w-[327px]">
            <Button 
              text="Subscribe" 
              bgColor="#7678ED" 
              textColor="#FFFFFF" 
              font="Commissioner" 
              fontSize="18px" 
              fontWeight={500} 
              border="1px solid #7678ED"
              className="flex-1"
            />
            <Button 
              text="Explore" 
              bgColor="transparent" 
              textColor="#7678ED" 
              font="Commissioner" 
              fontSize="18px" 
              fontWeight={500} 
              border="1px solid #7678ED"
              className="flex-1"
            />
          </div>

          {/* Featured Image */}
          <div className="mt-8 md:mt-12 w-full flex justify-center md:justify-start">
            <img src="./images/Featured.png" alt="Featured" className="w-full max-w-[327px] h-auto object-contain" />
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-end mb-8 md:mb-0">
          <img src="./images/bannerimage.png" alt="BannerImage" className="w-full max-w-[327px] md:w-auto h-auto object-contain" />
        </div>

      </div>
    </Container>
  );
};

export default Banner;
