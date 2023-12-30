import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  lime,
  purple,
  orange,
  deepOrange,
  lightBlue,
  blue,
} from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: { main: blue[500] },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
        Secondary
      </Button>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Checkboxes />
        <ColorToggleButton />
      </Box>
    </ThemeProvider>
  );
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
}

function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="coach">Je suis un Coach</ToggleButton>
      <ToggleButton value="student">Je suis un Pratiquant</ToggleButton>
    </ToggleButtonGroup>
  );
}
