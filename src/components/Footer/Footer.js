import React from "react";
import "./Footer.scss";
import { LinkedinFilled, MailOutlined, GithubFilled } from "@ant-design/icons";
import { useYear } from "../../store/YearContext";
import { InputNumber, Button, Space, Slider } from "antd";

export const Footer = () => {
  const { year, setYear } = useYear();

  function formatter(value) {
    return `YEAR: ${value}`;
  }

  return (
    <div className="footer">
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/janmotak/"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinFilled className="icon" />
          LinkedIn
        </a>
        <a href="mailto:jan.motak@hotmail.cz" className="footer-link">
          <MailOutlined className="icon" />
          Contact
        </a>
        <a
          href="https://github.com/motakjan"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubFilled className="icon" />
          Github
        </a>
      </div>
      <span className="slider">
        <Slider
          defaultValue={2021}
          min={2018}
          max={2021}
          onChange={setYear}
          value={year}
          tipFormatter={formatter}
        />
      </span>
      <span>
        Designed By <strong>Jan MOTÁK</strong>
      </span>
    </div>
  );
};
