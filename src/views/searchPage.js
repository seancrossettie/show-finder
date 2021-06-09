import React from 'react';
import PropTypes from 'prop-types';
import HomeButton from '../components/Navigation/HomeButton';
import SearchForm from '../components/Search Page/SearchForm';

const SearchPage = ({ user, setUserArtists }) => (
  <>
    <HomeButton />
    <SearchForm user={user} setUserArtists={setUserArtists} />
  </>
);

SearchPage.propTypes = {
  user: PropTypes.object,
  setUserArtists: PropTypes.func
};

export default SearchPage;
