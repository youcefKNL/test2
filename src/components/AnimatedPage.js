import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: {
    opacity: 0,
    transform: "translateX(100%)",
  },
  animate: {
    opacity: 1,
    transform: "translateX(0)",
    transition: "0.3s ease",
  },
  exit: {
    opacity: 0, // Mettez l'opacité à 0 pour l'animation de sortie
    transition: { duration: 0.3, ease: "easeOut" }, // Définissez la durée et l'ease appropriés pour l'animation de sortie
    transform: "translateX(-100%)",
  },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      key={children.key} // Assurez-vous que le composant est correctement mis à jour avec la clé
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
