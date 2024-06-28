import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Alert from "@mui/material/Alert";
import { pb } from "../utils/pocketbase";

export default function SignIn() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [signinFailed, setSigninFailed] = useState(false);

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("signing in ...");
    const authData = await pb
      .collection("users")
      .authWithPassword(formData.userName, formData.password)
      .then(() => {
        console.log("success login");
      })
      .catch(() => {
        console.log("failed inside callback");
        setSigninFailed(true);
      });
    console.log(pb.authStore.token);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      method="post"
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
      <Typography variant="h4" sx={{ mb: 4 }}>
        {t("Sign In")}
      </Typography>
      {signinFailed && (
        <Alert
          severity="error"
          onClose={() => {
            setSigninFailed(false);
          }}
        >
          {t(
            "Failed to sign in, please verify your username and your password",
          )}
        </Alert>
      )}
      <TextField
        required
        fullWidth
        id="userName"
        label={t("User Name")}
        margin="normal"
        value={formData.userName}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        id="password"
        label={t("Password")}
        type="password"
        margin="normal"
        value={formData.password}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        sx={{ mt: "20px" }}
        type="submit"
        size="large"
      >
        {t("Sign In")}
      </Button>
    </Box>
  );
}
