import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import PageContainer from "./components/common/PageContainer";
import BookCard from "./components/cards/BookCard";
import { bookList, libraryDefaultCaption } from '../content-manager/library';

const styles = makeStyles((theme) =>
  createStyles({
    libraryContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '80vh',
    },
    bookContainer: {
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
    },
    pointerCursor: {
      marginBottom: '2vh',
      cursor: 'pointer',
      '&:hover': {
        color: "#6b6b6b"
      },
    },
    captionSpacing: {
      padding: '2vw',
    },
    quote: {
      paddingLeft: '2vw',
      marginBottom: '2vh',
      borderLeft: '2px solid black'
    }
  })
);

const Library = () => {
  const classes = styles();
  const [selectedBook, setSelectedBook] = useState(null)

  const handleClick = (book) => {
    setSelectedBook(book)
  }

  const handleReset = () => {
    setSelectedBook(null)
  }

  return (
    <PageContainer>
      <Grid container>
        <Grid item xs={5} className={classes.scrollLibrary}>
          <div className={classes.libraryContainer}>
            {bookList.map((element, index) => (
              <div
                className={classes.bookContainer}
                key={`library-${index}`}
                onClick={() => handleClick(element)}>
                <BookCard
                  book={element}
                  isGray={selectedBook ? selectedBook.title === element.title && selectedBook.author === element.author : false}/>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item className={classes.captionSpacing} xs={7}>
          <Typography
            variant="h2"
            className={classes.pointerCursor}
            onClick={handleReset}>Book Library</Typography>
          {selectedBook ?
            <>
              <Typography variant="body2" className={classes.quote}>{selectedBook.quote}</Typography>
              <Typography variant="body1" className={classes.caption}>{selectedBook.caption}</Typography>
            </>
          : <Typography variant="body1" className={classes.caption}>{libraryDefaultCaption}</Typography>}
        </Grid>
      </Grid>

      {selectedBook && (
        <div className={classes.sticky}>
          <BookCard book={selectedBook}/>
          <p className={classes.title}>{selectedBook.title}</p>
          <p className={classes.author}>{"by " + selectedBook.author}</p>
        </div>
      )}
    </PageContainer>
  );
};

export default Library;