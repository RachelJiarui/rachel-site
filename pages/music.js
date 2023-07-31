import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import PageContainer from "./components/common/PageContainer";
import MusicCard from "./components/cards/MusicCard";

const styles = makeStyles((theme) =>
  createStyles({
    libraryContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '100vh'
    },
    musicContainer: {
      margin: 10,
      cursor: "pointer"
    },
    scrollLibrary: {
      overflow: 'auto',
      zIndex: 1
    },
    sticky: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      padding: '4vw',
      flexGrow: 1,
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
      cursor: "pointer"
    },
    captionSpacing: {
      padding: "2vw"
    }
  })
);

const musicList = [
  {
    title: "A Lonely Night",
    artist: "The Weeknd",
    history: "From 'Starboy'",
    caption: "Caption"
  },
]

const defaultCaption = "This is my music"

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
            variant="h3"
            className={classes.pointerCursor}
            onClick={handleReset}>Music Collection</Typography>
          {selectedMusic ?
          <>
            <p className={classes.history}>{selectedMusic.history}</p>
            <p className={classes.caption}>{selectedMusic.caption}</p>
          </>
           :
            <p className={classes.caption}>{defaultCaption}</p>}
        </Grid>
      </Grid>

      {selectedMusic && (
        <div className={classes.sticky}>
          <MusicCard music={selectedMusic}/>
          <p className={classes.title}>{selectedMusic.title}</p>
          <p className={classes.author}>{"by " + selectedMusic.author}</p>
        </div>
      )}
      <img src="/images/cat_music.png"/>
    </PageContainer>
  );
};

export default Music;