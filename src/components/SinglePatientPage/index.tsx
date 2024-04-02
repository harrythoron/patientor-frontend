import { useParams } from "react-router-dom";
import { Patient } from "../../types";
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
  console.log("singlepat-id-", id);
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    async function fetchPatient() {
      try {
        const patient = await patientService.getPatient(id);
        console.log("singlepatientpage--", patient);
        setPatient(patient);
      } catch (e) {
        console.log("error singlepat-", e);
      }
    }

    fetchPatient();
  }, [id]);

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
                <li>{code}</li>
              ))}
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SinglePatientPage;
