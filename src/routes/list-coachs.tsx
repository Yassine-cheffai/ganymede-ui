import Box from "@mui/material/Box";
import CoachCard from "../components/coach-card";
import { getCoachs } from "../coachs";
import { useLoaderData } from "react-router-dom";
import { CoachType } from "../utils/types";

export async function loader() {
  const coachs: CoachType[] = await getCoachs();
  return { coachs };
}
export default function Coachs() {
  const { coachs } = useLoaderData() as { coachs: CoachType[] };
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
      {coachs.map((coach: CoachType) => (
        <CoachCard
          id={coach.id}
          fullName={coach.fullName}
          rating={coach.rating}
          specialities={coach.specialities}
        />
      ))}
    </Box>
  );
}
