import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";

import { getCoach } from "../coachs";
import { CoachDetailsType } from "../utils/types";

export async function loader({ params }: any) {
  const coach: CoachDetailsType = await getCoach(params.coachId);
  return { coach };
}

export default function CoachDetails() {
  const { t } = useTranslation();
  const { coach } = useLoaderData() as { coach: CoachDetailsType };

  return (
    <Box>
      <Paper variant="outlined">
        <Grid container spacing={2} sx={{ p: 3 }}>
          <Grid item xs={12} sm={3}>
            <img
              alt="coach"
              style={{
                height: "180px",
                width: "180px",
                borderRadius: "10px",
              }}
              src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg"
            ></img>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h5">{coach.fullName}</Typography>
            <Typography variant="subtitle1">email: {coach.email}</Typography>
            <Typography variant="subtitle1">
              instagram: {coach.instagram}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
            <Button variant="contained">{t("Book an online course")}</Button>
          </Grid>

          <Grid item xs={8} sx={{ mt: 2, ml: 3 }}>
            <Box>
              <b>{t("Description")}</b>
              <p>{coach.description}</p>
            </Box>
          </Grid>
          <Grid item xs={2} sx={{ mt: 2, ml: 6 }}>
            <Box>
              <b>{t("Specialities") + ":"}</b>
              <p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {coach.specialities.map((speciality) => (
                    <li>{speciality}</li>
                  ))}
                </ul>
              </p>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
