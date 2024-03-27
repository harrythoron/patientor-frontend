import axios from "axios";
import { Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(
    `${apiBaseUrl}/patients`
  );
  console.log('patients--', data);


  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients`,
    object
  );

  return data;
};

const getPatient = async (id: string) => {
  console.log(`${apiBaseUrl}/patients/${id}`);

  const { data } = await axios.get<Patient>(
    `${apiBaseUrl}/patients/${id}`
  );
  console.log('getsinglepatient-', data);


  return data;

};

export default {
  getAll, create, getPatient
};

