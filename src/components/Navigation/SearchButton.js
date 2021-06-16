import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchButton = () => {
  const history = useHistory();
  return (
    <>
      <Button color='primary' variant='outlined' onClick={() => history.push('/search')}>Search Artists</Button>
    </>
  );
};

export default SearchButton;
