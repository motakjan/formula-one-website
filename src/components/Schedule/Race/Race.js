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
        <Meta
          title={raceData.raceName}
          description={raceData.Circuit.circuitName}
        />
        <p>
          {raceData.date} : {raceData.time}
        </p>
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
