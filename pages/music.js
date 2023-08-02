import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import PageContainer from "./components/common/PageContainer";
import MusicCard from "./components/cards/MusicCard";
import { musicList, musicDefaultCaption } from '../content-manager/music';

const styles = makeStyles((theme) =>
  createStyles({
    libraryContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '80vh'
    },
    musicContainer: {
      margin: 10,
      cursor: "pointer",
      direction: 'ltr'
    },
    scrollLibrary: {
      overflow: 'auto',
      direction: 'rtl',
      zIndex: 1
    },
    sticky: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      paddingTop: '2vw',
      paddingRight: '2vw',
      paddingLeft: '2vw',
      paddingBottom: '0',
      flexGrow: 1,
      direction: "rtl"
    },
    title: {
      fontFamily: 'Anaheim, sans-serif',
      fontSize: 36,
      color: "gray",
      margin: 0
    },
    author: {
      fontFamily: 'Anaheim, sans-serif',
      fontSize: 24,
      color: "gray",
      margin: 0
    },
    caption: {
      fontFamily: 'Anaheim, sans-serif',
      fontSize: 18,
    },
    pointerCursor: {
      marginBottom: '2vh',
      cursor: "pointer",
      '&:hover': {
        color: "#6b6b6b"
      },
    },
    captionSpacing: {
      padding: "2vw"
    },
  })
);

const Music = () => {
  const classes = styles();
  const [selectedMusic, setSelectedMusic] = useState(null)

  const handleClick = (book) => {
    setSelectedMusic(book)
  }

  const handleReset = () => {
    setSelectedMusic(null)
  }

  return (
    <PageContainer>
      <Grid container>
        <Grid item xs={5} className={classes.scrollLibrary}>
          <div className={classes.libraryContainer}>
            {musicList.map((element, index) => (
              <div
                className={classes.musicContainer}
                key={`library-${index}`}
                onClick={() => handleClick(element)}>
                <MusicCard
                  music={element}
                  isGray={selectedMusic ? selectedMusic.title === element.title && selectedMusic.artist === element.artist : false}/>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item className={classes.captionSpacing} xs={7}>
          <Typography
            variant="h2"
            className={classes.pointerCursor}
            onClick={handleReset}>Music Collection</Typography>
          {selectedMusic ?
          <>
            <Typography variant="body2" className={classes.history}>{selectedMusic.history}</Typography>
            <Typography variant="body1" className={classes.caption}>{selectedMusic.caption}</Typography>
          </>
           :
            <Typography variant="body1" className={classes.caption}>{musicDefaultCaption}</Typography>}
        </Grid>
      </Grid>

      {selectedMusic && (
        <div className={classes.sticky}>
          <MusicCard music={selectedMusic}/>
          <p className={classes.title}>{selectedMusic.title}</p>
          <p className={classes.author}>{"by " + selectedMusic.author}</p>
        </div>
      )}
    </PageContainer>
  );
};

export default Music;