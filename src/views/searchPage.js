import React from 'react';
import { Button, Typography } from '@material-ui/core';
import HomeButton from '../components/HomeButton';
import SearchForm from '../components/search page/SearchForm';
import getArtists from '../helpers/data/artistData';

const SearchPage = () => {
  console.warn('search');
  return (
    <>
      <Typography>Search</Typography>
      <HomeButton />
      <Button onClick={() => getArtists('Incubus')}>Get</Button>
      <SearchForm />
    </>
  );
};

export default SearchPage;
