import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({ href, children, className, transitionDelay }) => {
  const variants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0, transition: { delay: transitionDelay } },
  };

  return (
    <RouterLink to={href}>
      <motion.p
        className={className}
        whileHover={{ scale: 1.05 }}
        animate="animate"
        initial="initial"
        variants={variants}
      >
        {children}
      </motion.p>
    </RouterLink>
  );
};
