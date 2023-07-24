import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Typography, Link } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const styles = makeStyles((theme) =>
  createStyles({
    sticky: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      padding: '4vw',
      flexGrow: 1,
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
    },
    iconSpacing: {
      marginRight: 15,
      marginLeft: 15
    },
    link: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      color: "black",
      textDecoration: "none",
      '&:visited': {
        color: 'inherit'
      },
      '&:hover': {
        color: 'gray'
      }
    }
  })
);

const WhoAmISticky = ({ children }) => {
  const classes = styles();

  return (
    <div className={classes.sticky}>
      <Typography
        variant="h2">
          "Am I Real?"
      </Typography>
      <Typography variant="h4" className={classes.iconContainer}>
        Evidence
        <Link href="/" target="_blank" className={classes.link}>
          <EmailIcon className={classes.iconSpacing}/>
        </Link>
        <Link href="https://www.linkedin.com/in/rachel-chen-jia32/" target="_blank" className={classes.link}>
          <LinkedInIcon className={classes.iconSpacing}/>
        </Link>
        <Link target="_blank" href="https://github.com/RachelJiarui" className={classes.link}>
          <GitHubIcon className={classes.iconSpacing}/>
        </Link>
      </Typography>
    </div>
  );
};

export default WhoAmISticky;