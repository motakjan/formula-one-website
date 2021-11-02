import React from "react";
import { useQuery } from "react-query";
import { getCurrentSeason } from "../../queries/queries";
import { Title } from "../UI/Title/Title";
import { Race } from "./Race/Race";
import "./Schedule.scss";

export const Schedule = () => {
  const { data, status } = useQuery("seasonData", getCurrentSeason);

  return (
    <div className="schedule">
      <Title
        title={`F1 Schedule ${
          status === "success" && data["MRData"]["RaceTable"]["season"]
        }`}
        subtitle={`${
          status === "success" && data["MRData"]["RaceTable"]["season"]
        } FIA
          FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR`}
      />

      <div className="races">
        {status === "success" &&
          data["MRData"]["RaceTable"]["Races"].map((race, index) => (
            <Race
              key={`schedule-item-${index}`}
              raceData={race}
              showDelay={0.1 * index}
            />
          ))}
      </div>
    </div>
  );
};
