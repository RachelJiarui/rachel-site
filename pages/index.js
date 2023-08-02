import { Typography, Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import MainPageContainer from './components/MainPageContainer';
import SpinningMan from './components/SpinningMan';
import AmIReal from './components/AmIReal';
import NavBar from './components/common/NavBar';
import Link from "next/link";
import { technicalProjectsList } from '../content-manager/projects';

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
    technicalProjects: {
      fontFamily: 'Anaheim, sans-serif',
      fontSize: 32,
      color: "gray",
      cursor: "grab",
      zIndex: 1,
      marginTop: '2vh',
      marginBottom: 0,
      '&:hover': {
        color: "black"
      }
    },
    listPadding: {
      paddingLeft: "6vw",
      overflowY: 'auto',
    },
    img1: {
      width: '130%',
      height: 'auto',
      position: 'absolute',
      top: "20vh", 
      left: '20%',
      transform: 'translateY(10%) translateX(-35%)',
      zIndex: 0
    },
    imgContainer1: {
      flexGrow: 1,
      display: "flex",
      alignItems: 'center',
      height: "100%",
      position: 'relative',
    },
    scrollFeature: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '50vh',
      top: 20
    },
    scrollText: {
      fontFamily: 'Anaheim, sans-serif',
      fontSize: 18,
      color: "gray",
      paddingTop: '1vw',
      paddingLeft: '6vw',
    },
    techHeader: {
      paddingTop: "2vw",
      position: 'sticky',
      top: 0,
      backgroundColor: theme.palette.background.default,
      zIndex: 5
    },
    linkSpacing: {
      marginTop: '1vh',
      marginBottom: '1vh'
    }
  })
);

export default function HomePage() {
  const classes = styles();

  return (
    <div>
      <MainPageContainer>
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
        <SpinningMan/>
      </MainPageContainer>
      <MainPageContainer>
        <Grid container>
          <Grid item className={classes.imgContainer1} xs={6}>
            <img className={classes.img1} src="/images/cat_comp_projects.png"/>
          </Grid>
          <Grid item xs={6}>
            <Grid container className={classes.listPadding} flexDirection="column">
              <Typography variant="h2" className={classes.techHeader}>Technical Projects</Typography>
              <div className={classes.scrollFeature}>
                {technicalProjectsList.map((elements, index) => (
                  <Link className={classes.linkSpacing} href={elements.href} key={`techProject-${index}`}>
                    <p className={classes.technicalProjects}>
                      {index+1 < 10 ? "0" + (index+1) : (index+1)} {elements.name}
                    </p>
                  </Link>
                ))}
              </div>
            </Grid>
            <div className={classes.scrollText}>Scroll for more {"01 - " + (technicalProjectsList.length<10 ? "0" + technicalProjectsList.length : technicalProjectsList.length)} </div>
            <AmIReal/>
          </Grid>
        </Grid>
      </MainPageContainer>
    </div>
  );
}