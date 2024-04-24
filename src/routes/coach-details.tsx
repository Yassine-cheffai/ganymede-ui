import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

export default function CoachDetails() {
  const { t } = useTranslation();

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
            <Typography variant="h5">Yuri Boyka</Typography>
            <Typography variant="subtitle1">email: boyka@yandex.ru</Typography>
            <Typography variant="subtitle1">
              instagram: instagram/boyka
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
            <Button variant="contained">{t("Book an online course")}</Button>
          </Grid>

          <Grid item xs={8} sx={{ mt: 2, ml: 3 }}>
            <Box>
              <b>{t("Description")}</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sapien est, malesuada et sapien vitae, pellentesque
                dictum diam. Fusce egestas id justo ut auctor. Aenean felis
                nunc, laoreet sed sagittis vitae,
              </p>
            </Box>
          </Grid>
          <Grid item xs={2} sx={{ mt: 2, ml: 6 }}>
            <Box>
              <b>{t("Specialities") + ":"}</b>
              <p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>box fit</li>
                  <li>yoga</li>
                  <li>art martiaux</li>
                </ul>
              </p>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
