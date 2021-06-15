import React from 'react';
import { Button } from '@material-ui/core';
import MyArtistsButton from '../components/Navigation/MyArtistsButton';
import MyEventsButton from '../components/Navigation/MyEventsButton';
import SearchButton from '../components/Navigation/SearchButton';
import { signOutUser } from '../helpers/auth';

const HomePage = () => (
    <>
      <MyArtistsButton />
      <MyEventsButton />
      <SearchButton />
      <Button color='primary' onClick={signOutUser}>Sign Out</Button>
    </>
);

export default HomePage;
