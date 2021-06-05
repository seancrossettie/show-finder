import React from 'react';
import { Typography } from '@material-ui/core';
import HomeButton from '../components/HomeButton';

const MyArtistsPage = () => {
  console.warn('my artists');
  return (
    <>
      <Typography>My Artists</Typography>
      <HomeButton />
    </>
  );
};

export default MyArtistsPage;
