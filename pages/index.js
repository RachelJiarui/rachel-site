import { Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import FullContainer from './components/FullContainer';
import WhoAmISticky from './components/WhoAmISticky';

const styles = makeStyles((theme) =>
  createStyles({
    customClass: {
      backgroundColor: theme.palette.secondary.main,
    },
  })
);

export default function HomePage() {
  const classes = styles();

  return (
    <div>
      <FullContainer>
        <Typography variant="h3">Welcome to</Typography>
        <Typography variant="h1">Rachel-Site</Typography>
      </FullContainer>
      <FullContainer>
        <Typography variant="h2">Hello</Typography>
      </FullContainer>
      <WhoAmISticky/>
    </div>
  );
}
