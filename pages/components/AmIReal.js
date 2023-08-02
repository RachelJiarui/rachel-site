import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Typography, Link } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      paddingLeft: '5vw',
      paddingTop: '5vh',
      flexGrow: 1,
    },
    iconContainer: {
      marginTop: '2vh',
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
    },
    iconSpacing: {
      marginRight: 10,
      marginLeft: 10
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

const AmIReal = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography
        variant="h2">
          "Am I Real?"
      </Typography>
      <div variant="h4" className={classes.iconContainer}>
        <Link href="/" target="_blank" className={classes.link}>
          <EmailIcon className={classes.iconSpacing}/>
        </Link>
        <Link href="https://www.linkedin.com/in/rachel-chen-jia32/" target="_blank" className={classes.link}>
          <LinkedInIcon className={classes.iconSpacing}/>
        </Link>
        <Link target="_blank" href="https://github.com/RachelJiarui" className={classes.link}>
          <GitHubIcon className={classes.iconSpacing}/>
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/rachel-chen-jia32/overlay/1635530900708/single-media-viewer/?profileId=ACoAADUl5isBc8bqmuKzrJfKVEqnDS65--gjTvg" className={classes.link}>
          <DescriptionIcon className={classes.iconSpacing}/>
        </Link>
      </div>
    </div>
  );
};

export default AmIReal;