import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import moment from "moment";
import getAge from "get-age";
import { useHistory } from "react-router-dom";
import { getPatientList, savePatient } from "../api";
import uniqid from "uniqid";

const CreatePatient = () => {
  const history = useHistory();
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [occupation, setOccupation] = useState("");
  const [hospital, setHospital] = useState("");
  const [date, setDate] = useState();
  const [underlyingDisease, setUnderlyingDisease] = useState("");

  const handleChangeDate = (date) => {
    const birthDate = moment(date).format("YYYY-MM-DD");
    setDate(birthDate);
    setAge(getAge(birthDate));
  };

  const onClickSavePatient = async () => {
    const data = {
      id: uniqid(),
      patientName,
      age,
      sex,
      occupation,
      hospital,
      date,
      underlyingDisease,
    };
    console.log("data", data);
    await savePatient(data);
    history.push("/");
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        {/* <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
        <Form.Item label="Patient Name">
          <Input
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Sex">
          <Select onChange={(sex) => setSex(sex)} value={sex}>
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="female">female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Occupation">
          <Input
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Hospital">
          <Input
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Birth Date">
          <DatePicker
            onChange={(e) => {
              handleChangeDate(e);
            }}
          />
        </Form.Item>
        <Form.Item label="Underlying Disease">
          <Input
            value={underlyingDisease}
            onChange={(e) => setUnderlyingDisease(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Save">
          <Button onClick={() => onClickSavePatient()}>Save</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreatePatient;
