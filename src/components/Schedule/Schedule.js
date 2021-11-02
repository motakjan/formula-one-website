import React from "react";
import { useQuery } from "react-query";
import { getCurrentSeason } from "../../queries/queries";
import { Race } from "./Race/Race";
import "./Schedule.scss";

export const Schedule = () => {
  const { data, status } = useQuery("seasonData", getCurrentSeason);

  return (
    <div className="schedule">
      <h1 className="title">
        F1 Schedule{" "}
        {status === "success" && data["MRData"]["RaceTable"]["season"]}
      </h1>
      <h2 className="subtitle">
        {status === "success" && data["MRData"]["RaceTable"]["season"]} FIA
        FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR
      </h2>
      <div className="races">
        {status === "success" &&
          data["MRData"]["RaceTable"]["Races"].map((race, index) => (
            <Race key={`schedule-item-${index}`} raceData={race} />
          ))}
      </div>
    </div>
  );
};
