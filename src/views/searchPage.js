import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import HomeButton from '../components/Navigation/HomeButton';
import SearchForm from '../components/Search Page/SearchForm';

const SearchPage = ({ user, setUserArtists }) => (
  <>
    <HomeButton />
    <Typography variant='h1' color='primary'>Search Artists</Typography>
    <SearchForm user={user} setUserArtists={setUserArtists} />
  </>
);

SearchPage.propTypes = {
  user: PropTypes.object,
  setUserArtists: PropTypes.func
};

export default SearchPage;
