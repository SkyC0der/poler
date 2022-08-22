import { Table, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/states/statesReducer";

const Covid = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState("");
  const [cases, setCases] = useState("");
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />)
  useEffect(() => {
    fix();
  }, []);
  async function fix() {
    await dispatch(fetchUsers()).then((user) => {
      setCases(user.payload);
      if (user.payload.states.length > 0) {
        setDataTable(
          user.payload.states.map((row) => ({
            state: row.state,
            confirmedCases: row.confirmedCases,
            casesOnAdmission: row.casesOnAdmission,
            key: row.id,
            discharged: row.discharged,
            death: row.death,
          }))
        );
      } else {
        console.log("Nothing Returned");
      }
    });
  }

  const columns = [
    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "Confirmed Cases",
      dataIndex: "confirmedCases",
    },
    {
      title: "Discharged",
      dataIndex: "discharged",
    },
    {
      title: "Death",
      dataIndex: "death",
    },
    {
      title: "Confirmed Cases",
      dataIndex: "confirmedCases",
    },
  ];

  return (
    <div id="covid">
      <h2>Covid Data</h2>

      {!user.loading && user.user.length != 0 ? (
        <div>
          <div className="cases">
            <span>Total Tested: {cases.totalSamplesTested} </span>
            <span>Total Confirmed Cases: {cases.totalConfirmedCases} </span>
            <span>Total Active Cases: {cases.totalActiveCases} </span>
            <span>Discharged: {cases.discharged}</span>
          </div>
          <Table   rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
  bordered columns={columns} dataSource={dataTable} />
        </div>
      ) : (
        <div>
            <Spin indicator={antIcon} style={{fontSize: '64px'}} />
        </div>
      )}
      {/* {users.} */}
    </div>
  );
};

export default Covid;
