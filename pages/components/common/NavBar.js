import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Button, Typography } from "@mui/material";
import NavLink from './NavLink';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { navBarCollection, navBarExpandElements } from '../../../content-manager/navbar-and-links'

const styles = makeStyles((theme) =>
  createStyles({
    header: {
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
  
  const handleExpandMore = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <Grid 
      container
      className={classes.keepingTop}
      direction="column">
      <Grid item>
        <Typography variant="header" className={classes.header}>My Collections</Typography>
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
              <Typography variant="header" className={classes.header}>{group.heading}</Typography>
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