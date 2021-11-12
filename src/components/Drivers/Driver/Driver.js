import React from "react";
import { getTeamColors } from "../../../queries/staticData";
import { getFlagName, getDriverImageName } from "../../../queries/staticData";
import { motion } from "framer-motion";

const teamColors = getTeamColors();

export const Driver = ({ driverData, year }) => {
  return (
    <motion.div className="driver-card" whileHover={{}}>
      <div className="top-bar">
        <h2 className="position">{driverData.position}</h2>
        <h3 className="points">
          {driverData.points}
          <br />
          <span className="points-badge">POINTS</span>
        </h3>
      </div>

      <div className="mid-bar">
        <div className="player-name">
          <div
            className="team-bar"
            style={{
              backgroundColor: teamColors[driverData.Constructors[0].name],
            }}
          ></div>
          <div>
            <p>{driverData.Driver.givenName}</p>
            <strong>{driverData.Driver.familyName}</strong>
          </div>
        </div>
        <img
          className="driver-flag"
          src={
            driverData.Driver.familyName !== "Kubica"
              ? `https://www.formula1.com/content/fom-website/en/drivers/${getFlagName(
                  driverData
                )}/_jcr_content/countryFlag.transform/1col/image.png`
              : "https://www.formula1.com/content/dam/fom-website/flags/Poland.jpg.transform/2col/image.jpg"
          }
          alt={`${getFlagName(driverData)}-1-flag`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/blackbg.jpg";
          }}
        />
      </div>

      <div className="bottom-bar">
        <p className="constructor-name">{driverData.Constructors[0].name}</p>
        <div className="image-wrapper">
          <div className="number-wrapper">
            <img
              className="placement-driver-number-image"
              src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/${getDriverImageName(
                driverData,
                "01",
                year
              ).toUpperCase()}.png.transform/2col/image.png`}
              alt={`${getDriverImageName(driverData, year)}-number-1`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/blackbg.jpg";
              }}
            />
          </div>

          <img
            className="placement-driver-image"
            src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/${year}/${getDriverImageName(
              driverData,
              "01",
              year
            )}.png.transform/2col/image.png`}
            alt={`${getDriverImageName(driverData, year)}-1`}
          />
        </div>
      </div>
    </motion.div>
  );
};
