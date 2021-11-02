import React from "react";
import { motion } from "framer-motion";
export const PageTransitionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};
