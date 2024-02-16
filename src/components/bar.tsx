import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Bar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
              Ganymede
            </Link>
          </Typography>
          <Button color="inherit">
            <Link
              to={"coachs/"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              reserver un cours prive
            </Link>
          </Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
