import VaccinesIcon from "@mui/icons-material/Vaccines";
import { Props } from "../EntryDetails";

const HospitalEntry = ({ entry }: Props) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <p>
        {entry.date}
        <VaccinesIcon />
      </p>
      <em>{entry.description}</em>
      <p>diagnose by {entry.specialist}</p>
    </div>
  );
};

export default HospitalEntry;
