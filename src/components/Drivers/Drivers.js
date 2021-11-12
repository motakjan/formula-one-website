import React from "react";
import { useQuery } from "react-query";
import { useYear } from "../../store/YearContext";
import { getDriverStandings } from "../../queries/queries";
import { Title } from "../UI/Title/Title";
import { Driver } from "./Driver/Driver";
import "./Drivers.scss";
import { Spinner } from "../UI/Spinner/Spinner";
import { ErrorMessage } from "../UI/ErrorMessage/ErrorMessage";

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
        {status === "loading" && <Spinner />}
        {status === "error" && (
          <ErrorMessage description="Error while loading placement data" />
        )}
      </div>
    </div>
  );
};
