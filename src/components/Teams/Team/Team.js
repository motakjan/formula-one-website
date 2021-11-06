import React from "react";
import { motion } from "framer-motion";

export const Team = ({ teamData, delay }) => {
  const correctName = () => {
    if (teamData.Constructor.name === "Alfa Romeo") return "alfa-romeo-racing";
    if (teamData.Constructor.name === "Alpine F1 Team") return "alpine";
    if (teamData.Constructor.name === "Red Bull") return "red-bull-racing";

    return teamData.Constructor.name.toLowerCase().split(" ").join("-");
  };

  const variants = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { delay: delay, duration: 0.3 } },
  };

  return (
    <motion.div
      className="team-card"
      variants={variants}
      animate="animate"
      initial="initial"
    >
      <div className="wrapper">
        <div className="card-top">
          <div className="place-position">
            <h1 className="position">{teamData.position}</h1>
            <h2 className="points">
              {teamData.points}
              <br />
              <span className="points-badge">POINTS</span>
            </h2>
          </div>
          <div className="logo-name">
            <h1 className="team-name">{teamData.Constructor.name}</h1>
            <img
              src={`https://www.formula1.com/content/dam/fom-website/teams/2021/${correctName()}-logo.png.transform/2col/image.png`}
              alt={`logo-${correctName()}`}
            />
          </div>
        </div>
        <div className="image-wrapper">
          <img
            src={`https://www.formula1.com/content/dam/fom-website/teams/2021/${correctName()}.png.transform/6col/image.png`}
            alt={`formula-${correctName()}`}
          />
        </div>
        <a href={teamData.Constructor.url}>Read More</a>
      </div>
    </motion.div>
  );
};
