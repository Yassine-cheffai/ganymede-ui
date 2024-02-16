import Box from "@mui/material/Box";
import CoachCard from "../components/coach-card";

export default function Coachs() {
  return (
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
  );
}
