import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function CoachCard() {
  return (
    <Paper variant="outlined">
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <img
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
            src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg"
          ></img>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h5">Yuri Boyka</Typography>
          <Rating
            name="read-only"
            value={4.5}
            readOnly
            precision={0.5}
            size="small"
          />
          <Typography variant="body1">box fit, yoga ...</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
