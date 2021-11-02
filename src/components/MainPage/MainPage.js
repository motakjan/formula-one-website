import React from "react";
import "./MainPage.scss";
import { News } from "./News/News";

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="block mainImage">
        <div className="mainImageText">
          <h1 className="mainImageTitle">Formula 1</h1>
          <h2 className="mainImageSubTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
      <div className="block mainBodyDark">black</div>
      <News />
    </div>
  );
};
