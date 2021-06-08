import React from 'react';
import HomeButton from '../components/Navigation/HomeButton';
import SearchForm from '../components/Search Page/SearchForm';

const SearchPage = () => {
  console.warn('search');
  return (
    <>
      <HomeButton />
      <SearchForm />
    </>
  );
};

export default SearchPage;
