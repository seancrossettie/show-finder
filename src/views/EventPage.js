import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const EventPage = ({ user }) => {
  console.warn(user);
  return (
    <Typography variant='h1'>Events Page</Typography>
  );
};

EventPage.propTypes = {
  user: PropTypes.object,
};

export default EventPage;
