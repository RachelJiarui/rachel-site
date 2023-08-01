import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      position: 'fixed',
      bottom: '8vw',
      left: '3vw'
    },
    image: {
      width: '7%',
      height: 'auto',
      position: 'fixed',
      animation: '$rotate 1s linear infinite',
      animationPlayState: 'paused',
      animationDelay: 'calc(var(--scroll) * -1s)',
      zIndex: 10
    },
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    scrollText: {
      margin: '1.5vw',
      paddingBottom: '1vw',
      fontFamily: 'Anaheim, sans-serif',
      fontSize: 20
    }
  })
);

const SpinningMan = () => {
  const classes = styles();
  const imageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      const animationDelay = `calc(${scrollPercentage * -1}s)`;
      if (imageRef.current) {
        imageRef.current.style.animationDelay = animationDelay;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={classes.container}>
      <Grid container alignItems="center">
        <Grid item>
          <img ref={imageRef} className={classes.image} src="/images/little_man.png"/>
        </Grid>
        <Grid item>
          <div className={classes.scrollText}>Scroll</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SpinningMan;