import React from 'react';
import { Typography } from '@material-ui/core';
import HomeButton from '../components/Navigation/HomeButton';

const MyEventsPage = () => {
  console.warn('my events');
  return (
    <>
      <HomeButton />
      <Typography>My Events</Typography>
    </>
  );
};

export default MyEventsPage;
