import React from 'react';
import { Typography } from '@material-ui/core';

const notFound = () => {
  console.warn('not found');
  return (
    <>
      <Typography>Page not found</Typography>
    </>
  );
};

export default notFound;
