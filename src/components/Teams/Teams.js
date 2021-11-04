import React from "react";
import { Title } from "../UI/Title/Title";
import { useQuery } from "react-query";
import { getCurrentTeams } from "../../queries/queries";
import { Team } from "./Team/Team";
import "./Teams.scss";

export const Teams = () => {
  const { data, status } = useQuery("teams", getCurrentTeams);

  console.log(data);

  return (
    <div className="teams-page block">
      <Title
        title="Constructors Standings"
        subtitle="CURRENT CONSTRUCTORS STANDINGS FOR SEASON 2021"
        light
      />
      <div className="team-cards">
        {status === "success" &&
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
            (team, index) => (
              <Team key={`constructor-key-${index}`} teamData={team} />
            )
          )}
      </div>
    </div>
  );
};