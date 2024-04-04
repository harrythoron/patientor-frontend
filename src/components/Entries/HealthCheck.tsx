import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Props } from "../EntryDetails";

const HealthCheck = ({ entry }: Props) => {
  console.log("healthcheck-", entry);

  return (
    <div style={{ border: "2px solid black" }}>
      <p>
        {entry.date}
        <MonitorHeartIcon />
      </p>
      <p>
        <em>{entry.description}</em>
      </p>

      {entry.healthCheckRating === 0 ? (
        <FavoriteIcon color="success" />
      ) : (
        <FavoriteIcon color="warning" />
      )}
      <p>diagnose by healthcehck {entry.specialist}</p>
    </div>
  );
};

export default HealthCheck;
