import React from "react";
import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";

const animations = {
  initial: {
    opacity: 0,
    transform: "translateX(100%)",
  },
  animate: {
    opacity: 1,
    transform: "translateX(0)",
    transition: "0.5s ease",
  },
  exit: {
    opacity: 0.6,
    transition: " 0.3s ease",
    transform: "translateX(-100%)",
  },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
