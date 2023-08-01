import React from 'react';
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
      paddingTop: '4vh'
    },
    hover: {
      cursor: 'grab',
      '&:hover': {
        color: "#6b6b6b"
      },
    }
  })
);

const PageContainer = ({ children }) => {
  const classes = styles();

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
            <Grid item className={classes.childrenContainer}>
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