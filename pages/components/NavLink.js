import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import Link from 'next/link';

const styles = makeStyles((theme) =>
  createStyles({
    link: {
      fontFamily: 'Anaheim, sans-serif',
      fontSize: 18,
      display: "flex",
      zIndex: 1,
      alignItems: "center",
      cursor: 'grab',
      flexWrap: "wrap",
      color: "black",
      textDecoration: "none",
      justifyContent: 'flex-end',
      '&:visited': {
        color: 'inherit'
      },
      '&:hover': {
        color: 'gray'
      }
    },
    iconize: {
      width: "10%",
      height: "auto",
      transform: 'scaleX(-1)',
      marginRight: 5
    },
    linkContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexWrap: "wrap",
    }
  })
);

const NavLink = ({ name, href, pointingLink, setPointingLink }) => {
  const classes = styles();
  const isActive = pointingLink === name

  const handleMouseEnter = () => {
    setPointingLink(name)
  }

  const handleMouseLeave = () => {
    setPointingLink("")
  }

  return (
    <div
      className={classes.linkContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link href={href}>
        <>
          {isActive && (<img className={classes.iconize} src="/images/pointing.png"/>)}
          <a className={classes.link}>{name}</a>
        </>
      </Link>
    </div>
  );
};

export default NavLink;