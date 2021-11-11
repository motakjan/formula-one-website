import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DriverTable } from "./DriverTable/DriverTable";
import { getRoundResults, getQualifierResults } from "../../queries/queries";
import { useQuery } from "react-query";
import { ErrorMessage } from "../UI/ErrorMessage/ErrorMessage";
import { Title } from "../UI/Title/Title";
import "./Results.scss";
import { HeroImage } from "./HeroImage/HeroImage";
import { Select } from "antd";
import { useYear } from "../../store/YearContext";
const { Option } = Select;

export const Results = () => {
  const { year } = useYear();
  const { track } = useParams();
  const [selectValue, setSelectValue] = useState("race");

  const { data: raceData, status } = useQuery(
    ["roundResultsInside", track, year],
    () => getRoundResults(track, year),
    {
      onError: (err) => console.error(err),
    }
  );

  const { data: qualifierData, status: qualifierStatus } = useQuery(
    ["roundResultsInsideQualifier", track, year],
    () => getQualifierResults(track, year),
    {
      onError: (err) => console.error(err),
    }
  );

  const handleChange = (value) => {
    setSelectValue(value);
  };

  return (
    <div className="results">
      {status === "success" &&
        qualifierStatus === "success" &&
        raceData.MRData.RaceTable.Races.length > 0 && (
          <>
            <Title
              title={`${raceData.MRData.RaceTable.Races[0].raceName}`}
              subtitle={`${raceData.MRData.RaceTable.Races[0].Circuit.circuitName}`}
            />
            <HeroImage data={raceData} />
            <div className="race-data-select">
              <p>Select table data: </p>
              <Select
                defaultValue="race"
                className="select"
                onChange={handleChange}
              >
                <Option value="race">Race</Option>
                <Option value="quali">Qualifier</Option>
              </Select>
            </div>

            <DriverTable
              status={selectValue === "race" ? status : qualifierStatus}
              data={selectValue === "race" ? raceData : qualifierData}
              type={selectValue}
            />
          </>
        )}
      {status === "error" && (
        <ErrorMessage description="Error while loading results data" />
      )}
    </div>
  );
};
