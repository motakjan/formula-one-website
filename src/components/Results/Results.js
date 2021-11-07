import React from "react";
import { useLocation } from "react-router-dom";
import { Table } from "antd";
import { getRoundResults } from "../../queries/queries";
import { useQuery } from "react-query";
import { ErrorMessage } from "../UI/ErrorMessage/ErrorMessage";

const columns = [
  {
    title: "POS",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "NO",
    dataIndex: ["Driver", "permanentNumber"],
    key: "number",
  },
  {
    title: "DRIVER",
    dataIndex: "Driver",
    key: "name",
    render: (Driver) => (
      <>
        <div>
          {Driver.givenName} <strong>{Driver.familyName.toUpperCase()}</strong>
        </div>
      </>
    ),
  },
  {
    title: "CAR",
    dataIndex: ["Constructor", "name"],
    key: "time",
  },
  {
    title: "LAPS",
    dataIndex: "laps",
    key: "laps",
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
  },
];

export const Results = (props) => {
  const location = useLocation();
  const { data, status } = useQuery(
    [
      "roundResultsInside",
      location.pathname.split("/")[location.pathname.split("/").length - 1],
    ],
    () =>
      getRoundResults(
        location.pathname.split("/")[location.pathname.split("/").length - 1]
      )
  );

  console.log(data);

  return (
    <div style={{ padding: "8rem" }}>
      {status === "success" && (
        <Table
          columns={columns}
          dataSource={
            data?.MRData.RaceTable.Races.length > 0 &&
            data?.MRData.RaceTable.Races[0].Results
          }
          loading={status === "success" ? false : true}
          pagination={false}
          size="middle"
          bordered={true}
          rowKey={["Time", "time"]}
        />
      )}
      {status === "error" && (
        <ErrorMessage description="Error while loading results data" />
      )}
    </div>
  );
};
