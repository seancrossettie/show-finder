import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const ArtistHeader = ({ displayName }) => (
  <>
    <Typography variant='h1'>{displayName}</Typography>
  </>
);

ArtistHeader.propTypes = {
  displayName: PropTypes.string
};

export default ArtistHeader;
