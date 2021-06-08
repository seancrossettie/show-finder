import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const SearchButton = () => {
  const history = useHistory();
  return (
    <>
      <Button onClick={() => {
        history.push('/search');
      }}>
          Search
      </Button>
    </>
  );
};

export default SearchButton;
