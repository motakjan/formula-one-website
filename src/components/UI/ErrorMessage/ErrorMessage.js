import React from "react";
import { Alert } from "antd";

export const ErrorMessage = ({ description }) => {
  return (
    <Alert
      style={{ width: "100%", margin: "1rem 0" }}
      message="Error"
      description={description}
      type="error"
      showIcon
    />
  );
};
