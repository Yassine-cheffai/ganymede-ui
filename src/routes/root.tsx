import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Bar from "../components/bar";
import CoachCard from "../components/coach-card";

export default function Root() {
  return (
    <Box>
      <Bar />
      <Container sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 256,
              height: 256,
            },
          }}
        >
          <CoachCard />
          <CoachCard />
          <CoachCard />
        </Box>
      </Container>
    </Box>
  );
}
