import React, { useState, useEffect } from "react";
import Container from "../../components/commoncomponents/Container";
import { FaArrowRightLong, FaCalendar, FaClock, FaUser } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";

const blogData = [
  {
    title: "Best Workspace For Your Work From Home At Pandemic Season Millenial",
    desc: "A mixer is a place of hardware that gives podcasters the ability to adjust audio levels, apply effects, and get a top notch recording with less time spent",
    img: "./images/Rectangle3.png",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    author: "John Doe",
    category: "Workspace"
  },
  {
    title: "Master Your Podcast Audio Quality With These Essential Tools",
    desc: "Learn about the latest audio equipment and software that can transform your podcast from amateur to professional sounding in just a few steps",
    img: "./images/Rectangle3.png",
    date: "Feb 20, 2024",
    readTime: "8 min read",
    author: "Sarah Smith",
    category: "Audio"
  },
  {
    title: "How To Grow Your Podcast Audience In 2024 - Expert Strategies",
    desc: "Discover proven marketing techniques and platform-specific strategies to increase your listener base and engagement rates effectively",
    img: "./images/Rectangle3.png",
    date: "Mar 10, 2024",
    readTime: "10 min read",
    author: "Mike Johnson",
    category: "Growth"
  },
];

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Animation control
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Auto Slide Effect for mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
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
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const cardVariants = {
    rest: { 
      y: 0,
      scale: 1,
      rotateY: 0,
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)"
    },
    hover: { 
      y: -12,
      scale: 1.03,
      rotateY: 5,
      boxShadow: "0 25px 50px rgba(118, 120, 237, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const imageVariants = {
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

  const arrowVariants = {
    rest: { x: 0 },
    hover: { 
      x: 10,
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
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

  const paginate = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* HEADER */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-center items-center text-center w-full md:w-[593px] mx-auto py-16 gap-6"
          >
            {/* Decorative element */}
            <motion.div
              animate={floatingAnimation}
              className="w-16 h-1 bg-gradient-to-r from-[#7678ED] to-transparent rounded-full mb-2"
            />
            
            <h1 className="font-[Commissioner] text-[32px] md:text-[48px] leading-[40px] md:leading-[70px] font-semibold text-[#13132C]">
              Blog Articles to
              <span className="block bg-gradient-to-r from-[#7678ED] to-blue-500 bg-clip-text text-transparent">
                Improve Your Podcast
              </span>
            </h1>
            
            <motion.p 
              animate={pulseAnimation}
              className="font-[Commissioner] text-[16px] md:text-[15px] leading-6 text-[#898998] max-w-[327px] md:max-w-[533px]"
            >
              Take a deep dive into the podcasting world with exclusive interviews, biographies and insight into podcast voice and creator podcast of all size age
            </motion.p>
          </motion.div>

          {/* MOBILE SLIDER */}
          {isMobile && (
            <motion.div 
              variants={itemVariants}
              className="relative w-full max-w-[327px] mx-auto"
            >
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
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-[#7678ED] to-blue-500 text-white text-xs font-semibold rounded-full shadow">
                      {blogData[activeIndex].category}
                    </span>
                  </div>

                  <motion.div 
                    className="h-56 overflow-hidden relative"
                    variants={imageVariants}
                  >
                    <img 
                      src={blogData[activeIndex].img} 
                      className="w-full h-full object-cover" 
                      alt={blogData[activeIndex].title}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>

                  <div className="p-6">
                    {/* Metadata */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1.5 text-[#898998] text-xs">
                        <FaCalendar className="text-[#7678ED]" />
                        <span>{blogData[activeIndex].date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#898998] text-xs">
                        <FaClock className="text-[#7678ED]" />
                        <span>{blogData[activeIndex].readTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#898998] text-xs">
                        <FaUser className="text-[#7678ED]" />
                        <span>{blogData[activeIndex].author}</span>
                      </div>
                    </div>

                    <h2 className="font-[Commissioner] text-[20px] font-bold text-[#13132C] line-clamp-2 mb-3">
                      {blogData[activeIndex].title}
                    </h2>
                    
                    <p className="font-[Commissioner] text-[14px] leading-6 text-[#898998] line-clamp-3 mb-6">
                      {blogData[activeIndex].desc}
                    </p>

                    <motion.div 
                      className="inline-flex items-center gap-3 text-[#7678ED] font-[Commissioner] text-[15px] font-semibold cursor-pointer group"
                      variants={arrowVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      <span className="relative">
                        Read Full Article
                        <motion.span
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          className="absolute bottom-0 left-0 h-0.5 bg-[#7678ED]"
                        />
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaArrowRightLong />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {blogData.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => paginate(idx)}
                    className={`flex items-center justify-center ${
                      activeIndex === idx 
                        ? 'w-8 h-8 bg-gradient-to-r from-[#7678ED] to-blue-500 text-white' 
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
                  className="h-full bg-gradient-to-r from-[#7678ED] to-blue-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  key={activeIndex}
                />
              </div>
            </motion.div>
          )}

          {/* DESKTOP VIEW */}
          {!isMobile && (
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {blogData.map((blog, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  initial="rest"
                  whileHover="hover"
                  variants={cardVariants}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group"
                >
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <motion.span 
                      animate={pulseAnimation}
                      className="px-4 py-2 bg-gradient-to-r from-[#7678ED] to-blue-500 text-white text-sm font-semibold rounded-full shadow-lg"
                    >
                      {blog.category}
                    </motion.span>
                  </div>

                  {/* Blog number */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                    <span className="text-sm font-bold text-[#13132C]">{index + 1}</span>
                  </div>

                  <motion.div 
                    className="h-56 overflow-hidden relative"
                    variants={imageVariants}
                  >
                    <img 
                      src={blog.img} 
                      className="w-full h-full object-cover" 
                      alt={blog.title}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  <div className="p-8">
                    {/* Metadata */}
                    <div className="flex items-center gap-6 mb-5">
                      <div className="flex items-center gap-2 text-[#898998] text-sm">
                        <FaCalendar className="text-[#7678ED]" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#898998] text-sm">
                        <FaClock className="text-[#7678ED]" />
                        <span>{blog.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#898998] text-sm">
                        <FaUser className="text-[#7678ED]" />
                        <span>{blog.author}</span>
                      </div>
                    </div>

                    <h2 className="font-[Commissioner] text-[22px] font-bold text-[#13132C] line-clamp-2 mb-4">
                      {blog.title}
                    </h2>
                    
                    <p className="font-[Commissioner] text-[15px] leading-7 text-[#898998] line-clamp-3 mb-8">
                      {blog.desc}
                    </p>

                    <motion.div 
                      className="inline-flex items-center gap-3 text-[#7678ED] font-[Commissioner] text-[16px] font-semibold cursor-pointer group"
                      variants={arrowVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      <span className="relative">
                        Read Full Article
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7678ED] group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaArrowRightLong />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Hover indicator line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#7678ED] to-blue-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* BUTTON */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center mt-20 gap-4"
          >
            <motion.p 
              animate={pulseAnimation}
              className="font-[Commissioner] text-[#898998] text-sm"
            >
              Showing {blogData.length} of 12+ articles
            </motion.p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(118, 120, 237, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white font-[Commissioner] font-semibold text-[16px] text-[#7678ED] border-2 border-[#7678ED] rounded-xl hover:bg-[#7678ED] hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <span>View All Blog Posts</span>
              <FaArrowRightLong className="text-sm" />
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Blog;