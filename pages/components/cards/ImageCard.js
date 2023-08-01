import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles({
    img: {
    }
  })
);

const ImageCard = ({ href }) => {
  const classes = styles();

  return (
      <img className={classes.img} src={href}/>
  );
};

export default ImageCard;
