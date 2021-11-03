import React from "react";

export const Title = ({ title, subtitle, className }) => {
  return (
    <div className={`main-title-wrapper-${className}`}>
      <h1 className={`title ${className}`}>{title}</h1>
      {subtitle && <h2 className={`subtitle ${className}`}>{subtitle}</h2>}
    </div>
  );
};
