import React from "react";
import { motion } from "framer-motion";
import { correctTeamName } from "../../../queries/staticData";

export const Team = ({ teamData, delay, color, year }) => {
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
            <div className="color-name-wrapper">
              <span className="color-tile" style={{ background: color }}>
                &nbsp;
              </span>
              <h1 className="team-name">{teamData.Constructor.name}</h1>
            </div>

            <img
              src={`https://www.formula1.com/content/dam/fom-website/teams/${
                year === 2018 ? 2019 : year
              }/${correctTeamName(teamData)}-logo.png.transform/2col/image.png`}
              alt={`logo-${correctTeamName(teamData)}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/F1.svg";
              }}
            />
          </div>
        </div>
        <div className="image-wrapper">
          <img
            src={`https://www.formula1.com/content/dam/fom-website/teams/${
              year === 2018 ? 2019 : year
            }/${correctTeamName(teamData)}.png.transform/6col/image.png`}
            alt={`formula-${correctTeamName(teamData)}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/formulaPlaceholder.png";
            }}
          />
        </div>

        <a
          href={teamData.Constructor.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </motion.div>
  );
};
