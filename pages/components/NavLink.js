import React from 'react';
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
    active: {
      color: 'gray'
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

const NavLink = ({
  name,
  href,
  subMenu = null,
  pointingLink, 
  setPointingLink,
  activeLink,
  setActiveLink }) => {
    
  const classes = styles();
  const isActive = (activeLink === name) || (pointingLink === name)

  const handleMouseEnter = () => {
    setPointingLink(name)
  }

  const handleMouseLeave = () => {
    setPointingLink("")
  }

  const handleMouseClick = () => {
    setActiveLink(name)
  }

  return (
    <div
      className={classes.linkContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}>
      {isActive && (<img className={classes.iconize} src="/images/pointing.png"/>)}
      <Link href={href}>
          <a className={`${classes.link} ${isActive && classes.active}`}>{name}</a>
      </Link>
    </div>
  );
};

export default NavLink;