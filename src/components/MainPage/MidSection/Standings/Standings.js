import React from "react";
import { useQuery } from "react-query";
import { getDriverStandings } from "../../../../queries/queries";
import { getTeamColors } from "../../../../queries/staticData";
import { TopThreeCard } from "./TopThreeCard/TopThreeCard";
import { Button } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useYear } from "../../../../store/YearContext";
import { Spinner } from "../../../UI/Spinner/Spinner";
import { ErrorMessage } from "../../../UI/ErrorMessage/ErrorMessage";

const teamColors = getTeamColors();

export const Standings = () => {
  const { year } = useYear();
  const { data, status } = useQuery(
    ["driverStandingsTopThree", year],
    () => getDriverStandings(year),
    {
      onError: (err) => console.error(err),
    }
  );

  return (
    <div className="top-three-standings">
      {status === "success" && data && (
        <>
          <TopThreeCard
            place={2}
            data={
              data?.MRData.StandingsTable.StandingsLists[0].DriverStandings[1]
            }
            teamColor={
              teamColors[
                data?.MRData.StandingsTable.StandingsLists[0].DriverStandings[1]
                  .Constructors[0].name
              ]
            }
            year={year}
          />
          <TopThreeCard
            place={1}
            data={
              data?.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
            }
            teamColor={
              teamColors[
                data?.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
                  .Constructors[0].name
              ]
            }
            year={year}
          />
          <TopThreeCard
            place={3}
            data={
              data?.MRData.StandingsTable.StandingsLists[0].DriverStandings[2]
            }
            teamColor={
              teamColors[
                data?.MRData.StandingsTable.StandingsLists[0].DriverStandings[2]
                  .Constructors[0].name
              ]
            }
            year={year}
          />
          <motion.div style={{ width: "100%" }}>
            <Link to="/rankings/drivers" className="standings-button-link">
              <Button
                className="standings-button"
                icon={<OrderedListOutlined />}
                type="dashed"
              >
                Get Full Standings
              </Button>
            </Link>
          </motion.div>
        </>
      )}
      {status === "loading" && <Spinner />}
      {status === "error" && (
        <ErrorMessage description="Error while loading placement data" />
      )}
    </div>
  );
};
