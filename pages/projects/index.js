import React from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import ProjectTemplate from "../components/ProjectTemplate"

const styles = makeStyles((theme) =>
  createStyles({
 
  })
);

const Featured = () => {
  const classes = styles();

  const content = {
    skills: [
      "HTML", "CSS", "React", "JavaScript", "NextJs"
    ],
    name: "Rachel-Site",
    hero_image: "/images/old_comp.png",
    desc: "It's my portfolio website",
    contributions: "It's my contributions",
    github: "https://github.com/RachelJiarui/rachel-site",
    analysis: [
      {
        sub_text: "I worked hard on this",
        code_block: {
          code: `console.log("Hi")`,
          language: "python"
        }
      },
      {
        sub_text: "I super worked hard on this",
        sub_image: "/images/old_comp.png"
      }
    ],
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

export default Featured;