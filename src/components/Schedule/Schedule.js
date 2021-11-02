import React from "react";
import { useQuery } from "react-query";
import { getCurrentSeason } from "../../queries/queries";
import { Race } from "./Race/Race";
import "./Schedule.scss";

export const Schedule = () => {
  const { data, status } = useQuery("seasonData", getCurrentSeason, {
    enabled: false,
  });

  return (
    <div className="schedule">
      <h1>
        F1 Schedule{" "}
        {status === "success" && data["MRData"]["RaceTable"]["season"]}
      </h1>
      <div className="races">
        {status === "success" &&
          data["MRData"]["RaceTable"]["Races"].map((race, index) => (
            <Race key={`schedule-item-${index}`} raceData={race} />
          ))}
      </div>
    </div>
  );
};
