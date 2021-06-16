import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const MyEventsButton = () => {
  const history = useHistory();
  return (
    <>
      <Button color='primary' variant='outlined' onClick={() => history.push('/my-events')}>My Events</Button>
    </>
  );
};

export default MyEventsButton;
