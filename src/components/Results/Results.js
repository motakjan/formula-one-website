import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "antd";
import { getRoundResults } from "../../queries/queries";
import { useQuery } from "react-query";
import { ErrorMessage } from "../UI/ErrorMessage/ErrorMessage";
import { Title } from "../UI/Title/Title";
import "./Results.scss";
import { getTeamColors } from "../../queries/staticData";

const teamColors = getTeamColors();

const columns = [
  {
    title: "POS",
    dataIndex: "position",
    key: "position",
    responsive: ["sm"],
  },
  {
    title: "NO",
    dataIndex: ["Driver", "permanentNumber"],
    key: "number",
    responsive: ["md"],
  },
  {
    title: "DRIVER",
    dataIndex: "Driver",
    key: "name",
    render: (Driver, record) => (
      <>
        <div className="driver-bar">
          <div
            className="team-bar"
            style={{ backgroundColor: teamColors[record.Constructor.name] }}
          ></div>
          {Driver.givenName}
          <strong> {Driver.familyName.toUpperCase()}</strong>
        </div>
      </>
    ),
  },
  {
    title: "CAR",
    dataIndex: ["Constructor", "name"],
    key: "time",
    responsive: ["md"],
  },
  {
    title: "LAPS",
    dataIndex: "laps",
    key: "laps",
    responsive: ["md"],
  },
  {
    title: "TIME",
    dataIndex: "Time",
    key: "time",
    render: (Time, record) => (
      <>
        <div>{Time?.time ? Time.time : record.status}</div>
      </>
    ),
  },
  {
    title: "POINTS",
    dataIndex: "points",
    key: "points",
    responsive: ["sm"],
  },
];

export const Results = () => {
  const { track } = useParams();
  const { data, status } = useQuery(
    ["roundResultsInside", track],
    () => getRoundResults(track),
    {
      onError: (err) => console.error(err),
    }
  );

  console.log(data);

  const correctLocation = () => {
    if (data.MRData.RaceTable.Races[0].Circuit.Location.country === "UK") {
      return "Great%20Britain";
    }

    if (data.MRData.RaceTable.Races[0].Circuit.Location.country === "UAE") {
      return "Abu%20Dhab";
    }

    return data.MRData.RaceTable.Races[0].Circuit.Location.country;
  };

  return (
    <div className="results">
      {status === "success" && data.MRData.RaceTable.Races.length > 0 && (
        <>
          <Title
            title={`${data.MRData.RaceTable.Races[0].raceName}`}
            subtitle={`${data.MRData.RaceTable.Races[0].Circuit.circuitName}`}
          />
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/${correctLocation()}.jpg.transform/fullbleed/image.jpg)`,
            }}
          >
            <div className="transparent-black">
              <p>{data.MRData.RaceTable.Races[0].Circuit.Location.country}</p>
            </div>
          </div>
          <Table
            columns={columns}
            dataSource={
              data?.MRData.RaceTable.Races.length > 0 &&
              data?.MRData.RaceTable.Races[0].Results
            }
            loading={status === "success" ? false : true}
            pagination={false}
            size="small"
            bordered={true}
            rowKey={["Time", "time"]}
          />
        </>
      )}
      {status === "error" && (
        <ErrorMessage description="Error while loading results data" />
      )}
    </div>
  );
};
