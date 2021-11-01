import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export const DropdownLink = ({ children, className, dropdown }) => {
  const generateDropdownItems = () => {
    return (
      <Menu>
        {dropdown.map((item) => (
          <Menu.Item key={`dropdown-item-${item.name}`}>
            {item.icon} <a href={item.href}>{item.name}</a>
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  const dropdownItems = generateDropdownItems();

  return (
    <Dropdown overlay={dropdownItems}>
      <a
        href="/"
        className={`${className} dropdown-link`}
        onClick={(e) => e.preventDefault()}
      >
        {children}
        <DownOutlined />
      </a>
    </Dropdown>
  );
};
