import React from "react";

export const Title = ({ title, subtitle }) => {
  return (
    <div className="main-title-wrapper">
      <h1 className="title">{title}</h1>
      {subtitle && <h2 className="subtitle">{subtitle}</h2>}
    </div>
  );
};
