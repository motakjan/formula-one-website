import React from "react";

export const Team = ({ teamData }) => {
  const correctName = () => {
    if (teamData.Constructor.name === "Alfa Romeo") return "alfa-romeo-racing";
    if (teamData.Constructor.name === "Alpine F1 Team") return "alpine";
    if (teamData.Constructor.name === "Red Bull") return "red-bull-racing";

    return teamData.Constructor.name.toLowerCase().split(" ").join("-");
  };

  return (
    <div className="team-card">
      <div className="card-top">
        <img
          src={`https://www.formula1.com/content/dam/fom-website/teams/2021/${correctName()}-logo.png.transform/2col/image.png`}
          alt={`logo-${correctName()}`}
        />
        <h1>{teamData.Constructor.name}</h1>
      </div>
      <img
        src={`https://www.formula1.com/content/dam/fom-website/teams/2021/${correctName()}.png.transform/6col/image.png`}
        alt={`formula-${correctName()}`}
      />
      <a href={teamData.Constructor.url}>Read More</a>
    </div>
  );
};
