import React from "react";
import { makeStyles, createStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100vh',
      backgroundColor: theme.palette.background.default,
      padding: '4vw',
    }
  })
);

const MainPageContainer = ({ children }) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};

export default MainPageContainer;