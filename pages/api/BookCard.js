import React, { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import axios from 'axios';

const styles = makeStyles((theme) =>
  createStyles({
    galleryImage: {
      width: '15vh',
      height: 'auto',
    },
    grayifyImage: {
      filter: "grayscale(75%)"
    }
  })
);

const BookCard = ({ book, isGray }) => {
  const classes = styles();
  const [coverUrl, setCoverUrl] = useState('');

  // Fetch the book cover using Google Books API
  const fetchBookCover = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          book.title
        )}+inauthor:${book.author}&maxResults=1&key=AIzaSyDFJNamnXbMPqJcKYHievrP3k6yOa6EJT4`
      );
      const book_res = response.data.items[0].volumeInfo;
      const coverLink =
        book_res.imageLinks && book_res.imageLinks.thumbnail
          ? book_res.imageLinks.thumbnail
          : 'https://via.placeholder.com/128x192'; // Fallback image if no cover is available
      setCoverUrl(coverLink);
    } catch (error) {
      console.error('Error fetching book cover:', error);
    }
  };

  // Fetch the book cover when the component mounts
  React.useEffect(() => {
    fetchBookCover();
  }, [book.title]);

  return (
      <img className={`${classes.galleryImage} ${isGray ? classes.grayifyImage : ''}`} src={coverUrl} alt={book.title} />
  );
};

export default BookCard;
