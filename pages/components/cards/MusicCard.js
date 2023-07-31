import React, { useState, useEffect } from 'react';
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

const MusicCard = ({ music, isGray }) => {
  const classes = styles();
  const [coverUrl, setCoverUrl] = useState('');

  const fetchMusicCover = async () => {
    const apiKey = '74dc85f0e78b54c399b0bffbf2c2bbc4';

    const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${music.artist}&track=${music.title}&format=json`;

    axios.get(apiUrl)
      .then(response => {
        console.log(response)
        const albumCoverURL = response.data?.track?.album?.image?.find(image => image.size === 'extralarge')?.['#text'];
        console.log(albumCoverURL)
        setCoverUrl(albumCoverURL)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // Fetch the book cover when the component mounts
  useEffect(() => {
    fetchMusicCover();
  }, [music.title]);

  return (
      <img className={`${classes.galleryImage} ${isGray ? classes.grayifyImage : ''}`} src={coverUrl} alt={music.title} />
  );
};

export default MusicCard;
