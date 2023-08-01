import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Button, Typography } from "@mui/material";
import NavLink from './NavLink';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const styles = makeStyles((theme) =>
  createStyles({
    header: {
      textTransform: 'uppercase',
      fontFamily: 'REM, sans-serif',
      fontSize: 18,
      fontWeight: 500,
      color: theme.palette.main.black,
      margin: 4,
      borderBottom: "1px solid"
    },
    expandMore: {
      fontFamily: 'Anaheim, sans-serif',
      fontSize: 16,
      fontStyle: "italic",
      color: "black",
      textTransform: 'none',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: "gray"
      },
    },
    keepingTop: {
      zIndex: 69,
    },
    expandIconContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    justifyExpandButton: {
      display: "flex",
      justifyContent: "flex-end"
    }
  })
);

const NavBar = () => {
  const classes = styles();
  const [isExpanded, setIsExpanded] = useState(true)
  const [pointingLink, setPointingLink] = useState("")

  const navBarCollection = [
    {
      name: "Influential Library",
      href: "/library",
      sub_menu: [
        {
          name: "Reading Now",
          href: "/library/now"
        }
      ]
    },
    {
      name: "Japanese Comics",
      href: "/mangas",
      sub_menu: [
        {
          name: "Reading Now",
          href: "/mangas/now"
        }
      ]
    },
    {
      name: "Music Catalog",
      href: "/music",
      sub_menu: [
        {
          name: "Listening Now",
          href: "/music/now"
        },
      ]
    },
    {
      name: "Design & Philosophy",
      href: "/inspo-philo",
      sub_menu: [
        {
          name: "Current Inspiration",
          href: "/inspo-philo/now"
        }
      ]
    }
  ]

  const navBarExpandElements = [
    {
      heading: "Reflections",
      elements: [
        {
          name: "First Year at NEU",
          href: "/reflections/neu-freshman"
        }
      ]
    },
    {
      heading: "Interesting Links",
      elements: [
        {
          name: "Interesting Websites",
          href: "#"
        },
        {
          name: "My Workflow Tools",
          href: "#"
        }
      ]
    }
  ]

  const handleExpandMore = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <Grid 
      container
      className={classes.keepingTop}
      direction="column">
      <Grid item>
        <p className={classes.header}>My Collections</p>
      </Grid>
      {navBarCollection.map((element, index) => (
        <Grid item key={`navBarNecessities-${index}`}>
          <NavLink
            href={element.href}
            name={element.name}
            pointingLink={pointingLink}
            setPointingLink={setPointingLink}/>
        </Grid>
      ))}

      {isExpanded && 
        navBarExpandElements.map((group, index) => (
          <div key={`navBarExpansion-${index}`}>
            <Grid item>
              <p className={classes.header}>{group.heading}</p>
            </Grid>
            {group.elements.map((element, index) => (
              <Grid item key={`navBarExpansionGroup-${index}`}>
                <NavLink
                  href={element.href}
                  name={element.name}
                  pointingLink={pointingLink}
                  setPointingLink={setPointingLink}/>
              </Grid>
            ))}
          </div>
        ))
      }

      <Grid item className={classes.justifyExpandButton}>
        <Button
          disableElevation
          variant="text"
          disableRipple
          onClick={handleExpandMore}
          className={classes.expandMore}>
            <div className={classes.expandIconContainer}>
              {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Typography variant="body1">
              {isExpanded ? ("Collapse") : ("Expand for more")}
            </Typography>
        </Button>

      </Grid>
    </Grid>
  );
};

export default NavBar;