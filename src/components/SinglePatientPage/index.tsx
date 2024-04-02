import { useParams } from "react-router-dom";
import { Diagnosis, Patient } from "../../types";
import patientService from "../../services/patients";
import { useEffect, useState } from "react";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import AltRouteIcon from "@mui/icons-material/AltRoute";

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
          <li>
            <h2 style={{ display: "inline-block" }}>{patient.name}</h2>
            {patient.gender === "male" ? (
              <MaleIcon />
            ) : patient.gender === "female" ? (
              <FemaleIcon />
            ) : (
              <AltRouteIcon />
            )}
          </li>
          <li>ssn: {patient.ssn}</li>
          <li>occupation: {patient.occupation}</li>
          <br />
          <h3>entries</h3>
          {patient.entries.map((entry) => (
            <>
              <p style={{ display: "flex", gap: "10px" }}>
                {entry.date}
                <em>{entry.description}</em>
              </p>
              {entry?.diagnosisCodes.map((code) => (
                <li style={{ display: "flex", gap: "20px" }}>
                  {code} {diagnoses[code]}
                </li>
              ))}
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SinglePatientPage;
