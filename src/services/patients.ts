import axios from "axios";
import { Diagnosis, Patient, PatientFormValues } from "../types";

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

const getPatient = async (id: string | undefined) => {

  const { data } = await axios.get<Patient>(
    `${apiBaseUrl}/patients/${id}`
  );


  return data;

};
const getDiagnoses = async () => {
  const { data } = await axios.get<Diagnosis[]>(
    `${apiBaseUrl}/diagnoses`
  );

  return data;

};

export default {
  getAll, create, getPatient, getDiagnoses
};

