import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import Link from 'next/link';

const styles = makeStyles((theme) =>
  createStyles({
    navBar: {
      textAlign: "right",
      zIndex: 1
    },
    header: {
      fontFamily: "EB Garamond, serif",
      fontSize: 22,
      fontWeight: 500,
      margin: 4,
      borderBottom: "1px solid"
    },
    link: {
      fontFamily: 'Anaheim, sans-serif',
      fontSize: 18,
      textDecoration: "none",
      color: "black",
      '&:visited': {
        color: 'inherit'
      },
      '&:hover': {
        color: 'gray'
      }
    },
    expandMore: {
      fontFamily: "EB Garamond",
      fontSize: 18,
      fontStyle: "italic"
    }
  })
);

const NavBar = () => {
  const classes = styles();

  return (
    <Grid 
      ontainer
      direction="column"
      className={classes.navBar}>
      <Grid item>
        <p className={classes.header}>Necessities</p>
      </Grid>
      <Grid item>
        <Link href="/projects">
          <a className={classes.link}>Technical Projects</a>
        </Link>
      </Grid>
      <Grid item>
        <Link href="/library">
          <a className={classes.link}>Influential Library</a>
        </Link>
      </Grid>
      <Grid item>
        <Link href="/mangas">
          <a className={classes.link}>Japanese Comics</a>
        </Link>
      </Grid>
      <Grid item>
        <Link href="/music">
          <a className={classes.link}>Music Collection</a>
        </Link>
      </Grid>
      <Grid item>
        <Link href="/inspiration">
          <a className={classes.link}>Inspiration & Philosophy</a>
        </Link>
      </Grid>
      <Grid item>
        <p className={classes.expandMore}>Expand for more</p>
      </Grid>
    </Grid>
  );
};

export default NavBar;