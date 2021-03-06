import React from "react";
import { useQuery } from "react-query";
import { getCurrentSeason } from "../../queries/queries";
import { ErrorMessage } from "../UI/ErrorMessage/ErrorMessage";
import { Spinner } from "../UI/Spinner/Spinner";
import { Title } from "../UI/Title/Title";
import { Race } from "./Race/Race";
import "./Schedule.scss";
import { useYear } from "../../store/YearContext";

export const Schedule = () => {
  const { year } = useYear();
  const { data, status } = useQuery(
    ["seasonData", year],
    () => getCurrentSeason(year),
    {
      onError: (err) => console.error(err),
    }
  );

  return (
    <div className="schedule">
      <Title
        title={`F1 Schedule ${year}`}
        subtitle={`${year} FIA FORMULA ONE WORLD CHAMPIONSHIPâ„˘ RACE CALENDAR`}
      />
      <div className="races">
        {status === "success" &&
          data["MRData"]["RaceTable"]["Races"].map((race, index) => (
            <Race
              key={`schedule-item-${index}`}
              raceData={race}
              showDelay={0.1 * index}
              year={year}
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
