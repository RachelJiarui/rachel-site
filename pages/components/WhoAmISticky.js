import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const styles = makeStyles((theme) =>
  createStyles({
    sticky: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      padding: '4vw',
      flexGrow: 1,
    },
  })
);

const WhoAmISticky = ({ children }) => {
  const classes = styles();

  return (
    <div className={classes.sticky}>
      <Typography
        variant="h2">
          Am I Real?
      </Typography>
      <Typography variant="h4">
        Evidence
      </Typography>
    </div>
  );
};

export default WhoAmISticky;