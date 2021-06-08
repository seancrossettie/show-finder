import React from 'react';
import { Typography } from '@material-ui/core';
import HomeButton from '../components/Navigation/HomeButton';

const NotFound = () => {
  console.warn('not found');
  return (
    <>
      <HomeButton />
      <Typography>Page Not Found</Typography>
    </>
  );
};

export default NotFound;
