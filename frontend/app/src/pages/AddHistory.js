import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useHistory } from "react-router-dom";
import { saveHistory } from "../api";
import uniqid from "uniqid";

const AddHistory = ({ match }) => {
  const history = useHistory();
  const patientId = match.params.id;
  const [blood, setBlood] = useState("");
  const [result, setResult] = useState("");
  const [symptom, setSymptom] = useState("");

  const onClickSavePatient = async () => {
    const data = {
      id: uniqid(),
      blood,
      result,
      symptom,
      patientId,
    };
    console.log("data", data);
    await saveHistory(data);
    history.push(`/history/patient/${patientId}`);
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Blood">
          <Select onChange={(blood) => setBlood(blood)} value={blood}>
            <Select.Option value="a">A</Select.Option>
            <Select.Option value="b">B</Select.Option>
            <Select.Option value="ab">AB</Select.Option>
            <Select.Option value="o">O</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Symptom">
          <Input.TextArea
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Result">
          <Input value={result} onChange={(e) => setResult(e.target.value)} />
        </Form.Item>
        <Form.Item label="Add">
          <Button onClick={() => onClickSavePatient()}>Add</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddHistory;
