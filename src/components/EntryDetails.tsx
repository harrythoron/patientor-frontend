import { Entry } from "../types";
import HealthCheck from "./Entries/HealthCheck";
import HospitalEntry from "./Entries/HospitalEntry";
import OccupationalHealthcare from "./Entries/OccupationalHealthcare";

export interface Props {
  entry: Entry;
}
const assertNever = (value: never): never => {
  throw new Error(`Unrecognisable type of entry: ${JSON.stringify(value)}`);
};

const EntryDetails = ({ entry }: Props) => {
  console.log("entrydetails-", entry);
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntry entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcare entry={entry} />;
    case "HealthCheck":
      return <HealthCheck entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;
