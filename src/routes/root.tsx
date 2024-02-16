import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Bar from "../components/bar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Box>
      <Bar />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
