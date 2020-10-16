import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { getHistory } from "../api";

import { Table, Button } from "antd";

const History = ({ match }) => {
  const patientId = match.params.id;
  const history = useHistory();
  const [data, setData] = useState([]);

  const goToAddHistory = () => {
    history.push(`/history/patient/${patientId}/add`);
  };

  const columns = [
    {
      title: "History ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Patient Id",
      dataIndex: "patientId",
      key: "patientId",
    },
    {
      title: "Blood",
      dataIndex: "blood",
      key: "blood",
    },
    {
      title: "Symptom",
      dataIndex: "symptom",
      key: "symptom",
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "result",
    },
  ];

  useEffect(() => {
    const getPatients = async () => {
      const data = await getHistory(patientId);
      setData(data);
    };
    getPatients();
  }, []);
  return (
    <div>
      <Button onClick={() => goToAddHistory()}>Add History</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default History;
