import React from "react";
import { motion } from "framer-motion";

export const HamburgerMenu = ({ showLinks, isOpen }) => {
  const variants = {
    open: { backgroundColor: "rgb(255, 255, 255)" },
    closed: { backgroundColor: "rgb(0, 0, 0)" },
  };

  return (
    <motion.div
      className="demo"
      onClick={showLinks}
      whileHover={{ scale: 1.1 }}
    >
      <div className="menu-icon">
        <input
          className="menu-icon__checkbox"
          type="checkbox"
          checked={isOpen ? true : false}
          readOnly
        />
        <div>
          <motion.span
            animate={!isOpen ? "open" : "closed"}
            variants={variants}
          ></motion.span>
          <motion.span
            animate={!isOpen ? "open" : "closed"}
            variants={variants}
          ></motion.span>
        </div>
      </div>
    </motion.div>
  );
};
