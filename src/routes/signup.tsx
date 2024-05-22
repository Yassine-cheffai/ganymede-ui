import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

export default function SignUp() {
  const { t } = useTranslation();

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50ch",
        alignItems: "center",
        m: "auto",
        mt: "7ch",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4">{t("Create Account")}</Typography>
      <TextField
        required
        fullWidth
        id="first-name"
        label={t("First Name")}
        margin="normal"
      />
      <TextField
        required
        fullWidth
        id="last-name"
        label={t("Last Name")}
        margin="normal"
      />
      <TextField
        required
        fullWidth
        id="email"
        label={t("Email")}
        margin="normal"
      />
      <TextField
        required
        fullWidth
        id="password"
        label={t("Password")}
        margin="normal"
      />
      <TextField
        required
        fullWidth
        id="validate-password"
        label={t("Validate Password")}
        margin="normal"
      />
      <Button variant="contained" sx={{ mt: "20px" }}>
        {t("Create")}
      </Button>
    </Box>
  );
}
