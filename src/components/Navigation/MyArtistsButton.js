import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const MyArtistsButton = () => {
  const history = useHistory();
  return (
    <>
      <Button color='primary' onClick={() => history.push('/my-artists')}>My Artists</Button>
    </>
  );
};

export default MyArtistsButton;
