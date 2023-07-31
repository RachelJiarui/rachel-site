import React from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import PageContainer from '../common/PageContainer';
import GitHubIcon from '@mui/icons-material/GitHub';

const styles = makeStyles((theme) =>
  createStyles({
    textContainer: {
      margin: '4vw'
    },
    sectionSpacing: {
      paddingBottom: 64,
      paddingRight: '4vw',
    },
   paragraphSpacing: {
      paddingBottom: 16
    },
    heading: {
      paddingBottom: 10
    },
    heroImage: {
      width: "80vh",
      height: "auto",
      zIndex: 0
    },
    link: {
      fontFamily: 'Anaheim, sans-serif',
      fontSize: 18,
      display: "flex",
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      cursor: 'grab',
      color: "black",
      textDecoration: "underline",
      '&:visited': {
        color: 'inherit'
      },
      '&:hover': {
        color: 'gray'
      }
    },
    iconSpacing: {
      marginRight: "0.5vw"
    }
  })
);

const ProjectTemplate = ( {content} ) => {
  const classes = styles();

  return (
    <PageContainer>
      <Typography variant="h5">{content.skills}</Typography> {/*map*/}
      <Typography variant="h2">{content.name}</Typography>
      <Grid container className={classes.textContainer} flexDirection="column">
        <img className={classes.heroImage} src={content.hero_image}/>
        {content.github && (
          <a className={classes.link} target="_blank" href={content.github}>
            <GitHubIcon className={classes.iconSpacing}/> GitHub Repository
          </a>
        )}
      </Grid>
      <Grid container className={classes.textContainer}>
        <Grid item className={classes.sectionSpacing} xs={6}>
          <Typography className={classes.heading} variant="h4">Description</Typography>
          {content.desc.map((element, index) => (
            <div
              className={classes.paragraphSpacing}
              key={`projDesc-${index}`}>
              <Typography variant="body1">{element.bold}</Typography>
              <Typography variant="body1">{element.text}</Typography>
            </div>
          ))}
        </Grid>
        <Grid className={classes.sectionSpacing} item xs={6}>
          <Typography className={classes.heading} variant="h4">My Contributions</Typography>
          {content.contributions.map((element, index) => (
            <div
              className={classes.paragraphSpacing}
              key={`projContributions-${index}`}>
              <Typography variant="body1">{element.bold}</Typography>
              <Typography variant="body1">{element.text}</Typography>
            </div>
          ))}
        </Grid>
        <Typography className={classes.heading} variant="h4">Related Content</Typography>
        <Grid container flexDirection="column">
          {content.resources.map((element, index) => (
            <Grid item key={`projResources-${index}`}>
              <Grid container justifyContent="space-between">
                <Grid item xs={6}>
                  <a className={classes.link} target="_blank" href={element.resource_link}>
                    <Typography variant="body1">{element.resource_name}</Typography>
                  </a>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{element.resource_tag}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ProjectTemplate;