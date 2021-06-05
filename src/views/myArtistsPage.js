import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import HomeButton from '../components/HomeButton';
import getArtists from '../helpers/data/artistData';

const MyArtistsPage = () => {
  console.warn('my artists');

  // const [artist, setArtist] = useState('');

  // const handleSearch = (artist) => {
  //   getArtists(artist);
  // };
  return (
    <>
      <Typography>My Artists</Typography>
      <Button onClick={() => getArtists('Incubus')}>Get Some Art</Button>
      <form>
        <TextField id="standard-basic" label="Standard" />
      </form>
      <HomeButton />
    </>
  );
};

export default MyArtistsPage;
