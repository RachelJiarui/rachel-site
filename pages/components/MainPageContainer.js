import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.background.default,
    },
    animateContainer: {
      padding: '4vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100vh',
      opacity: 0,
      transform: 'translateY(10px)',
      transition: 'opacity 1s ease, transform 1.5s ease-in-out',
    },
    loaded: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  })
);

const MainPageContainer = ({ children }) => {
  const classes = styles();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate page loading delay (you can replace this with actual page loading logic)
    const loadingTimeout = setTimeout(() => {
      setLoaded(true);
    }, 0);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className={classes.container}>
      <div className={`${classes.animateContainer} ${loaded ? classes.loaded : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default MainPageContainer;