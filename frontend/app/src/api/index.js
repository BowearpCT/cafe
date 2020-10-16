import axios from "axios";

export const getPatientList = async () => {
  const url = "http://localhost:3000/patient";
  const response = await axios.get(url);
  const patientList = response.data.data;
  return patientList;
};

export const savePatient = async (data) => {
  const url = "http://localhost:3000/patient/create";
  await axios.post(url, { data: data });
};

export const getPatientById = async (id) => {
  const url = `http://localhost:3000/patient/${id}`;
  const response = await axios.get(url);
  const patient = response.data.data;
  return patient;
};

export const updatePatient = async (id, data) => {
  const url = `http://localhost:3000/patient/${id}`;
  await axios.put(url, { data: data });
};
