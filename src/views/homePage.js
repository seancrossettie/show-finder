import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { signOutUser } from '../helpers/auth';

const HomePage = () => {
  const history = useHistory();

  const handleHistory = (page) => {
    history.push(page);
  };

  console.warn('home');
  return (
    <>
      <Button onClick={signOutUser}>Sign Out</Button>
      <Button onClick={() => handleHistory('/my-artists')}>My artists</Button>
      <Button onClick={() => handleHistory('/my-events')}>My Events</Button>
      <Button onClick={() => handleHistory('/search')}>Search</Button>
      <Typography>Home</Typography>
    </>
  );
};

export default HomePage;
