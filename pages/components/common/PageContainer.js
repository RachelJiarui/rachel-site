import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Typography, Grid} from "@mui/material";
import NavBar from "./NavBar";
import Link from "next/link";

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.background.default,
      padding: '4vw',
      minHeight: '100vh'
    },
    headerContainer: {
      backgroundColor: "transparent",
      height: "8vh",
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%) translateY(-25%)',
    },
    childrenContainer: {
      marginTop: '4vh'
    },
    hover: {
      zIndex: 343,
      cursor: 'grab',
      '&:hover': {
        color: "#6b6b6b"
      },
    },
    animateContainer: {
      opacity: 0,
      transform: 'translateY(10px)',
      transition: 'opacity 1s ease, transform 1.5s ease-in-out',
    },
    loaded: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  })
);

const PageContainer = ({ children }) => {
  const classes = styles();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate page loading delay (you can replace this with actual page loading logic)
    const loadingTimeout = setTimeout(() => {
      setLoaded(true);
    }, 0);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={10}>
          <Grid container flexDirection="column">
            <Grid item>
              <div className={classes.headerContainer}>
                <Link href="/">
                  <Typography className={classes.hover} variant="h4">Rachel-Site</Typography>
                </Link>
              </div>
            </Grid>
            <Grid item className={`${classes.childrenContainer} ${classes.animateContainer} ${loaded ? classes.loaded : ''}`}>
              {children}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <NavBar/>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageContainer;