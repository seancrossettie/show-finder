import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const HomeButton = () => {
  const history = useHistory();
  return (
    <>
      <Button onClick={() => {
        history.push('/');
      }}>
          Home
      </Button>
    </>
  );
};

export default HomeButton;
