import React from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import ProjectTemplate from '../components/templates/ProjectTemplate'

const styles = makeStyles((theme) =>
  createStyles({
    
  })
);

const RachelSite = () => {
  const classes = styles();

  const content = {
    skills: [
      "HTML", "CSS", "React", "JavaScript", "NextJs"
    ],
    name: "Rachel-Site",
    hero_image: "/images/old_comp.png",
    desc: [
      {
        bold: "Motivation",
        text: "Contribution is important and beautifying my world is important to me"
      },
      {
        bold: "Gay ass",
        text: "WOOOOOOOOO hi hi hi text me i miss you juliette"
      }
    ],
    contributions: [
      {
        bold: "Motivation",
        text: "Contribution is important and beautifying my world is important to me"
      },
      {
        bold: "Gay ass",
        text: "WOOOOOOOOO hi hi hi text me i miss you juliette"
      }
    ],
    github: "https://github.com/RachelJiarui/rachel-site",
    resources: [
      {
        resource_name: "NextJS",
        resource_link: "https://nextjs-mui-boilerplate.vercel.app/",
        resource_tag: "Reference"
      }
    ]
  }

  return (
    <ProjectTemplate content={content}/>
  );
};

export default RachelSite;