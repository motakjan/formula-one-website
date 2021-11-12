import React from "react";
import { useQuery } from "react-query";
import { useYear } from "../../store/YearContext";
import { getDriverStandings } from "../../queries/queries";
import { Title } from "../UI/Title/Title";
import { Driver } from "./Driver/Driver";
import "./Drivers.scss";

export const Drivers = () => {
  const { year } = useYear();
  const { data, status } = useQuery(
    ["driverStandings", year],
    () => getDriverStandings(year),
    {
      onError: (err) => console.error(err),
    }
  );

  return (
    <div className="drivers block">
      <Title
        title="Driver Standings"
        subtitle={`CURRENT DRIVER STANDINGS FOR SEASON ${year}`}
      />
      <div className="driver-cards">
        {status === "success" &&
          data?.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
            (driver, index) => (
              <Driver
                driverData={driver}
                year={year}
                key={`driver-standing-${index}`}
              />
            )
          )}
      </div>
    </div>
  );
};
