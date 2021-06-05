import React from 'react';
import { Typography } from '@material-ui/core';
import HomeButton from '../components/HomeButton';
import SearchForm from '../components/Search Page/SearchForm';

const SearchPage = () => {
  console.warn('search');
  return (
    <>
      <Typography>Search</Typography>
      <HomeButton />
      {/* <Button onClick={() => getArtists('Incubus')}>Get</Button> */}
      <SearchForm />
    </>
  );
};

export default SearchPage;
