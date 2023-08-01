import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  pointingLink, 
  setPointingLink}) => {

  const classes = styles();
  const router = useRouter();
  const currentRoute = router.pathname;

  const hasPointer = pointingLink === name
  const isSelected = currentRoute === href

  const handleMouseEnter = () => {
    setPointingLink(name)
  }

  const handleMouseLeave = () => {
    setPointingLink("")
  }

  return (
    <div>
      <div
        className={classes.linkContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {(hasPointer || isSelected) && (<img className={classes.iconize} src="/images/pointing.png"/>)}
        <Link href={href}>
            <a className={`${classes.link} ${(hasPointer || isSelected) && classes.active}`}>{name}</a>
        </Link>
      </div>
    </div>
  );
};

export default NavLink;