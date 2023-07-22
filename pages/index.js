import { Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles({
    customClass: {
      backgroundColor: "red",
    },
  })
);

export default function Home() {
  const classes = styles();

  return (
    <Typography variant="h2" className={classes.customClass}>
      Hi
    </Typography>
  );
}
