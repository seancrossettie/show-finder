import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchButton = () => {
  const history = useHistory();
  return (
    <>
      <IconButton onClick={() => history.push('/search')}>
        <SearchIcon />
      </IconButton>
    </>
  );
};

export default SearchButton;
