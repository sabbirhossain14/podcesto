import React, { useState, useEffect } from "react";
import Container from "../../components/commoncomponents/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../components/commoncomponents/Button";
import { motion, useAnimation, useInView } from "framer-motion";

const blogData = [
  {
    title: "Best Workspace For Your Work From Home At Pandemic Season Millenial",
    desc: "A mixer is a place of hardware that gives podcasters the ability to adjust audio levels, apply effects, and get a top notch recording with less time spent",
    img: "./images/Rectangle3.png",
  },
  {
    title: "Master Your Podcast Audio Quality With These Essential Tools",
    desc: "Learn about the latest audio equipment and software that can transform your podcast from amateur to professional sounding in just a few steps",
    img: "./images/Rectangle3.png",
  },
  {
    title: "How To Grow Your Podcast Audience In 2024 - Expert Strategies",
    desc: "Discover proven marketing techniques and platform-specific strategies to increase your listener base and engagement rates effectively",
    img: "./images/Rectangle3.png",
  },
];

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
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

  const cardHoverVariants = {
    rest: { 
      y: 0,
      scale: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
    },
    hover: { 
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(118, 120, 237, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const imageHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.08,
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
      x: 8,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newIndex) => {
    const newDirection = newIndex > activeIndex ? 1 : -1;
    setDirection(newDirection);
    setActiveIndex(newIndex);
  };

  return (
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
          className="flex flex-col justify-center items-center text-center w-[327px] md:w-[593px] mx-auto py-16 gap-6"
        >
          <h1 className="font-[Commissioner] text-[28px] md:text-[48px] leading-[36px] md:leading-[70px] font-semibold text-[#13132C]">
            Find Blog Articles that can improve your podcast
          </h1>
          <p className="font-[Commissioner] text-[15px] md:w-[533px] leading-6 text-[#898998]">
            Take a deep dive into the podcasting world with exclusive interviews, biographies and insight into podcast voice and creator podcast of all size age
          </p>
        </motion.div>

        {/* MOBILE SLIDER */}
        {isMobile && (
          <motion.div 
            variants={itemVariants}
            className="relative w-full max-w-[327px] mx-auto overflow-hidden rounded-2xl"
          >
            <motion.div
              key={activeIndex}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              className="w-full"
            >
              <motion.div
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <motion.div 
                  className="overflow-hidden rounded-xl mb-6"
                  variants={imageHoverVariants}
                >
                  <img 
                    src={blogData[activeIndex].img} 
                    className="w-full h-48 object-cover" 
                    alt={blogData[activeIndex].title}
                  />
                </motion.div>
                
                <h2 className="font-[Commissioner] text-[18px] font-semibold text-[#13132C] line-clamp-2">
                  {blogData[activeIndex].title}
                </h2>
                
                <p className="font-[Commissioner] text-[14px] leading-6 text-[#898998] mt-4 line-clamp-3">
                  {blogData[activeIndex].desc}
                </p>

                <motion.div 
                  className="mt-6 flex items-center gap-2 text-[#7678ED] font-[Commissioner] text-[14px] font-medium cursor-pointer"
                  variants={arrowVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRightLong />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-8">
              {blogData.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => paginate(idx)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    activeIndex === idx ? "bg-[#7678ED]" : "bg-[#E0E0E0]"
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                  animate={{
                    scale: activeIndex === idx ? 1.3 : 1
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
              <motion.div
                className="bg-[#7678ED] h-1 rounded-full"
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
                variants={cardHoverVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <motion.div 
                    className="overflow-hidden rounded-xl mb-6"
                    variants={imageHoverVariants}
                  >
                    <img 
                      src={blog.img} 
                      className="w-full h-48 object-cover" 
                      alt={blog.title}
                    />
                  </motion.div>

                  <h2 className="font-[Commissioner] text-[20px] font-semibold text-[#13132C] line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="font-[Commissioner] text-[14px] leading-6 text-[#898998] mt-4 line-clamp-3">
                    {blog.desc}
                  </p>

                  <motion.div 
                    className="mt-6 flex items-center gap-2 text-[#7678ED] font-[Commissioner] text-[14px] font-medium cursor-pointer"
                    variants={arrowVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <span>Learn More</span>
                    <FaArrowRightLong />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* BUTTON */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mt-16"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(118, 120, 237, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              text="More Blog"
              bgColor="transparent"
              textColor="#7678ED"
              border="1px solid #7678ED"
              hoverBgColor="#7678ED"
              hoverTextColor="#FFFFFF"
              className="px-8 py-3 rounded-lg"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Blog;