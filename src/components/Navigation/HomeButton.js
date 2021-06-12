import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeButton = () => {
  const history = useHistory();
  return (
    <>
      <IconButton onClick={() => history.push('/')}>
        <ArrowBackIcon />
      </IconButton>
    </>
  );
};

export default HomeButton;
