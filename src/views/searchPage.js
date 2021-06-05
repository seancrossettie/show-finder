import React from 'react';
import { Typography } from '@material-ui/core';
import HomeButton from '../components/HomeButton';

const SearchPage = () => {
  console.warn('search');
  return (
    <>
      <Typography>Search</Typography>
      <HomeButton />
    </>
  );
};

export default SearchPage;
