import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
  const { t } = useTranslation();
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <img src="foxlogo.png"></img>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h4">
            {t("Welcome to FoxFit, Your Online Sport Platform")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
