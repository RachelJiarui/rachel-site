import { Typography, Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import FullContainer from './components/FullContainer';
import WhoAmISticky from './components/WhoAmISticky';
import NavBar from './components/common/NavBar';

const styles = makeStyles((theme) =>
  createStyles({
    img: {
      width: '175%',
      height: 'auto',
      position: 'absolute',
      top: '-50px', 
      left: '20%',
      transform: 'translateY(5%) translateX(-40%)',
      zIndex: 0
    },
    imgContainer: {
      flexGrow: 1,
      display: "flex",
      alignItems: 'center',
      height: "100%",
      position: 'relative'
    },
    gridItem: {
      height: '100%',
    },
    imgGridItem: {
      alignItems: 'center',
      display: 'flex',
      height: '100%'
    },
    spacing: {
      marginTop: "24px"
    }
  })
);

export default function HomePage() {
  const classes = styles();

  return (
    <div>
      <FullContainer>
        <Grid container className={classes.gridItem}>
          <Grid item xs={5}>
            <Typography variant="h3">Welcome to</Typography>
            <Typography variant="h1">Rachel-Site</Typography>
          </Grid>
          <Grid item xs={5} className={classes.imgGridItem}>
            <div className={classes.imgContainer}>
              <img className={classes.img} src="/images/cat_computer_matrix.png"/>
            </div>
          </Grid>
          <Grid item xs={2}>
            <NavBar/>
          </Grid>
        </Grid>
      </FullContainer>
      <WhoAmISticky/>
    </div>
  );
}
