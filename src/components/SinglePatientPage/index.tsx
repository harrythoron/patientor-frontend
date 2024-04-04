import { useParams } from "react-router-dom";
import { Diagnosis, Patient } from "../../types";
import patientService from "../../services/patients";
import { useEffect, useState } from "react";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import EntryDetails from "../EntryDetails";

// interface Props {
//   patients: Patient[];
// }
const SinglePatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient>();
  const [diagnoses, setDiagnoses] = useState();

  useEffect(() => {
    async function fetchPatient() {
      try {
        const patient = await patientService.getPatient(id);
        let async_diagnoses = await patientService.getDiagnoses();
        console.log("singlepatientpage--", patient);
        let changed_diagnoses = async_diagnoses.reduce((acc, curr) => {
          acc[curr.code] = curr.name;
          return acc;
        }, {});
        // console.log("changed_diagnoses-", changed_diagnoses);

        setPatient(patient);
        setDiagnoses(changed_diagnoses);
      } catch (e) {
        console.log("error singlepat-", e);
      }
    }

    fetchPatient();
  }, [id]);
  console.log("diag-", diagnoses);

  return (
    <div>
      {patient && (
        <ul>
          <li key={patient.name}>
            <h2 style={{ display: "inline-block" }}>{patient.name}</h2>
            {patient.gender === "male" ? (
              <MaleIcon />
            ) : patient.gender === "female" ? (
              <FemaleIcon />
            ) : (
              <AltRouteIcon />
            )}
          </li>
          <li key={patient.ssn}>ssn: {patient.ssn}</li>
          <li key={patient.occupation}>occupation: {patient.occupation}</li>
          <br />
          <h3>entries</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {patient.entries.map((entry) => (
              <EntryDetails entry={entry} />
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default SinglePatientPage;
