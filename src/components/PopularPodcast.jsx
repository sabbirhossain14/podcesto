import React, { useState } from "react";
import Container from "./commoncomponents/Container";
import Button from "./commoncomponents/Button";
import { motion, LayoutGroup } from "framer-motion";

const categories = ["All", "Fashion", "Business", "Self Growth", "Technology", "Healthy"];

const podcasts = [
  { category: "Fashion", title: "Tips Beli Jas Formal", img: "./images/Rectangle2.png" },
  { category: "Business", title: "Grow Your Startup", img: "./images/Rectangle2.png" },
  { category: "Self Growth", title: "Power of Mindset", img: "./images/Rectangle2.png" },
  { category: "Technology", title: "Future of AI", img: "./images/Rectangle2.png" },
  { category: "Healthy", title: "Healthy Life Habits", img: "./images/Rectangle2.png" },
  { category: "Business", title: "Master Finance", img: "./images/Rectangle2.png" },
  { category: "Self Growth", title: "Focus Boosting", img: "./images/Rectangle2.png" },
  { category: "Fashion", title: "Streetwear Trend", img: "./images/Rectangle2.png" },
];

const PopularPodcast = () => {
  const [active, setActive] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredPodcasts =
    active === "All" ? podcasts : podcasts.filter((p) => p.category === active);

  return (
    <div className="bg-[#FAFAFA]">
      <Container>
        <div className="py-10">
          {/* header */}
          <div className="flex flex-col justify-center text-center w-full md:w-[386px] mx-auto py-10 gap-6">
            <h1 className="font-[Commissioner] text-[32px] md:text-[48px] leading-[48px] md:leading-[70px] font-semibold text-[#13132C]">
              Latest popular podcast episodes
            </h1>
            <p className="font-[Commissioner] text-[15px] leading-6 text-[#898998]">
              Waste of resources our competitors are jumping the shark for to be inspired is to
              become creative podcast hoster
            </p>
          </div>

          {/* Category Buttons */}
          <LayoutGroup>
            <motion.div
              className="flex justify-center gap-3 md:gap-4 flex-wrap px-3"
              layout
            >
              {categories.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setActiveIndex(0); // Reset slider when category changes
                  }}
                  className="relative px-5 py-2 rounded-full font-[Commissioner] text-[15px] border border-[#7678ED]"
                  style={{ color: active === item ? "#FFFFFF" : "#7678ED" }}
                >
                  {active === item && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "#7678ED" }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.button>
              ))}
            </motion.div>
          </LayoutGroup>

          {/* Mobile Slider */}
          <div className="mt-12 overflow-hidden md:hidden">
            <motion.div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {filteredPodcasts.map((pod, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0 h-[360px] bg-[#FFFFFF] shadow-md rounded-xl px-6 py-6"
                >
                  <img src={pod.img} alt="Podcast Episode" className="rounded-md w-full h-48 object-cover" />
                  <div className="flex justify-between mt-6 items-center">
                    <div>
                      <h6 className="font-[Commissioner] text-[18px] font-medium leading-7 text-[#13132C]">
                        {pod.title}
                      </h6>
                      <p className="font-[Commissioner] text-[14px] leading-4 text-[#898998] mt-[10px]">
                        7 Eps • 40 min 30 sec
                      </p>
                    </div>
                    <img src="./images/PlayIcon.png" alt="Play Icon" className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {filteredPodcasts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "bg-[#7678ED] scale-125" : "bg-[#C4C4C4] scale-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:flex md:flex-wrap md:justify-center gap-6 mt-12">
            {filteredPodcasts.map((pod, index) => (
              <div
                key={index}
                className="w-[260px] h-[360px] bg-[#FFFFFF] shadow-md rounded-xl px-6 py-6"
              >
                <img src={pod.img} alt="Podcast Episode" className="rounded-md w-full h-48 object-cover" />
                <div className="flex justify-between mt-6 items-center">
                  <div>
                    <h6 className="font-[Commissioner] text-[18px] font-medium leading-7 text-[#13132C]">
                      {pod.title}
                    </h6>
                    <p className="font-[Commissioner] text-[14px] leading-4 text-[#898998] mt-[10px]">
                      7 Eps • 40 min 30 sec
                    </p>
                  </div>
                  <img src="./images/PlayIcon.png" alt="Play Icon" className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>

          {/* More Podcast Button */}
          <div className="flex justify-center items-center mx-auto mt-12">
            <Button
              text="More Podcast"
              bgColor="transparent"
              textColor="#FFFFFF"
              font="Commissioner"
              fontSize="16px"
              fontWeight={400}
              border="1px solid #7678ED"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularPodcast;
