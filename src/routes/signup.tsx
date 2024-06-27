import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../utils/utils";

import Alert from "@mui/material/Alert";
import { pb } from "../utils/pocketbase";
export default function SignUp() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
  });
  const [mismatchedPassword, setMismatchedPassword] = useState(false);
  const [validationPassword, setValidationPassword] = useState("");
  const [badUserName, setBadUserName] = useState(false);
  const [badName, setBadName] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [alignment, setAlignment] = useState("student");
  const [signupFailed, setSignupFailed] = useState(false);
  const navigate = useNavigate();

  const handleChangeType = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let controlFailed = false;
    if (formData.password !== validationPassword || validationPassword === "") {
      setMismatchedPassword(true);
      controlFailed = true;
    } else {
      setMismatchedPassword(false);
    }
    if (formData.userName === "") {
      setBadUserName(true);
      controlFailed = true;
    } else {
      setBadUserName(false);
    }
    if (formData.name === "") {
      setBadName(true);
      controlFailed = true;
    } else {
      setBadName(false);
    }
    if (formData.email === "" || !isValidEmail(formData.email)) {
      setBadEmail(true);
      controlFailed = true;
    } else {
      setBadEmail(false);
    }
    if (formData.password === "" || formData.password.length < 6) {
      setBadPassword(true);
      controlFailed = true;
    } else {
      setBadPassword(false);
    }

    if (controlFailed) {
      return;
    }

    const data = {
      username: formData.userName,
      email: formData.email,
      emailVisibility: true,
      password: formData.password,
      passwordConfirm: formData.password,
      name: formData.name,
      type: alignment,
    };
    console.log(data);
    try {
      let record = await pb.collection("users").create(data);
      console.log(record);

      navigate("/");
    } catch (error) {
      console.error(error);
      setSignupFailed(true);
    }
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
      <Typography variant="h4">{t("Create Account")}</Typography>
      {signupFailed && <Alert severity="error">failed to signup</Alert>}
      <TextField
        required
        fullWidth
        id="userName"
        label={t("User Name")}
        margin="normal"
        value={formData.userName}
        onChange={handleChange}
        error={badUserName}
        helperText={
          badUserName
            ? "verify the username, the username should not contains spaces"
            : ""
        }
      />
      <TextField
        required
        fullWidth
        id="name"
        label={t("Name")}
        margin="normal"
        value={formData.name}
        onChange={handleChange}
        error={badName}
        helperText={badName ? "verify the last name" : ""}
      />
      <TextField
        required
        fullWidth
        id="email"
        label={t("Email")}
        margin="normal"
        value={formData.email}
        onChange={handleChange}
        error={badEmail}
        helperText={badEmail ? "verify the email" : ""}
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
        error={badPassword}
        helperText={
          badPassword
            ? "verify the password, make sure that password is at least 6 characters long"
            : ""
        }
      />
      <TextField
        required
        fullWidth
        id="validate-password"
        label={t("Validate Password")}
        type="password"
        margin="normal"
        error={mismatchedPassword}
        helperText={mismatchedPassword ? t("Password is not matching") : ""}
        value={validationPassword}
        onChange={(event) => {
          setValidationPassword(event.target.value);
        }}
      />
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChangeType}
        aria-label="Type"
        sx={{
          mt: 2,
        }}
      >
        <ToggleButton value="coach">i'm a coach</ToggleButton>
        <ToggleButton value="student">i'm a student</ToggleButton>
      </ToggleButtonGroup>
      <Button
        variant="contained"
        sx={{ mt: "20px" }}
        type="submit"
        size="large"
      >
        {t("Create")}
      </Button>
    </Box>
  );
}
