import React from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import ReflectionTemplate from '../components/cards/ReflectionTemplate'
import GitHubIcon from '@mui/icons-material/GitHub';

const styles = makeStyles((theme) =>
  createStyles({
  })
);

const contentExample = {
  title: "NEU Freshman",
  date: "Date",
  imageUrl: "/images/cat_comp_projects.png",
  sections: [
    {
      heading: "Section 1",
      paragraphs: [
        {
          text: "This is a paragraph where I talk about random stuff"
        },
        {
          unordered: true,
          list: [
            "one", "two", "three"
          ]
        },
        {
          text: "Damn"
        }
      ]
    },
    {
      heading: "Section 2",
      paragraphs: [
        {
          text: "Hi"
        }
      ]
    }
  ]
}

const NeuFreshman = () => {
  const classes = styles();

  return (
    <ReflectionTemplate content={contentExample}/>
  );
};

export default NeuFreshman;