import React from "react";
import "./MainPage.scss";
import { MidSection } from "./MidSection/MidSection";
import { News } from "./News/News";

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="block mainImage mainPagePadding"></div>
      <MidSection />
      <News className="mainPagePadding" />
    </div>
  );
};
