import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const ArtistPageDisplay = ({ displayName }) => (
  <>
    <Typography variant='h1'>{displayName}</Typography>
  </>
);

ArtistPageDisplay.propTypes = {
  displayName: PropTypes.string
};

export default ArtistPageDisplay;
