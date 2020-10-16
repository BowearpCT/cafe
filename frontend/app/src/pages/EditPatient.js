import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import moment from "moment";
import getAge from "get-age";
import uniqid from "uniqid";
import { updatePatient, getPatientById } from "../api";

const EditPatient = ({ match }) => {
  const id = match.params.id;
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [occupation, setOccupation] = useState("");
  const [hospital, setHospital] = useState("");
  const [date, setDate] = useState(moment());
  const [underlyingDisease, setUnderlyingDisease] = useState("");

  const handleChangeDate = (date) => {
    const birthDate = moment(date).format("YYYY-MM-DD");
    setDate(birthDate);
    setAge(getAge(birthDate));
  };

  const onClickSavePatient = async () => {
    const data = {
      patientName,
      age,
      sex,
      occupation,
      hospital,
      date,
      underlyingDisease,
    };
    await updatePatient(id, data);
  };

  const getPatient = async () => {
    const patient = await getPatientById(id);
    const {
      patientName,
      age,
      sex,
      occupation,
      hospital,
      date,
      underlyingDisease,
    } = patient;
    setPatientName(patientName);
    setAge(age);
    setSex(sex);
    setOccupation(occupation);
    setHospital(hospital);
    setDate(moment(date));
    setUnderlyingDisease(underlyingDisease);
  };

  useEffect(() => {
    getPatient();
  }, []);

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
            value={date}
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

export default EditPatient;
