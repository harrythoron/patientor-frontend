import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import { Props } from "../EntryDetails";

const OccupationalHealthcare = ({ entry }: Props) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <p>
        {entry.date}
        <MedicalInformationIcon />
      </p>
      <em>{entry.description}</em>
      <p>diagnose by {entry.specialist}</p>
    </div>
  );
};

export default OccupationalHealthcare;
