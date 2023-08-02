import { makeStyles, createStyles } from "@mui/styles";
import { Typography, Grid} from "@mui/material";
import { inspoPhiloDefaultCaption } from '../../content-manager/inspo-philo'

const styles = makeStyles((theme) =>
  createStyles({
  })
);

const InposPhiloHeader = ({ href }) => {
  const classes = styles();

  return (
    <Grid container flexDirection="column">
      <Typography variant="h2">Design & Philosophy</Typography>
      <Typography variant="body1">{inspoPhiloDefaultCaption}</Typography>
    </Grid>
  );
};

export default InposPhiloHeader;
