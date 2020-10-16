import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { getPatientList } from "../api";

import { Table, Button } from "antd";

const Patient = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const goToEdit = (record) => {
    history.push(`/patient/edit/${record.id}`);
  };

  const goToHistory = (record) => {
    history.push(`/history/patient/${record.id}`);
  };

  const columns = [
    {
      title: "Patient Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Patient ID",
      // dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <a
          onClick={() => {
            goToHistory(record);
          }}
        >
          {record.patientName}
        </a>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
      key: "occupation",
    },
    {
      title: "Hospital",
      dataIndex: "hospital",
      key: "hospital",
    },
    {
      title: "Birth Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Underlying disease",
      dataIndex: "underlyingDisease",
      key: "underlyingDisease",
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        // <Space size="middle">
        //   <a>Invite {record.name}</a>
        //   <a>Delete</a>
        // </Space>
        <Button
          onClick={() => {
            goToEdit(record);
          }}
        >
          Edit
        </Button>
      ),
    },
  ];

  const goToCreatePatient = () => {
    history.push("/patient/create");
  };

  useEffect(() => {
    const getPatients = async () => {
      const data = await getPatientList();
      setData(data);
    };
    getPatients();
  }, []);
  return (
    <div>
      <Button onClick={() => goToCreatePatient()}>Add Patient</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Patient;
