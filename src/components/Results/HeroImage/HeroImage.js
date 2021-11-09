import React from "react";

export const HeroImage = ({ data }) => {
  const correctLocation = () => {
    if (data.MRData.RaceTable.Races[0].Circuit.Location.country === "UK") {
      return "Great%20Britain";
    }

    if (data.MRData.RaceTable.Races[0].Circuit.Location.country === "UAE") {
      return "Abu%20Dhab";
    }

    return data.MRData.RaceTable.Races[0].Circuit.Location.country;
  };

  return (
    <div
      className="hero-image"
      style={{
        backgroundImage: `url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/${correctLocation()}.jpg.transform/fullbleed/image.jpg)`,
      }}
    >
      <div className="transparent-black">
        <p>{data.MRData.RaceTable.Races[0].Circuit.Location.country}</p>
      </div>
    </div>
  );
};
