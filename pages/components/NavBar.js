import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Button } from "@mui/material";
import Link from 'next/link';
import NavLink from './NavLink';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const styles = makeStyles((theme) =>
  createStyles({
    header: {
      fontFamily: "EB Garamond, serif",
      fontSize: 22,
      fontWeight: 500,
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
    expandIconContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  })
);

const NavBar = () => {
  const classes = styles();
  const [isExpanded, setIsExpanded] = useState(false)
  const [pointingLink, setPointingLink] = useState("")

  const handleExpandMore = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <Grid 
      container
      direction="column">
      <Grid item>
        <p className={classes.header}>Necessities</p>
      </Grid>
      <Grid item>
        <NavLink
          href="/projects"
          name="Technical Projects"
          pointingLink={pointingLink}
          setPointingLink={setPointingLink}/>
      </Grid>
      <Grid item>
        <NavLink
          href="/library"
          name="Influential Librarys"
          pointingLink={pointingLink}
          setPointingLink={setPointingLink}/>
      </Grid>
      <Grid item>
        <NavLink
          href="/mangas"
          name="Japanese Comics"
          pointingLink={pointingLink}
          setPointingLink={setPointingLink}/>
      </Grid>
      <Grid item>
        <NavLink
          href="/music"
          name="Music Collection"
          pointingLink={pointingLink}
          setPointingLink={setPointingLink}/>
      </Grid>
      <Grid item>
        <NavLink
          href="/inspo-philo"
          name="Design & Philosophy"
          pointingLink={pointingLink}
          setPointingLink={setPointingLink}/>
      </Grid>

      {isExpanded && (
        <>
          <Grid item>
            <p className={classes.header}>Reflections</p>
          </Grid>
          <Grid item>
            <NavLink
              href="/reflections/neu-freshman"
              name="First Year at NEU"
              pointingLink={pointingLink}
              setPointingLink={setPointingLink}/>
          </Grid>
          <Grid item>
            <p className={classes.header}>Miscellaneous</p>
          </Grid>
          <Grid item>
            <NavLink
              href="/misc/interesting-webs"
              name="Interesting Websites"
              pointingLink={pointingLink}
              setPointingLink={setPointingLink}/>
            <NavLink
              href="/misc/workflow-tools"
              name="My Workflow Tools"
              pointingLink={pointingLink}
              setPointingLink={setPointingLink}/>
          </Grid>
        </>
      )}

      <Grid item>
        <Button
          disableElevation
          variant="text"
          disableRipple
          onClick={handleExpandMore}
          className={classes.expandMore}>
            <div className={classes.expandIconContainer}>
              {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            {isExpanded ? ("Collapse") : ("Expand for more")}
        </Button>

      </Grid>
    </Grid>
  );
};

export default NavBar;