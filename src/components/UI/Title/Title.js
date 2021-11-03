import React from "react";

export const Title = ({ title, subtitle, light }) => {
  return (
    <div
      className="main-title-wrapper"
      style={{ borderColor: light ? "#ededed" : "#111111" }}
    >
      <h1 className="title" style={{ color: light ? "#ededed" : "#111111" }}>
        {title}
      </h1>
      {subtitle && (
        <h2
          className="subtitle"
          style={{ color: light ? "#ededed" : "#111111" }}
        >
          {subtitle}
        </h2>
      )}
    </div>
  );
};
