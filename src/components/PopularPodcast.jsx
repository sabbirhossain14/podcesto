import React, { useState, useEffect } from "react";
import Container from "./commoncomponents/Container";
import Button from "./commoncomponents/Button";
import { FaPlay, FaHeadphones, FaClock, FaFilter } from "react-icons/fa";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

const categories = ["All", "Fashion", "Business", "Self Growth", "Technology", "Healthy"];

const podcasts = [
  { category: "Fashion", title: "Tips Beli Jas Formal", img: "./images/Rectangle2.png", eps: 7, duration: "40 min 30 sec" },
  { category: "Business", title: "Grow Your Startup", img: "./images/Rectangle2.png", eps: 5, duration: "35 min 15 sec" },
  { category: "Self Growth", title: "Power of Mindset", img: "./images/Rectangle2.png", eps: 8, duration: "45 min 20 sec" },
  { category: "Technology", title: "Future of AI", img: "./images/Rectangle2.png", eps: 6, duration: "38 min 10 sec" },
  { category: "Healthy", title: "Healthy Life Habits", img: "./images/Rectangle2.png", eps: 10, duration: "50 min 45 sec" },
  { category: "Business", title: "Master Finance", img: "./images/Rectangle2.png", eps: 4, duration: "32 min 55 sec" },
  { category: "Self Growth", title: "Focus Boosting", img: "./images/Rectangle2.png", eps: 9, duration: "48 min 30 sec" },
  { category: "Fashion", title: "Streetwear Trend", img: "./images/Rectangle2.png", eps: 6, duration: "36 min 40 sec" },
];

const PopularPodcast = () => {
  const [active, setActive] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredPodcasts =
    active === "All" ? podcasts : podcasts.filter((p) => p.category === active);

  // Auto Slide Effect
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredPodcasts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [filteredPodcasts]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8
      }
    }
  };

  const cardVariants = {
    rest: { 
      scale: 1,
      y: 0,
      rotateX: 0 
    },
    hover: { 
      scale: 1.05,
      y: -10,
      rotateX: 5,
      boxShadow: "0 30px 60px -15px rgba(118, 120, 237, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 18
      }
    }
  };

  const imageContainerVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const playButtonVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.3,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  const categoryButtonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    },
    tap: { scale: 0.95 }
  };

  const mobileSliderVariants = {
    enter: { opacity: 0, x: 100 },
    center: { 
      opacity: 1, 
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: { opacity: 0, x: -100 }
  };

  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 60, repeat: Infinity, ease: "linear" }
        }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          rotate: -360,
          transition: { duration: 45, repeat: Infinity, ease: "linear" }
        }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl -z-10"
      />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="py-16"
        >
          {/* Header with decorative elements */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-center text-center w-full md:w-[500px] mx-auto py-10 gap-6 relative"
          >
            {/* Decorative icon */}
            <motion.div
              animate={floatingAnimation}
              className="absolute -top-2 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <FaHeadphones className="text-white text-xl" />
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-[Commissioner] text-[32px] md:text-[48px] leading-[48px] md:leading-[70px] font-semibold text-[#13132C]"
            >
              Latest
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Popular Podcasts
              </span>
            </motion.h1>
            <motion.p 
              animate={pulseAnimation}
              variants={itemVariants}
              className="font-[Commissioner] text-[15px] leading-6 text-[#898998]"
            >
              Waste of resources our competitors are jumping the shark for to be inspired is to
              become creative podcast hoster
            </motion.p>
          </motion.div>

          {/* Category Filter Section */}
          <motion.div 
            variants={itemVariants}
            className="relative mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaFilter className="text-[#7678ED]" />
              <span className="font-[Commissioner] text-[#898998] text-sm">Filter by category:</span>
            </div>
            
            <LayoutGroup>
              <motion.div 
                layout 
                className="flex justify-center gap-3 md:gap-4 flex-wrap px-3"
              >
                {categories.map((item) => (
                  <motion.button
                    key={item}
                    layout
                    onClick={() => {
                      setActive(item);
                      setActiveIndex(0);
                    }}
                    className={`relative px-5 py-2.5 rounded-full font-[Commissioner] text-[15px] transition-all duration-300 overflow-hidden group ${
                      active === item 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                        : 'bg-white/80 backdrop-blur-sm border border-blue-100 text-[#7678ED] hover:border-[#7678ED]'
                    }`}
                    variants={categoryButtonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {active === item && (
                      <motion.div
                        layoutId="categoryPill"
                        className="absolute inset-0 rounded-full"
                        initial={false}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30 
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {item}
                      {active === item && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                      )}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </LayoutGroup>
          </motion.div>

          {/* Mobile Slider */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 overflow-hidden md:hidden relative"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                variants={mobileSliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <motion.div
                  variants={cardVariants}
                  initial="rest"
                  whileHover="hover"
                  className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden shadow-xl"
                  onMouseEnter={() => setHoveredCard(activeIndex)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full shadow">
                      {filteredPodcasts[activeIndex].category}
                    </span>
                  </div>

                  <motion.div 
                    className="h-48 overflow-hidden relative"
                    variants={imageContainerVariants}
                  >
                    <img 
                      src={filteredPodcasts[activeIndex].img} 
                      alt="Podcast Episode" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Play button */}
                    <motion.div
                      variants={playButtonVariants}
                      className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                      whileHover="hover"
                    >
                      <FaPlay className="text-[#7678ED] text-lg ml-1" />
                    </motion.div>
                  </motion.div>

                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h6 className="font-[Commissioner] text-[18px] font-semibold leading-7 text-[#13132C] line-clamp-2">
                          {filteredPodcasts[activeIndex].title}
                        </h6>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-1.5 text-[#898998] text-sm">
                            <FaHeadphones className="text-[#7678ED]" />
                            <span>{filteredPodcasts[activeIndex].eps} Eps</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#898998] text-sm">
                            <FaClock className="text-[#7678ED]" />
                            <span>{filteredPodcasts[activeIndex].duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots with numbers */}
            <div className="flex justify-center gap-2 mt-8">
              {filteredPodcasts.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center justify-center ${
                    activeIndex === idx 
                      ? 'w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'w-6 h-6 bg-gray-200 text-gray-400'
                  } rounded-full text-xs font-medium transition-all duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: activeIndex === idx ? 1.1 : 1
                  }}
                >
                  {activeIndex === idx ? idx + 1 : ''}
                </motion.button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                key={activeIndex}
              />
            </div>
          </motion.div>

          {/* Desktop Grid */}
          <motion.div 
            variants={containerVariants}
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            <AnimatePresence>
              {filteredPodcasts.map((pod, index) => (
                <motion.div
                  key={index}
                  layout
                  variants={itemVariants}
                  custom={index}
                  initial="rest"
                  whileHover="hover"
                  variants={cardVariants}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden shadow-lg relative group"
                >
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <motion.span 
                      animate={pulseAnimation}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full shadow"
                    >
                      {pod.category}
                    </motion.span>
                  </div>

                  {/* Episode number */}
                  <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                    <span className="text-xs font-bold text-[#13132C]">{index + 1}</span>
                  </div>

                  <motion.div 
                    className="h-48 overflow-hidden relative"
                    variants={imageContainerVariants}
                  >
                    <img 
                      src={pod.img} 
                      alt="Podcast Episode" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play button overlay */}
                    <motion.div
                      variants={playButtonVariants}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl cursor-pointer">
                        <FaPlay className="text-[#7678ED] text-2xl ml-1" />
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h6 className="font-[Commissioner] text-[18px] font-semibold leading-7 text-[#13132C] line-clamp-2 mb-3">
                          {pod.title}
                        </h6>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[#898998] text-sm">
                            <FaHeadphones className="text-[#7678ED]" />
                            <span>{pod.eps} Eps</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#898998] text-sm">
                            <FaClock className="text-[#7678ED]" />
                            <span>{pod.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center mx-auto mt-16 gap-4"
          >
            <motion.p 
              animate={pulseAnimation}
              className="font-[Commissioner] text-[#898998] text-sm"
            >
              Showing {filteredPodcasts.length} of {podcasts.length} podcasts
            </motion.p>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(118, 120, 237, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                text={
                  <div className="flex items-center gap-2">
                    <span>Load More Podcasts</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaPlay className="text-sm" />
                    </motion.div>
                  </div>
                }
                bgColor="transparent"
                textColor="#7678ED"
                border="1px solid #7678ED"
                className="px-8 py-3 hover:bg-[#7678ED] hover:text-white transition-colors duration-300 rounded-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default PopularPodcast;