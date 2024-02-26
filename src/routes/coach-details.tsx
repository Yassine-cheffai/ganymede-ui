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
        <Grid container spacing={2}>
          <Grid item xs={4} style={{ textAlign: "center" }}>
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
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Typography variant="h5">Yuri Boyka</Typography>
            <Typography variant="subtitle1">email: boyka@yandex.ru</Typography>
            <Typography variant="subtitle1">
              instagram: instagram/boyka
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Button variant="contained">{t("Book an online course")}</Button>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "center" }}>
            {t("Description")}
          </Grid>
          <Grid item xs={6} style={{ textAlign: "center" }}>
            {t("Specialities")}
            <ul>
              <li>box fit</li>
              <li>yoga</li>
              <li>art martiaux</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
