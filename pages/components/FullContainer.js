import React from "react";
import { makeStyles, createStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      width: '100%',
      height: '100vh',
      backgroundColor: theme.palette.background.default,
      padding: '4vw'
    }
  })
);

const FullContainer = ({ children }) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};

export default FullContainer;