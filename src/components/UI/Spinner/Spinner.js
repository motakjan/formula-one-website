import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 54, color: "#ff1b16" }} spin />
);

export const Spinner = () => {
  return (
    <div className="spinner">
      <Spin indicator={antIcon} />
    </div>
  );
};
