import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const styles = makeStyles((theme) =>
  createStyles({
    sticky: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      padding: '4vw'
    },
    underline: {
      borderBottom: '2px solid'
    }
  })
);

const WhoAmISticky = ({ children }) => {
  const classes = styles();

  return (
    <div className={classes.sticky}>
      <Typography
        variant="h2"
        className="classes.underline">
          Tag, you're it
      </Typography>
      <Typography variant="h4">
        Come find me at
      </Typography>
    </div>
  );
};

export default WhoAmISticky;