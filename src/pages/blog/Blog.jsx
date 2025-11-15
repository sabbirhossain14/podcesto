import React, { useState, useEffect } from "react";
import Container from "../../components/commoncomponents/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../components/commoncomponents/Button";
import { motion } from "framer-motion";

const blogData = [
  {
    title: "Best Workspace For Your Work From Home At Pandemic Season Millenial",
    desc: "A mixer is a place of hardware that gives podcasters the ability to adjust audio levels, apply effects, and get a top notch recording with less time spent",
    img: "./images/Rectangle3.png",
  },
  {
    title: "Best Workspace For Your Work From Home At Pandemic Season Millenial",
    desc: "A mixer is a place of hardware that gives podcasters the ability to adjust audio levels, apply effects, and get a top notch recording with less time spent",
    img: "./images/Rectangle3.png",
  },
  {
    title: "Best Workspace For Your Work From Home At Pandemic Season Millenial",
    desc: "A mixer is a place of hardware that gives podcasters the ability to adjust audio levels, apply effects, and get a top notch recording with less time spent",
    img: "./images/Rectangle3.png",
  },
];

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const CARD_WIDTH = 327;
  const GAP = 16;
  const TOTAL = CARD_WIDTH + GAP;

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 🔥 Auto Slide Effect
  useEffect(() => {
    if (!isMobile) return; // only mobile slider auto-runs

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <Container>
      {/* HEADER */}
      <div className="flex flex-col justify-center items-center text-center w-[327px] md:w-[593px] mx-auto py-16 gap-6">
        <h1 className="font-[Commissioner] text-[28px] md:text-[48px] leading-[36px] md:leading-[70px] font-semibold text-[#13132C]">
          Find Blog Articles that can improve your podcast
        </h1>
        <p className="font-[Commissioner] text-[15px] md:w-[533px] leading-6 text-[#898998]">
          Take a deep dive into the podcasting world with exclusive interviews, biographies and insight into podcast voice and creator podcast of all size age
        </p>
      </div>

      {/* MOBILE SLIDER */}
      {isMobile && (
        <div className="relative w-full left-1/2 -translate-x-1/2 max-w-[327px] overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: -activeIndex * TOTAL }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
          >
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="w-[327px] bg-white rounded-xl shadow-md p-6 flex-shrink-0"
              >
                <img src={blog.img} className="w-full h-48 rounded-md mb-6" />
                <h2 className="font-[Commissioner] text-[16px] font-semibold text-[#13132C]">
                  {blog.title}
                </h2>
                <p className="font-[Commissioner] text-[14px] leading-6 text-[#898998] mt-4">
                  {blog.desc}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[#F18701] font-[Commissioner] text-[14px]">
                  Learn More <FaArrowRightLong />
                </div>
              </div>
            ))}
          </motion.div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {blogData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === idx
                    ? "bg-[#7678ED] scale-125"
                    : "bg-[#C4C4C4] scale-100"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* DESKTOP VIEW */}
      {!isMobile && (
        <div className="grid grid-cols-3 gap-6 mt-12">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="w-[384px] bg-white rounded-xl shadow-md p-6"
            >
              <img src={blog.img} className="w-full h-48 rounded-md mb-6" />

              <h2 className="font-[Commissioner] text-[20px] font-semibold">
                {blog.title}
              </h2>

              <p className="font-[Commissioner] text-[14px] leading-6 text-[#898998] mt-4">
                {blog.desc}
              </p>

              <div className="mt-4 text-[#F18701] flex gap-2 items-center">
                Learn More <FaArrowRightLong />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* BUTTON */}
      <div className="flex justify-center mt-12">
        <Button
          text="More Blog"
          bgColor="transparent"
          textColor="#FFFFFF"
          border="1px solid #7678ED"
        />
      </div>
    </Container>
  );
};

export default Blog;
