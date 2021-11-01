import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { Link } from "./Links/Link";
import { DropdownLink } from "./Links/DropdownLink";
import { useWindowSize } from "../../hooks/useWindowsSize";
import { motion } from "framer-motion";
import { SVGIcon } from "./Icon/SVGIcon";
import {
  TeamOutlined,
  HomeOutlined,
  ScheduleOutlined,
  OrderedListOutlined,
  CarOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const showLinks = () => {
    var links = document.getElementById("nav-links");
    links.style.display = !isOpen ? "flex" : "none";
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (size.width > 750) {
      var links = document.getElementById("nav-links");
      links.style.display = "flex";
      setIsOpen(true);
    }
  }, [size]);

  return (
    <header className="navbar">
      <div className="top-bar">
        <SVGIcon />
        <HamburgerMenu showLinks={showLinks} isOpen={isOpen} />
      </div>

      <motion.div
        className="links"
        id="nav-links"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <Link href="/home" className="link">
          <HomeOutlined /> Home
        </Link>
        <Link href="/schedule" className="link">
          <ScheduleOutlined /> Schedule
        </Link>
        <DropdownLink
          href="/"
          className="link"
          dropdown={[
            {
              href: "/rankings/drivers",
              className: "link",
              name: "Drivers",
              icon: <UserOutlined />,
            },
            {
              href: "/rankings/constructors",
              className: "link",
              name: "Constructors",
              icon: <CarOutlined />,
            },
          ]}
        >
          <OrderedListOutlined /> Rankings
        </DropdownLink>
        <Link href="/teams" className="link">
          <TeamOutlined />
          Teams
        </Link>
      </motion.div>
    </header>
  );
};
