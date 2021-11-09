import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { getTeamColors } from "../../../queries/staticData";
import { useWindowSize } from "../../../hooks/useWindowsSize";

const teamColors = getTeamColors();

export const DriverTable = ({ status, data, type }) => {
  const size = useWindowSize();
  const [concatName, setConcatName] = useState(false);

  useEffect(() => {
    if (size.width <= 470) {
      setConcatName(true);
    } else {
      setConcatName(false);
    }
  }, [size]);

  const columnsRace = [
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

  const columnsQualifier = [
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
            {!concatName && Driver.givenName}
            <strong>
              {" "}
              {!concatName
                ? Driver.familyName.toUpperCase()
                : Driver.familyName.toUpperCase().substr(0, 3)}
            </strong>
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
      title: "Q1",
      dataIndex: "Q1",
      key: "Q1",
    },
    {
      title: "Q2",
      dataIndex: "Q2",
      key: "Q2",
    },
    {
      title: "Q3",
      dataIndex: "Q3",
      key: "Q3",
    },
  ];

  return (
    <Table
      columns={type === "race" ? columnsRace : columnsQualifier}
      dataSource={
        data?.MRData.RaceTable.Races.length > 0 &&
        (type === "race"
          ? data?.MRData.RaceTable.Races[0].Results
          : data?.MRData.RaceTable.Races[0].QualifyingResults)
      }
      loading={status === "success" ? false : true}
      pagination={false}
      title={() => (type === "race" ? "Race Table" : "Qualifier Table")}
      size="small"
      bordered={true}
      rowKey={(record) => record.position}
      rowClassName={(record, index) =>
        record.FastestLap && record.FastestLap.rank === "1" && "fastest-lap"
      }
    />
  );
};
