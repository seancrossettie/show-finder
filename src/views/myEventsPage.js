import React from 'react';
import { Typography } from '@material-ui/core';
import HomeButton from '../components/HomeButton';

const MyEventsPage = () => {
  console.warn('my events');
  return (
    <>
      <Typography>My Events</Typography>
      <HomeButton />
    </>
  );
};

export default MyEventsPage;
