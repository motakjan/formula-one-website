import React from "react";
import { useQuery } from "react-query";
import { getCurrentSeason } from "../../queries/queries";
import { ErrorMessage } from "../UI/ErrorMessage/ErrorMessage";
import { Spinner } from "../UI/Spinner/Spinner";
import { Title } from "../UI/Title/Title";
import { Race } from "./Race/Race";
import "./Schedule.scss";

export const Schedule = () => {
  const { data, status } = useQuery("seasonData", getCurrentSeason);

  return (
    <div className="schedule">
      <Title
        title={"F1 Schedule 2021"}
        subtitle={"2021 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR"}
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
        {status === "loading" && <Spinner />}
        {status === "error" && (
          <ErrorMessage description="Error while loading schedule data" />
        )}
      </div>
    </div>
  );
};
