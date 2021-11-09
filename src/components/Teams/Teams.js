import React from "react";
import { Title } from "../UI/Title/Title";
import { useQuery } from "react-query";
import { getCurrentTeams } from "../../queries/queries";
import { Team } from "./Team/Team";
import "./Teams.scss";
import { getTeamColors } from "../../queries/staticData";
import { Spinner } from "../UI/Spinner/Spinner";
import { ErrorMessage } from "../UI/ErrorMessage/ErrorMessage";

export const Teams = () => {
  const { data, status } = useQuery("teams", getCurrentTeams, {
    onError: (err) => console.error(err),
  });

  const teamColors = getTeamColors();

  return (
    <div className="teams-page block">
      <Title
        title="Constructors Standings"
        subtitle="CURRENT CONSTRUCTORS STANDINGS FOR SEASON 2021"
      />
      <div className="team-cards">
        {status === "success" &&
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
            (team, index) => (
              <Team
                key={`constructor-key-${index}`}
                teamData={team}
                delay={index * 0.2}
                color={teamColors[team.Constructor.name]}
              />
            )
          )}
        {status === "loading" && <Spinner />}
        {status === "error" && (
          <ErrorMessage description="Error while loading teams data" />
        )}
      </div>
    </div>
  );
};
