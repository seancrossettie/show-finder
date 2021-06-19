import React from 'react';
import { Typography } from '@material-ui/core';
import HomeButton from '../components/Navigation/HomeButton';

const NotFound = () => (
    <>
      <HomeButton />
      <Typography variant='h1' color='primary'>Page Not Found</Typography>
    </>
);

export default NotFound;
