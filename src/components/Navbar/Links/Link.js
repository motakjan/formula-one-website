import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const variants = {
  initial: { opacity: 0, x: "-100%" },
  animate: { opacity: 1, x: 0 },
};

export const Link = ({ href, children, className, transitionDelay }) => {
  return (
    <RouterLink to={href}>
      <motion.p
        className={className}
        whileHover={{ scale: 1.05 }}
        animate="animate"
        initial="initial"
        transition={{ delay: transitionDelay }}
        variants={variants}
      >
        {children}
      </motion.p>
    </RouterLink>
  );
};
