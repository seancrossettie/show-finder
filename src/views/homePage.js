import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { signOutUser } from '../helpers/auth';
import SearchButton from '../components/Navigation/SearchButton';

const HomePage = () => {
  const history = useHistory();

  const handleHistory = (page) => {
    history.push(page);
  };

  return (
    <>
      <Button color='primary' onClick={() => handleHistory('/my-artists')}>My artists</Button>
      <Button color='primary' onClick={() => handleHistory('/my-events')}>My Events</Button>
      <SearchButton />
      <Button color='primary' onClick={signOutUser}>Sign Out</Button>
    </>
  );
};

export default HomePage;
