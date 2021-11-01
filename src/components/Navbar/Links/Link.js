import React from "react";
import { motion } from "framer-motion";

export const Link = ({ href, children, className }) => {
  return (
    <motion.a href={href} className={className} whileHover={{ scale: 1.05 }}>
      {children}
    </motion.a>
  );
};
