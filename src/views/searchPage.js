import React from 'react';
import PropTypes from 'prop-types';
import HomeButton from '../components/Navigation/HomeButton';
import SearchForm from '../components/Search Page/SearchForm';

const SearchPage = ({ user }) => (
  <>
    <HomeButton />
    <SearchForm user={user} />
  </>
);

SearchPage.propTypes = {
  user: PropTypes.object
};

export default SearchPage;
