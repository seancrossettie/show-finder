import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchButton = () => {
  const history = useHistory();
  return (
    <>
      <IconButton color='primary' onClick={() => history.push('/search')}>
        <SearchIcon />
      </IconButton>
    </>
  );
};

export default SearchButton;
