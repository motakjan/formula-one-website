import React from "react";
import { Card } from "antd";
import { useQuery } from "react-query";
import { getRoundResults } from "../../../queries/queries";
import { PlacementInfo } from "./PlacementInfo/PlacementInfo";
import { motion } from "framer-motion";

const { Meta } = Card;

export const Race = ({ raceData, showDelay }) => {
  const { data } = useQuery(["roundResults", raceData.round], () =>
    getRoundResults(raceData.round)
  );

  const correctLocation = () => {
    if (raceData.Circuit.Location.country === "UK") {
      return "Great%20Britain";
    }

    if (raceData.Circuit.Location.country === "UAE") {
      return "Abu%20Dhab";
    }

    return raceData.Circuit.Location.country;
  };

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: showDelay } },
  };

  const isFinished = () =>
    data.MRData.RaceTable.Races.length !== 0 ? true : false;

  return (
    <motion.span
      className="race"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <Card className="race-card">
        <div className="race-card-top">
          <div>
            <Meta
              title={raceData.raceName}
              description={raceData.Circuit.circuitName}
            />
            <p className="race-time">
              {raceData.date} :{" "}
              {raceData.time.substr(0, raceData.time.length - 1)}
            </p>
          </div>

          <img
            className="circuit-map"
            alt={`circuit-${raceData.raceName}-map`}
            src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/${correctLocation()}%20carbon.png.transform/8col/image.png`}
          />
        </div>
        <h3>Placements:</h3>

        {data && isFinished() && (
          <div className="placement">
            <PlacementInfo
              info={data.MRData.RaceTable.Races[0].Results[0]}
              place={1}
            />
            <PlacementInfo
              info={data.MRData.RaceTable.Races[0].Results[1]}
              place={2}
            />
            <PlacementInfo
              info={data.MRData.RaceTable.Races[0].Results[2]}
              place={3}
            />
          </div>
        )}
      </Card>
    </motion.span>
  );
};
