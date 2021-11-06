import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { Link } from "./Links/Link";
import { DropdownLink } from "./Links/DropdownLink";
import { useWindowSize } from "../../hooks/useWindowsSize";
import { motion } from "framer-motion";
import { SVGIcon } from "./Icon/SVGIcon";
import {
  HomeOutlined,
  ScheduleOutlined,
  OrderedListOutlined,
  CarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const history = useHistory();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const showLinks = () => {
    setIsOpen((prevState) => !prevState);
  };

  const routeChange = () => {
    let path = `newPath`;
    history.push(path);
  };

  useEffect(() => {
    if (size.width > 750) {
      setIsOpen(true);
    }
  }, [size]);

  return (
    <header className="navbar">
      <div className="top-bar">
        <SVGIcon onClick={routeChange} />
        <HamburgerMenu showLinks={showLinks} isOpen={isOpen} />
      </div>

      {isOpen && (
        <motion.div
          className="links"
          id="nav-links"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <Link href="/home" className="link" transitionDelay={0.2}>
            <HomeOutlined /> Home
          </Link>
          <Link href="/schedule" className="link" transitionDelay={0.4}>
            <ScheduleOutlined /> Schedule
          </Link>
          <DropdownLink
            href="/"
            className="link"
            transitionDelay={0.6}
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
        </motion.div>
      )}
    </header>
  );
};
