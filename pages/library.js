import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import PageContainer from "./components/common/PageContainer";
import BookCard from "./api/BookCard";

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
    }
  })
);

const bookList = [
  {
    title: "BFG",
    author: "dahl",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good ",
    quote: "All is well"
  },
  {
    title: "Dune (1965)",
    author: "Frank Herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune (1965)",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good"
  },
  {
    title: "dune",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good "
  },
  {
    title: "dune",
    author: "herbert",
    caption: "Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good Pretty good"
  },
  {
    title: "dune",
    author: "herbert",
    caption: "Pretty good Pretty good"
  },
]

const defaultCaption = "This is an influential library"

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
        <Grid item xs={7}>
          <Typography
            variant="h3"
            className={classes.pointerCursor}
            onClick={handleReset}>Influential Library</Typography>
          {selectedBook ?
            <p className={classes.caption}>{selectedBook.caption}</p>
          : <p>{defaultCaption}</p>}
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