import React from 'react';
import { Typography } from '@material-ui/core';
import HomeButton from '../components/HomeButton';

const NotFound = () => {
  console.warn('not found');
  return (
    <>
      <Typography>Page Not Found</Typography>
      <HomeButton />
    </>
  );
};

export default NotFound;
