import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const DropdownLink = ({
  children,
  className,
  dropdown,
  transitionDelay,
}) => {
  const variants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0 },
  };

  const generateDropdownItems = () => {
    return (
      <Menu>
        {dropdown.map((item, index) => (
          <Menu.Item key={`dropdown-item-${item.name}-${index}`}>
            {item.icon} <Link to={item.href}>{item.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  const dropdownItems = generateDropdownItems();

  return (
    <Dropdown overlay={dropdownItems}>
      <motion.a
        href="/"
        className={`${className} dropdown-link`}
        onClick={(e) => e.preventDefault()}
        animate="animate"
        initial="initial"
        transition={{ delay: transitionDelay }}
        variants={variants}
      >
        {children}
        <DownOutlined />
      </motion.a>
    </Dropdown>
  );
};
