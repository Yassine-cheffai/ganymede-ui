import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { formatSpecialities } from "../utils/utils";
import { CoachType } from "../utils/types";
import { NavLink } from "react-router-dom";
import styles from "./components.module.css";

export default function CoachCard({
  id,
  fullName,
  rating,
  specialities,
}: CoachType) {
  return (
    <Paper variant="outlined">
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <NavLink to={`${id}`}>
            <img
              alt="coach"
              style={{
                height: "120px",
                width: "120px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
              src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg"
            ></img>
          </NavLink>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <NavLink to={`${id}`} className={styles.coachName}>
            <Typography variant="h5">{fullName}</Typography>
          </NavLink>
          <Rating
            name="read-only"
            value={rating}
            readOnly
            precision={0.5}
            size="small"
          />
          <Typography variant="body1">
            {formatSpecialities(specialities)}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
