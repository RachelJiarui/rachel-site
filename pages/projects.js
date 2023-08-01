import React from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import PageContainer from "./components/common/PageContainer";
import Link from "next/link";

const styles = makeStyles((theme) =>
  createStyles({
    technicalProjects: {
      fontFamily: "Victor Mono",
      fontSize: 32,
      color: "gray",
      cursor: "grab",
      zIndex: 1,
      '&:hover': {
        color: "black"
      }
    },
    listPadding: {
      paddingTop: "2vw",
      paddingLeft: "6vw",
    },
    img: {
      width: '150%',
      height: 'auto',
      position: 'absolute',
      top: "20vh", 
      left: '20%',
      transform: 'translateY(10%) translateX(-35%)',
      zIndex: 0
    },
    imgContainer: {
      flexGrow: 1,
      display: "flex",
      alignItems: 'center',
      height: "100%",
      position: 'relative',
    },
  })
);

const technicalProjectsList = [
  {
    name: "Code Synthesization using Large Language Models",
    href: "/projects/synth-LLM"
  },
  {
    name: "Uotchis: Secure Hardware and Non-Fungibility",
    href: "/projects/uotchis"
  },
  {
    name: "Speech Identification and Generation",
    href: "/projects/speech-ai"
  },
  {
    name: "Image Seam Carver",
    href: "/projects/image-seam-carver"
  },
  {
    name: "Invictuss Services Page",
    href: "/projects/invictuss"
  },
  {
    name: "Rachel-Site",
    href: "/projects/rachel-site"
  }
]

const Featured = () => {
  const classes = styles();

  return (
    <PageContainer>
      <Grid container>
        <Grid item xs={6}>
          <Grid container className={classes.listPadding} flexDirection="column">
            <Typography variant="h3">Technical Projects</Typography>
            {technicalProjectsList.map((elements, index) => (
              <Link href={elements.href} key={`techProject-${index}`}>
                <p className={classes.technicalProjects}>
                  {index < 10 ? "0" + index : index} {elements.name}
                </p>
              </Link>
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.imgContainer} xs={6}>
          <img className={classes.img} src="/images/cat_comp_projects.png"/>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Featured;