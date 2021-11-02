import React from "react";
import { Card } from "antd";
import { useQuery } from "react-query";
import { getRoundResults } from "../../../queries/queries";
import { PlacementInfo } from "./PlacementInfo/PlacementInfo";

const { Meta } = Card;

export const Race = ({ raceData }) => {
  const { data } = useQuery(
    ["roundResults", raceData.round],
    () => getRoundResults(raceData.round),
    {
      enabled: false,
    }
  );

  const isFinished = () =>
    data.MRData.RaceTable.Races.length !== 0 ? true : false;

  return (
    <Card className="race">
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
  );
};
