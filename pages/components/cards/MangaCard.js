import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import axios from 'axios';
import DownloadingIcon from '@mui/icons-material/Downloading';

const styles = makeStyles((theme) =>
  createStyles({
    galleryImage: {
      width: '15vh',
      height: 'auto',
    },
    grayifyImage: {
      filter: "grayscale(75%)"
    },
    align: {
      width: '15vh',
      height: '22vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: "center",
    },
  })
);

const MangaCard = ({ book, isGray }) => {
  const [coverUrl, setCoverUrl] = useState('');
  const classes = styles();

  const fetchMangaCover = () => {
    const baseUrl = 'https://api.mangadex.org';
    let mangaId;

    // First GET request to fetch manga details
    axios.get(`${baseUrl}/manga`, {
      params: {
        title: book.title
      }
    })
    .then((mangaDetailsResponse) => {
      // manga id
      mangaId = mangaDetailsResponse.data.data[0].id
      // console.log(mangaDetailsResponse)
      // manga cover art id
      const relationshipsArray = mangaDetailsResponse.data.data[0].relationships;
      // Find the object with "type":"cover_art"
      const coverArtObj = relationshipsArray.find(item => item.type === "cover_art");
      const mangaCoverId = coverArtObj.id

      // Second GET request to fetch the manga cover art details
      return axios.get(`${baseUrl}/cover/${mangaCoverId}`);
    })
    .then((mangaCoverResponse) => {
      // Get the cover art URL from the manga cover art details response
      const fileName = mangaCoverResponse.data.data.attributes.fileName;

      // Set the cover URL in the state
      setCoverUrl(`https://uploads.mangadex.org/covers/${mangaId}/${fileName}`);
    })
    .catch((error) => {
      console.error('Error fetching manga cover art:', error);
    });
  };

  useEffect(() => {
    fetchMangaCover();
  }, [book.title]);

  return (
    coverUrl ?
      (<img className={`${classes.galleryImage} ${isGray ? classes.grayifyImage : ''}`} src={coverUrl} alt={book.title} />) : (
        <div className={classes.align}>
          <DownloadingIcon/>
        </div>
    )
  );
};

export default MangaCard;
