import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import PageContainer from "./components/common/PageContainer";
import MangaCard from "./components/cards/MangaCard";

const styles = makeStyles((theme) =>
  createStyles({
    libraryContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '80vh'
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
      padding: '4vw',
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
    }
  })
);

const mangaList = [
  {
    title: "Goodnight Punpun",
    author: "idk",
    caption: "Pretty good",
    images: [
      {
        href: "/images/cat_comp_projects.png"
      },
      {
        href: "/images/cat_comp_projects.png"
      },
      {
        href: "/images/cat_comp_projects.png"
      },
    ]
  },
  {
    title: "Blood on the Tracks",
    author: "idk",
    caption: "Gas"
  },
  {
    title: "Blood on the Tracks",
    author: "idk",
    caption: "Gas"
  },
  {
    title: "Blood on the Tracks",
    author: "idk",
    caption: "Gas"
  },
  {
    title: "Blood on the Tracks",
    author: "idk",
    caption: "Gas"
  },
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
        <Grid item xs={4} className={classes.scrollLibrary}>
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
        <Grid item className={classes.captionSpacing} xs={8}>
          <Typography
            variant="h2"
            className={classes.pointerCursor}
            onClick={handleReset}>Japanese Comics</Typography>
          {selectedManga ?
            <>
              <Masonry columns={{ xs: 1, md: 2 }} spacing={2}>
                {selectedManga.images && selectedManga.images.map((image, index) => (
                  <img key={`mangaImages-${index}`} src={image.href}/>
                ))}
              </Masonry>
              <Typography variant="body1" className={classes.caption}>{selectedManga.caption}</Typography>
            </>
          : <Typography variant="body1" className={classes.caption}>{defaultCaption}</Typography>}
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