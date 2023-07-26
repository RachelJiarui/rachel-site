import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import PageContainer from "./components/common/PageContainer";
import MangaCard from "./api/MangaCard";

const styles = makeStyles((theme) =>
  createStyles({
    libraryContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '100vh'
    },
    bookContainer: {
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

const mangaList = [
  {
    title: "Goodnight Punpun",
    author: "idk",
    caption: "Pretty good"
  },
  {
    title: "Blood on the Tracks",
    author: "idk",
    caption: "Gas"
  }
]

const defaultCaption = "This is my manga collection"

const Mangas = () => {
  const classes = styles();
  const [selectedManga, setSelectedManga] = useState(null)

  const handleClick = (book) => {
    setSelectedManga(book)
    console.log("book title: " + book.title)
    if (selectedManga) {
      console.log("selectedBook: " + selectedManga.title)
    } else {
      console.log("selectedBook: null")
    }
  }

  const handleReset = () => {
    setSelectedManga(null)
  }

  return (
    <PageContainer>
      <Grid container>
        <Grid item xs={5} className={classes.scrollLibrary}>
          <div className={classes.libraryContainer}>
            {mangaList.map((element, index) => (
              <div
                className={classes.bookContainer}
                key={`mangas-${index}`}
                onClick={() => handleClick(element)}>
                <MangaCard
                  book={element}
                  isGray={selectedManga ? selectedManga.title === element.title && selectedManga.author === element.author : false}/>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item className={classes.captionSpacing} xs={7}>
          <Typography
            variant="h3"
            className={classes.pointerCursor}
            onClick={handleReset}>Japanese Comics</Typography>
          {selectedManga ?
            <>
              {selectedManga.images && selectedManga.images.map((image, index) => (
                <img key={`mangaImages-${index}`} src={image.href}/>
              ))}
              <p className={classes.caption}>{selectedManga.caption}</p>
            </>
          : <p className={classes.caption}>{defaultCaption}</p>}
        </Grid>
      </Grid>

      {selectedManga && (
        <div className={classes.sticky}>
          {console.log("At card: " + selectedManga.title)}
          <MangaCard book={selectedManga}/>
          <p className={classes.title}>{selectedManga.title}</p>
          <p className={classes.author}>{"by " + selectedManga.author}</p>
        </div>
      )}
    </PageContainer>
  );
};

export default Mangas;