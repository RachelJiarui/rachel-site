import React from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import NavBar from './NavBar';

const styles = makeStyles((theme) =>
  createStyles({
    templateContainer: {
      backgroundColor: theme.palette.background.default,
      padding: '4vw',
    },
  })
);

const ProjectTemplate = ( {content} ) => {
  const classes = styles();

  return (
    <div className={classes.templateContainer}>
      <Grid container className={classes.gridItem}>
          <Grid item xs={10}>
            <Typography variant="h5">{content.skills}</Typography> {/*map*/}
            <Typography variant="h2">{content.name}</Typography>
            <div>
              <img src={content.hero_image}/>
              {content.github && (
                <a href={content.github}>GitHub Repository</a>
              )}
            </div>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h4">Description</Typography>
                <Typography variant="body1">{content.desc}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4">My Contributions</Typography>
                <Typography variant="body1">{content.contributions}</Typography>
              </Grid>
              <Typography variant="h4">Analysis</Typography>
              {content.analysis.map((element) => (
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="body1">{element.sub_text}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {element.sub_image ? (
                      <img src={element.sub_image}/>
                    ) : element.code_block && (
                      <p>CODE BLOCK</p>
                    )}
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Typography variant="h4">Resources</Typography>
            <Grid container flexDirection="column">
              {content.resources.map((element) => (
                  <Grid item>
                    <a href={element.resource_link}>
                      <Typography variant="body1">{element.resource_name}</Typography>
                    </a>
                    <Typography variant="body1">{element.resource_tag}</Typography>
                  </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <NavBar/>
          </Grid>
        </Grid>
    </div>
  );
};

export default ProjectTemplate;